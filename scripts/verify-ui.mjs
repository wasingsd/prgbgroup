/* Run after npm run build. Pass PLAYWRIGHT_MODULE when using a bundled runtime. */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE
    ? new URL("index.mjs", process.env.PLAYWRIGHT_MODULE).href
    : "playwright"
);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.resolve(__dirname, "../out");
const artifacts = path.resolve(__dirname, "../.impeccable/review");
const base = "/prgbgroup";
const origin = "http://127.0.0.1:4185";
const travel = "https://prgb-travel-group.vercel.app";
const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};
const server = http.createServer((req, res) => {
  const url = new URL(req.url, origin);
  if (!url.pathname.startsWith(base + "/") && url.pathname !== base) {
    res.writeHead(404).end();
    return;
  }
  let file = path.resolve(
    root,
    "." + decodeURIComponent(url.pathname.slice(base.length) || "/"),
  );
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    res.setHeader(
      "Content-Type",
      mime[path.extname(file)] || "application/octet-stream",
    );
    res.end(fs.readFileSync(file));
  } catch {
    res.writeHead(404).end();
  }
});
const report = [];

(async () => {
  await new Promise((resolve) => server.listen(4185, "127.0.0.1", resolve));
  fs.mkdirSync(artifacts, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [name, viewport] of [
      ["desktop", { width: 1280, height: 900 }],
      ["mobile", { width: 390, height: 844 }],
    ]) {
      const context = await browser.newContext({
        viewport,
        reducedMotion: "reduce",
      });
      // Verify first-party pages and the user-visible fallback without running third-party embeds.
      await context.route("https://www.tiktok.com/**", (route) =>
        route.abort(),
      );
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      for (const [label, route] of [
        ["home", "/"],
        ["cargo", "/pr-cargo/"],
        ["contact", "/contact/"],
      ]) {
        await page.goto(origin + base + route, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);
        await page.locator("h1").waitFor();
        const typography = await page.evaluate(() => ({
          family: getComputedStyle(document.body).fontFamily,
          navigationSize: parseFloat(
            getComputedStyle(document.querySelector(".nav-link")).fontSize,
          ),
          paragraphSizes: [
            ...document.querySelectorAll(
              ".cargo-service p, .advantage-list p, .travel-service-list p, .process-steps p",
            ),
          ].map((element) => parseFloat(getComputedStyle(element).fontSize)),
        }));
        assert.match(
          typography.family,
          /Noto Sans Thai/,
          "approved Thai font must be applied, not only downloaded",
        );
        assert.ok(
          typography.navigationSize >= 16,
          "navigation must remain at least 16px",
        );
        assert.ok(
          typography.paragraphSizes.every((size) => size >= 16),
          "ordinary content must remain at least 16px",
        );
        const fontSession = await context.newCDPSession(page);
        await fontSession.send("DOM.enable");
        await fontSession.send("CSS.enable");
        const { root: documentNode } =
          await fontSession.send("DOM.getDocument");
        const { nodeId: headingNode } = await fontSession.send(
          "DOM.querySelector",
          { nodeId: documentNode.nodeId, selector: "h1" },
        );
        const { fonts: renderedFonts } = await fontSession.send(
          "CSS.getPlatformFontsForNode",
          { nodeId: headingNode },
        );
        assert.ok(
          renderedFonts.some(
            (font) => font.isCustomFont && font.familyName === "Noto Sans Thai",
          ),
          "Thai glyphs must actually render in Noto Sans Thai",
        );
        await fontSession.detach();
        await page.evaluate(async () => {
          for (const image of document.images) image.loading = "eager";
          await Promise.all(
            [...document.images].map((image) => image.decode().catch(() => {})),
          );
        });
        assert.equal(
          await page.locator("h1").count(),
          1,
          `${name}/${label}: one h1`,
        );
        const expectedActive =
          label === "home"
            ? "/"
            : label === "cargo"
              ? "/pr-cargo/"
              : "/contact/";
        const activeLink = page.locator(
          name === "desktop"
            ? '.desktop-nav a[aria-current="page"]'
            : '#mobile-navigation a[aria-current="page"]',
        );
        assert.equal(
          new URL(await activeLink.getAttribute("href"), origin).pathname,
          base + expectedActive,
          "active menu supports exported trailing slash",
        );
        const geometry = await page.evaluate(() => ({
          width: innerWidth,
          scroll: document.documentElement.scrollWidth,
          broken: [...document.images]
            .filter((i) => !i.complete || !i.naturalWidth)
            .map((i) => i.src),
        }));
        assert.ok(
          geometry.scroll <= geometry.width,
          `${name}/${label}: horizontal overflow ${JSON.stringify(geometry)}`,
        );
        assert.deepEqual(
          geometry.broken,
          [],
          `${name}/${label}: broken images`,
        );
        const travelLinks = page.locator(`a[href="${travel}"]`);
        assert.ok((await travelLinks.count()) >= 2, "Travel stays external");
        for (const link of await travelLinks.all())
          assert.equal(await link.getAttribute("target"), "_blank");
        await page.screenshot({
          path: path.join(artifacts, `${label}-${name}.png`),
          fullPage: true,
          animations: "disabled",
        });
        if (label === "home") {
          await page.screenshot({
            path: path.join(artifacts, `hero-${name}.png`),
            animations: "disabled",
          });
          assert.equal(
            await page.locator('script[src*="tiktok.com/embed.js"]').count(),
            0,
            "legacy DOM-mutating embed script must not load",
          );
          let silentPlayer = false;
          let automaticReadiness = false;
          await page.route("https://www.tiktok.com/player/v1/**", (route) =>
            route.fulfill({
              status: 200,
              contentType: "text/html",
              body: silentPlayer
                ? `<button onclick="this.textContent='Clicked'">Play without readiness</button>`
                : `<button style="width:100%;height:90vh" onclick="emit('onStateChange',1)">Play without readiness</button><script>
                function emit(type,value){parent.postMessage({'x-tiktok-player':true,type,value},'*')}
                if (${automaticReadiness}) setTimeout(()=>emit('onPlayerReady'),100);
                addEventListener('message',event=>{
                  if(event.data?.testCommand==='error') emit('onPlayerError',{errorCode:2001,errorType:'SERVER_ERROR'});
                  if(event.data?.testCommand==='autoplayBlocked') { emit('onError',1); emit('onPlayerError',{errorCode:3002,errorType:'AUTOPLAY_ERROR'}); }
                });
              </script>`,
            }),
          );
          const posts = page.locator("[data-tiktok-post]");
          await page.locator("#updates").scrollIntoViewIfNeeded();
          const firstPlayer = posts.first().locator(".tiktok-player");
          await posts
            .first()
            .frameLocator("iframe")
            .getByRole("button", { name: "Play without readiness" })
            .click();
          await posts
            .first()
            .locator('.tiktok-player[data-status="ready"]')
            .waitFor();
          automaticReadiness = true;
          const src = await posts.first().locator("iframe").getAttribute("src");
          assert.match(src, /tiktok\.com\/player\/v1\/7545742823274892551/);
          assert.match(src, /autoplay=0/);
          assert.match(
            await posts.nth(1).locator("iframe").getAttribute("src"),
            /7448006782632381714/,
          );
          await page.evaluate(() =>
            window.postMessage(
              {
                "x-tiktok-player": true,
                type: "onPlayerError",
                value: { errorCode: 2001 },
              },
              location.origin,
            ),
          );
          assert.equal(await firstPlayer.getAttribute("data-status"), "ready");
          await posts
            .first()
            .locator("iframe")
            .evaluate((frame) =>
              frame.contentWindow.postMessage(
                { testCommand: "autoplayBlocked" },
                "https://www.tiktok.com",
              ),
            );
          await posts
            .first()
            .locator('.tiktok-player[data-status="interactive"]')
            .waitFor();
          await posts
            .first()
            .locator("iframe")
            .evaluate((frame) =>
              frame.contentWindow.postMessage(
                { testCommand: "error" },
                "https://www.tiktok.com",
              ),
            );
          await posts
            .first()
            .locator('.tiktok-player[data-status="unavailable"]')
            .waitFor();
          assert.equal(
            await posts.first().locator("iframe").count(),
            1,
            "errors must not remove a recoverable player",
          );
          assert.equal(
            await posts
              .first()
              .getByRole("link", { name: "เปิดโพสต์ต้นฉบับ", exact: true })
              .getAttribute("href"),
            "https://www.tiktok.com/@korkame19/video/7545742823274892551",
          );
          await posts
            .first()
            .getByRole("button", { name: "ลองโหลดอีกครั้ง" })
            .click();
          await posts
            .first()
            .locator('.tiktok-player[data-status="ready"]')
            .waitFor();
          await posts
            .first()
            .locator("iframe")
            .evaluate((frame) =>
              frame.contentWindow.postMessage(
                { testCommand: "error" },
                "https://www.tiktok.com",
              ),
            );
          await posts
            .first()
            .getByRole("button", { name: "ลองโหลดอีกครั้ง" })
            .waitFor();
          silentPlayer = true;
          await page.clock.install();
          await posts
            .first()
            .getByRole("button", { name: "ลองโหลดอีกครั้ง" })
            .click();
          await posts
            .first()
            .frameLocator("iframe")
            .getByRole("button", { name: "Play without readiness" })
            .waitFor();
          await page.clock.fastForward(12500);
          assert.equal(
            await posts.first().locator("iframe").count(),
            1,
            "absence of readiness must not unmount the player",
          );
          await posts
            .first()
            .frameLocator("iframe")
            .getByRole("button", { name: "Play without readiness" })
            .click();
          await posts
            .first()
            .frameLocator("iframe")
            .getByRole("button", { name: "Clicked", exact: true })
            .waitFor();
          report.push(
            `${name}: applied Noto Sans Thai glyphs and readable type sizes passed; TikTok ready/error/retry/timeout/spoof protection and original links passed (mocked player)`,
          );
        }
        if (label === "cargo") {
          const tables = await page.locator("tbody").allTextContents();
          const values = await page
            .locator("tbody tr")
            .evaluateAll((rows) =>
              rows.map((row) =>
                [...row.cells].map((cell) => cell.textContent.trim()),
              ),
            );
          assert.equal(tables.length, 2);
          assert.deepEqual(values, [
            ["ทั่วไป", "4,000", "20"],
            ["มอก.", "4,900", "45"],
            ["พิเศษ", "7,000", "70"],
            ["อย.", "6,000", "45"],
            ["ทั่วไป", "6,000", "30"],
            ["มอก.", "7,000", "55"],
            ["พิเศษ", "8,300", "75"],
            ["อย.", "8,000", "55"],
          ]);
        }
        if (label === "contact") {
          let requests = [];
          let fail = true;
          await page.route("https://script.google.com/**", async (route) => {
            requests.push(route.request().postDataJSON());
            if (fail) await route.abort("failed");
            else {
              await new Promise((resolve) => setTimeout(resolve, 300));
              await route.fulfill({ status: 200, body: "" });
            }
          });
          await page
            .getByRole("button", { name: "ส่งข้อความ", exact: true })
            .click();
          assert.equal(requests.length, 0, "empty required form must not send");
          await page.getByLabel("ชื่อ–นามสกุล").fill("   ");
          await page.getByLabel("เบอร์โทรศัพท์").fill("   ");
          await page.getByLabel("ข้อความ", { exact: false }).fill("   ");
          await page
            .getByRole("button", { name: "ส่งข้อความ", exact: true })
            .click();
          await page.locator('form [role="alert"]').waitFor();
          assert.equal(requests.length, 0, "whitespace form must not send");
          await page.getByLabel("ชื่อ–นามสกุล").fill("ทดสอบ UI");
          await page.getByLabel("เบอร์โทรศัพท์").fill("0800000000");
          await page
            .locator("#contact-message")
            .fill("ข้อความทดสอบ ไม่ส่งจริง");
          await page
            .getByRole("button", { name: "ส่งข้อความ", exact: true })
            .click();
          await page
            .getByText("ส่งข้อความไม่สำเร็จ", { exact: false })
            .waitFor();
          assert.equal(
            await page.locator("#contact-message").inputValue(),
            "ข้อความทดสอบ ไม่ส่งจริง",
          );
          fail = false;
          await page
            .getByRole("button", { name: "ส่งข้อความ", exact: true })
            .click();
          await page.getByRole("button", { name: "กำลังส่งข้อมูล…" }).waitFor();
          assert.equal(
            await page
              .getByRole("button", { name: "กำลังส่งข้อมูล…" })
              .isDisabled(),
            true,
          );
          await page
            .getByText("ส่งคำขอผ่านแบบฟอร์มแล้ว", { exact: true })
            .waitFor();
          assert.equal(
            await page.locator("#contact-message").inputValue(),
            "ข้อความทดสอบ ไม่ส่งจริง",
          );
          assert.deepEqual(requests.at(-1), {
            name: "ทดสอบ UI",
            phone: "0800000000",
            topic: "สอบถามบริการขนส่ง (Cargo)",
            message: "ข้อความทดสอบ ไม่ส่งจริง",
          });
          assert.equal(
            requests.length,
            2,
            "one simulated failed and one simulated opaque submission only",
          );
          report.push(
            `${name}: contact validation, loading, failed/opaque response and payload passed (mocked, no real submission)`,
          );
        }
        report.push(`${name}/${label}: geometry, images, Travel links passed`);
      }
      if (name === "mobile") {
        const toggle = page.locator(
          'button[aria-controls="mobile-navigation"]',
        );
        await toggle.click();
        assert.equal(await toggle.getAttribute("aria-expanded"), "true");
        await page.keyboard.press("Escape");
        assert.equal(await toggle.getAttribute("aria-expanded"), "false");
        assert.equal(
          await toggle.evaluate((el) => el === document.activeElement),
          true,
        );
        await toggle.click();
        await page
          .locator("#mobile-navigation")
          .getByRole("link", { name: "PR Cargo", exact: true })
          .click();
        await page.waitForURL(
          (url) => url.pathname.replace(/\/$/, "") === base + "/pr-cargo",
        );
        assert.equal(
          await page.locator("#mobile-navigation").isVisible(),
          false,
        );
        report.push(
          "mobile: menu, Escape focus return, navigation and dismissal passed",
        );
      }
      assert.deepEqual(errors, [], `${name}: no JavaScript runtime errors`);
      await context.close();
    }
    const redirectContext = await browser.newContext();
    await redirectContext.route(travel + "/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<h1>Mock travel destination</h1>",
      }),
    );
    const redirectPage = await redirectContext.newPage();
    await redirectPage.goto(origin + base + "/pr-travel/");
    await redirectPage.waitForURL(travel + "/");
    await redirectContext.close();
    const nojs = await browser.newContext({ javaScriptEnabled: false });
    const fallback = await nojs.newPage();
    await fallback.goto(origin + base + "/pr-travel/");
    assert.equal(
      await fallback
        .getByRole("link", { name: "ไปเว็บไซต์ PR Travel", exact: true })
        .getAttribute("href"),
      travel,
    );
    await nojs.close();
    report.push("Travel redirect and no-JavaScript manual fallback passed");
    fs.writeFileSync(
      path.join(artifacts, "verification.json"),
      JSON.stringify({ passed: true, checks: report }, null, 2),
    );
    console.log(report.join("\n"));
  } finally {
    await browser.close();
    server.close();
  }
})().catch((error) => {
  console.error(error);
  server.close();
  process.exitCode = 1;
});

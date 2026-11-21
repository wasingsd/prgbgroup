"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Film, Images, Loader2, RotateCcw } from "lucide-react";
import { TIKTOK_URL } from "@/app/utils/site";

type Props = { id: string; type: "video" | "photo" };
type Status = "waiting" | "loading" | "ready" | "unavailable";

export default function TikTokPost({ id, type }: Props) {
  const card = useRef<HTMLElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [visible, setVisible] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<Status>("waiting");
  const title = type === "photo" ? "ภาพบรรยากาศจาก TikTok" : "วิดีโอจาก TikTok";
  const Icon = type === "photo" ? Images : Film;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus("loading");
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    if (card.current) observer.observe(card.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let failed = false;
    // Loading an iframe document is not proof that its media is ready.
    let timer = window.setTimeout(() => setStatus("unavailable"), 12000);
    const receive = (event: MessageEvent) => {
      if (
        event.origin !== "https://www.tiktok.com" ||
        event.source !== frame.current?.contentWindow
      )
        return;
      const data = event.data;
      if (!data || typeof data !== "object" || data["x-tiktok-player"] !== true)
        return;
      if (data.type === "onPlayerError") {
        // Autoplay is disabled: a playback error must not leave a blank player.
        // AUTOPLAY_ERROR is recoverable by pressing play in the player itself.
        if (data.value?.errorCode === 3002) {
          window.clearTimeout(timer);
          setStatus("ready");
          return;
        }
        failed = true;
        window.clearTimeout(timer);
        setStatus("unavailable");
      } else if (
        !failed &&
        (data.type === "onPlayerReady" ||
          (data.type === "onStateChange" && [0, 1, 2].includes(data.value)))
      ) {
        window.clearTimeout(timer);
        setStatus("ready");
      } else if (!failed && data.type === "onStateChange" && data.value === 3) {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => setStatus("unavailable"), 12000);
      }
    };
    window.addEventListener("message", receive);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", receive);
    };
  }, [visible, attempt]);

  return (
    <article ref={card} className="social-embed" data-tiktok-post={id}>
      <div className="tiktok-player" data-status={status}>
        {visible && status !== "unavailable" && (
          <iframe
            key={attempt}
            ref={frame}
            src={`https://www.tiktok.com/player/v1/${id}?controls=1&description=1&music_info=0&autoplay=0&rel=0`}
            title={`${title} · ${id}`}
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            onError={() => setStatus("unavailable")}
          />
        )}
        {status !== "ready" && (
          <div
            className="tiktok-player-status"
            role="status"
            aria-live="polite"
          >
            {status === "unavailable" ? (
              <>
                <Icon size={34} />
                <h3>เปิดโพสต์นี้บน TikTok</h3>
                <p>
                  ขณะนี้เล่นบนเว็บไซต์ไม่ได้
                  <br />
                  คุณยังดูโพสต์ต้นฉบับได้โดยตรง
                </p>
                <a
                  href={`${TIKTOK_URL}/${type}/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  ดูบน TikTok
                  <ArrowUpRight size={17} />
                </a>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setStatus("loading");
                    setAttempt((value) => value + 1);
                  }}
                >
                  <RotateCcw size={16} />
                  ลองโหลดอีกครั้ง
                </button>
              </>
            ) : (
              <>
                {visible ? (
                  <Loader2 size={27} className="animate-spin" />
                ) : (
                  <Icon size={27} />
                )}
                <p>{visible ? "กำลังโหลดโพสต์จาก TikTok…" : title}</p>
              </>
            )}
          </div>
        )}
      </div>
      <div className="tiktok-post-footer">
        <span>
          <Icon size={18} />
          {type === "photo" ? "โพสต์ภาพ" : "วิดีโอ"}
        </span>
        <a
          href={`${TIKTOK_URL}/${type}/${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          เปิดโพสต์ต้นฉบับ
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

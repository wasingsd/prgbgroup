"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Film, Images, Loader2, RotateCcw } from "lucide-react";
import { TIKTOK_URL } from "@/app/utils/site";

type Props = { id: string; type: "video" | "photo" };
type Status =
  | "waiting"
  | "loading"
  | "interactive"
  | "ready"
  | "slow"
  | "unavailable";

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
    // A missing readiness message is not a playback failure. Some players only
    // send state messages after the visitor presses play. Never remove or cover
    // that player just because a timeout expires.
    let timer = window.setTimeout(
      () => setStatus((current) => (current === "loading" ? "slow" : current)),
      12000,
    );
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
        window.clearTimeout(timer);
        // Autoplay being blocked still permits manual playback.
        setStatus(
          data.value?.errorCode === 3002 ? "interactive" : "unavailable",
        );
      } else if (
        data.type === "onPlayerReady" ||
        (data.type === "onStateChange" && [0, 1, 2].includes(data.value))
      ) {
        window.clearTimeout(timer);
        setStatus("ready");
      } else if (data.type === "onStateChange" && data.value === 3) {
        window.clearTimeout(timer);
        setStatus("loading");
        timer = window.setTimeout(
          () =>
            setStatus((current) => (current === "loading" ? "slow" : current)),
          12000,
        );
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
        {visible ? (
          <iframe
            key={attempt}
            ref={frame}
            src={`https://www.tiktok.com/player/v1/${id}?controls=1&description=1&music_info=0&autoplay=0&rel=0`}
            title={`${title} · ${id}`}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            onLoad={() =>
              setStatus((current) =>
                current === "ready" || current === "unavailable"
                  ? current
                  : "interactive",
              )
            }
            onError={() => setStatus("unavailable")}
          />
        ) : (
          <div className="tiktok-player-status">
            <Icon size={27} />
            <p>{title}</p>
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
      {(status === "loading" ||
        status === "slow" ||
        status === "unavailable") && (
        <div className="tiktok-notice" role="status" aria-live="polite">
          <p>
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                กำลังโหลดจาก TikTok…
              </>
            ) : status === "slow" ? (
              "TikTok โหลดช้า ตัวเล่นยังอยู่ด้านบน สามารถกดเล่นหรือลองโหลดใหม่ได้"
            ) : (
              "TikTok แจ้งข้อผิดพลาดในการเล่น ลองกดเล่นอีกครั้ง หรือเปิดโพสต์ต้นฉบับ"
            )}
          </p>
          {status !== "loading" && (
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
          )}
        </div>
      )}
    </article>
  );
}

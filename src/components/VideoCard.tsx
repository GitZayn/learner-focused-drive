import { useState } from "react";
import { IconPlay } from "./brand/Icons";
import type { Video } from "../lib/site";

/**
 * Lightweight YouTube facade: shows the thumbnail only and loads the iframe
 * on click, so pages stay fast and no third-party player runs unless asked for.
 */
export function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="panel group overflow-hidden">
      <div className="relative aspect-video bg-ink">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={`Video still: ${video.title}`}
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-105">
                <IconPlay className="ml-0.5 h-6 w-6" />
              </span>
            </span>
            <span className="sr-only">Play {video.title}</span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg leading-snug">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
      </div>
    </article>
  );
}

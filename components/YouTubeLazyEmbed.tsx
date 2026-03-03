"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeLazyEmbedProps {
  videoId: string;
  title?: string;
  aspectRatio?: "16/9" | "4/3";
}

/**
 * Lazy-loading YouTube embed component
 * Shows thumbnail first, loads iframe on click
 * Significantly improves initial page load performance
 */
export function YouTubeLazyEmbed({
  videoId,
  title = "YouTube video player",
  aspectRatio = "16/9"
}: YouTubeLazyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const paddingBottom = aspectRatio === "16/9" ? "56.25%" : "75%";

  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <div
        className="relative bg-black rounded-lg overflow-hidden shadow-md"
        style={{ paddingBottom, height: 0 }}
      >
        <iframe
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="relative bg-black rounded-lg overflow-hidden shadow-md cursor-pointer group w-full"
      style={{ paddingBottom, height: 0 }}
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 group-hover:scale-110 transition-all shadow-lg">
          <Play className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
    </button>
  );
}

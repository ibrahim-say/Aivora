"use client";

import Image from "next/image";
import { useState } from "react";

import { getImageUrl } from "@/utils/image";

type ToolImageProps = {
  screenshot?: string;
  name: string;
};

export default function ToolImage({
  screenshot,
  name,
}: ToolImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!screenshot) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-3xl bg-[#F3E8FF] text-6xl font-bold text-[#7C3AED]">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-[#F8FAFC]">
      {!imageLoaded && (
        <div className="absolute inset-0 z-10 animate-pulse bg-[#F3E8FF]" />
      )}

      <Image
        src={getImageUrl(screenshot)}
        alt={name}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className={`object-contain transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}
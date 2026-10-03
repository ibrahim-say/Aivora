"use client";

import Script from "next/script";

type BannerSize = "300x250" | "728x90" | "320x50";

const ads = {
  "300x250": {
    key: "f8047d39f73989eeb2a7d58e114833fb",
    width: 300,
    height: 250,
  },
  "728x90": {
    key: "8667d74370d6d017cf8b4a5ef9fb7d06",
    width: 728,
    height: 90,
  },
  "320x50": {
    key: "d44603c95611f0280a7432b87a6c223d",
    width: 320,
    height: 50,
  },
};

export default function BannerAd({ size }: { size: BannerSize }) {
  const ad = ads[size];

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div
        style={{
          width: ad.width,
          height: ad.height,
          maxWidth: "100%",
        }}
      >
        <Script id={`adsterra-${size}`} strategy="afterInteractive">
          {`
            atOptions = {
              'key': '${ad.key}',
              'format': 'iframe',
              'height': ${ad.height},
              'width': ${ad.width},
              'params': {}
            };
          `}
        </Script>

        <Script
          src={`https://bauval.org/22/${ad.key}`}
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
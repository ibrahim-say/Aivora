"use client";

import Script from "next/script";

export default function NativeAd() {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="w-full max-w-3xl overflow-hidden">
        <Script
          async
          data-cfasync="false"
          src="https://bauval.org/21/61441f326cc9614c72325111723c0a37"
          strategy="afterInteractive"
        />

        <div id="container-61441f326cc9614c72325111723c0a37" />
      </div>
    </div>
  );
}
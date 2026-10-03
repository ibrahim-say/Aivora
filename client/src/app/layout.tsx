import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SocialBar from "@/components/ads/SocialBar";
import BannerAd from "@/components/ads/BannerAd";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "Aivora",
    template: "%s | Aivora",
  },

  description:
    "اكتشف أفضل أدوات الذكاء الاصطناعي في مكان واحد. ابحث، قارن، واكتشف الأداة المناسبة لك.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Aivora",
    description:
      "دليل أدوات الذكاء الاصطناعي. ابحث، قارن، واكتشف أفضل الأدوات.",
    siteName: "Aivora",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3967493502787954"
          crossOrigin="anonymous"
        />

        <ReactQueryProvider>
          <Header />

          {children}

<SocialBar />

{/* Adsterra Bottom Banner */}
<div className="w-full flex justify-center">
  <div className="hidden md:block">
    <BannerAd size="728x90" />
  </div>

  <div className="block md:hidden">
    <BannerAd size="320x50" />
  </div>
</div>

<Footer />
          
   
        </ReactQueryProvider>
      </body>
    </html>
  );
}
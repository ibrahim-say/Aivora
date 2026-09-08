import type { Metadata } from "next";
import "./globals.css";

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
        <ReactQueryProvider>
          <Header />

          {children}

          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
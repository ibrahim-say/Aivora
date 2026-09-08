import type { Metadata } from "next";
import { Suspense } from "react";

import HomeContent from "@/components/home/HomeContent";
import { getCategories } from "@/services/category.service";
export const dynamic = "force-dynamic";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const SITE_NAME = "Aivora";

export const metadata: Metadata = {
  title: "أفضل أدوات الذكاء الاصطناعي | Aivora",

  description:
    "اكتشف أفضل أدوات الذكاء الاصطناعي للكتابة والتصميم والصور والفيديو والتسويق وغيرها. قارن الأدوات واكتشف الأنسب لاحتياجاتك على Aivora.",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "أفضل أدوات الذكاء الاصطناعي | Aivora",

    description:
      "اكتشف أفضل أدوات الذكاء الاصطناعي للكتابة والتصميم والصور والفيديو والتسويق وغيرها. قارن الأدوات واكتشف الأنسب لاحتياجاتك على Aivora.",

    url: SITE_URL,

    siteName: SITE_NAME,

    type: "website",

    locale: "ar_EG",

    images: [
      {
        url: `${SITE_URL}/images/aivora-logo.png`,
        alt: "Aivora",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "أفضل أدوات الذكاء الاصطناعي | Aivora",

    description:
      "اكتشف أفضل أدوات الذكاء الاصطناعي للكتابة والتصميم والصور والفيديو والتسويق وغيرها.",

    images: [`${SITE_URL}/images/aivora-logo.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  const categories = await getCategories();

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "دليل لأفضل أدوات الذكاء الاصطناعي.",
        inLanguage: "ar-EG",

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },

      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,

        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/aivora-logo.png`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Suspense fallback={null}>
        <HomeContent categories={categories} />
      </Suspense>
    </>
  );
}
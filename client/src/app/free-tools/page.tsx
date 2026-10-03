
import type { Metadata } from "next";
import { Suspense } from "react";

import Container from "@/components/layout/Container";
import FreeToolsContent from "@/components/free-tools/FreeToolsContent";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const PAGE_URL = `${SITE_URL}/free-tools`;

export const metadata: Metadata = {
  title: "أفضل أدوات الذكاء الاصطناعي المجانية | Aivora",

  description:
    "اكتشف أفضل أدوات الذكاء الاصطناعي المجانية على Aivora، بما في ذلك أدوات الكتابة والتصميم والصور والفيديو وغيرها، مع خطط مجانية وميزات مدفوعة.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "أفضل أدوات الذكاء الاصطناعي المجانية | Aivora",

    description:
      "اكتشف أفضل أدوات الذكاء الاصطناعي المجانية للكتابة والتصميم والصور والفيديو وغيرها على Aivora.",

    url: PAGE_URL,

    siteName: "Aivora",

    type: "website",

    locale: "ar_EG",
  },

  twitter: {
    card: "summary",

    title: "أفضل أدوات الذكاء الاصطناعي المجانية | Aivora",

    description:
      "اكتشف أفضل أدوات الذكاء الاصطناعي المجانية للكتابة والتصميم والصور والفيديو وغيرها.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FreeToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": `${PAGE_URL}/#collection`,

        name: "أفضل أدوات الذكاء الاصطناعي المجانية",

        description:
          "اكتشف أفضل أدوات الذكاء الاصطناعي المجانية على Aivora، بما في ذلك الأدوات التي تقدم خططًا مجانية مع ميزات مدفوعة إضافية.",

        url: PAGE_URL,

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        about: {
          "@type": "Thing",

          name: "أدوات الذكاء الاصطناعي المجانية",
        },
      },

      {
        "@type": "BreadcrumbList",

        "@id": `${PAGE_URL}/#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "الرئيسية",

            item: SITE_URL,
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "أدوات الذكاء الاصطناعي المجانية",

            item: PAGE_URL,
          },
        ],
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

      <main >
        
          <Suspense fallback={null}>
            <FreeToolsContent />
          </Suspense>
      
      </main>
    </>
  );
}


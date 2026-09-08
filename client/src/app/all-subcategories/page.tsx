import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import SubCategoriesGrid from "@/components/subcategories/SubCategoriesGrid";
import { getAllSubCategories } from "@/services/subCategory.service";
export const dynamic = "force-dynamic";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const PAGE_URL = `${SITE_URL}/all-categories`;

export const metadata: Metadata = {
  title: "أقسام أدوات الذكاء الاصطناعي | Aivora",

  description:
    "استكشف جميع أقسام أدوات الذكاء الاصطناعي على Aivora، واكتشف أفضل الأدوات للكتابة والتصميم والصور والفيديو والتسويق وغيرها.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "أقسام أدوات الذكاء الاصطناعي | Aivora",

    description:
      "استكشف جميع أقسام أدوات الذكاء الاصطناعي على Aivora، واكتشف أفضل الأدوات المناسبة لاحتياجاتك.",

    url: PAGE_URL,

    siteName: "Aivora",

    type: "website",

    locale: "ar_EG",
  },

  twitter: {
    card: "summary",

    title: "أقسام أدوات الذكاء الاصطناعي | Aivora",

    description:
      "استكشف جميع أقسام أدوات الذكاء الاصطناعي واكتشف أفضل الأدوات المناسبة لاحتياجاتك.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function CategoriesPage() {
  const { subCategories } = await getAllSubCategories();

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": `${PAGE_URL}/#collection`,

        name: "أقسام أدوات الذكاء الاصطناعي",

        description:
          "استكشف جميع أقسام أدوات الذكاء الاصطناعي على Aivora واكتشف أفضل الأدوات المناسبة لاحتياجاتك.",

        url: PAGE_URL,

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        about: {
          "@type": "Thing",
          name: "أدوات الذكاء الاصطناعي",
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
            name: "أقسام أدوات الذكاء الاصطناعي",
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

      <main className="min-h-screen bg-background py-12">
        <Container>
          {/* Page Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
              اكتشف المزيد
            </span>

            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              أقسام أدوات الذكاء الاصطناعي
            </h1>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              استكشف مجموعة متنوعة من الأقسام واكتشف أفضل أدوات الذكاء
              الاصطناعي المناسبة لاحتياجاتك.
            </p>
          </div>

          {/* Subcategories */}
          <SubCategoriesGrid subCategories={subCategories} />
        </Container>
      </main>
    </>
  );
}
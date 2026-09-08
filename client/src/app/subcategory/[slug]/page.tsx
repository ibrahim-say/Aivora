
import type { Metadata } from "next";
import { Suspense, cache } from "react";

import { getSubCategoryBySlug } from "@/services/subCategory.service";
import SubCategoryContent from "@/components/subcategories/SubCategoryContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Cache the subcategory request so generateMetadata and the page
// reuse the same result during the same render.
const getSubCategoryBySlugCached = cache((slug: string) =>
  getSubCategoryBySlug(slug)
);

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const data = await getSubCategoryBySlugCached(slug);

  if (!data?.subCategory) {
    return {
      title: "التصنيف الفرعي غير موجود | Aivora",
      description: "التصنيف الفرعي الذي تبحث عنه غير موجود.",
    };
  }

  const { subCategory } = data;

  const title =
    subCategory.seoTitle?.trim() ||
    `${subCategory.name} - أفضل أدوات الذكاء الاصطناعي`;

  const description =
    subCategory.seoDescription?.trim() ||
    subCategory.description?.trim() ||
    `اكتشف أفضل أدوات الذكاء الاصطناعي في قسم ${subCategory.name} على Aivora.`;

  const canonicalUrl =
    `${SITE_URL}/subcategory/${subCategory.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Aivora",
      type: "website",
      locale: "ar_EG",
    },

    twitter: {
      card: "summary",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SubCategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const data = await getSubCategoryBySlugCached(slug);

  if (!data?.subCategory) {
    return null;
  }

  const { subCategory } = data;

  const subCategoryUrl =
    `${SITE_URL}/subcategory/${subCategory.slug}`;

  const categoryUrl =
    `${SITE_URL}/category/${subCategory.category.slug}`;

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": `${subCategoryUrl}/#collection`,

        name: subCategory.name,

        description:
          subCategory.description ||
          `اكتشف أفضل أدوات الذكاء الاصطناعي في قسم ${subCategory.name} على Aivora.`,

        url: subCategoryUrl,

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        about: {
          "@type": "Thing",
          name: subCategory.name,
        },
      },

      {
        "@type": "BreadcrumbList",

        "@id": `${subCategoryUrl}/#breadcrumb`,

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
            name: subCategory.category.name,
            item: categoryUrl,
          },

          {
            "@type": "ListItem",
            position: 3,
            name: subCategory.name,
            item: subCategoryUrl,
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

      <main>
        <Suspense fallback={null}>
          <SubCategoryContent
            subCategory={subCategory}
            slug={slug}
          />
        </Suspense>
      </main>
    </>
  );
}



import type { Metadata } from "next";
import { Suspense, cache } from "react";

import { getCategoryBySlug } from "@/services/category.service";
import CategoryContent from "@/components/categories/CategoryContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Cache the category request so generateMetadata and the page
// reuse the same result during the same render.
const getCategoryBySlugCached = cache((slug: string) =>
  getCategoryBySlug(slug)
);

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const data = await getCategoryBySlugCached(slug);

  if (!data?.category) {
    return {
      title: "القسم غير موجود | Aivora",
      description: "القسم الذي تبحث عنه غير موجود.",
    };
  }

  const { category } = data;

  const title =
    category.seoTitle?.trim() ||
    `${category.name} - أفضل أدوات الذكاء الاصطناعي`;

  const description =
    category.seoDescription?.trim() ||
    category.description?.trim() ||
    `اكتشف أفضل أدوات الذكاء الاصطناعي في قسم ${category.name} على Aivora.`;

  const canonicalUrl = `${SITE_URL}/category/${category.slug}`;

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

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const data = await getCategoryBySlugCached(slug);

  if (!data?.category) {
    return null;
  }

  const { category } = data;

  const categoryUrl = `${SITE_URL}/category/${category.slug}`;

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": `${categoryUrl}/#collection`,

        name: category.name,

        description:
          category.description ||
          `اكتشف أفضل أدوات الذكاء الاصطناعي في قسم ${category.name} على Aivora.`,

        url: categoryUrl,

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        about: {
          "@type": "Thing",
          name: category.name,
        },
      },

      {
        "@type": "BreadcrumbList",

        "@id": `${categoryUrl}/#breadcrumb`,

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
            name: category.name,
            item: categoryUrl,
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
          <CategoryContent
            category={data.category}
            subCategories={data.subCategories}
            slug={slug}
          />
        </Suspense>
      </main>
    </>
  );
}


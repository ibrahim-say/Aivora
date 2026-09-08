import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import ToolDetails from "@/components/tools/ToolDetails";
import { getToolBySlug } from "@/services/tool.service";

export const dynamic = "force-dynamic";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Cache the tool request so generateMetadata and the page
// reuse the same result during the same render.
const getToolBySlugCached = cache((slug: string) =>
  getToolBySlug(slug)
);

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;

  const data = await getToolBySlugCached(slug);

  if (!data?.tool) {
    return {
      title: "الأداة غير موجودة | Aivora",
      description: "الأداة التي تبحث عنها غير موجودة.",
    };
  }

  const { tool } = data;

  const title = `${tool.name} - المميزات والأسعار والاستخدامات`;

  const description =
    tool.description?.trim() ||
    `اكتشف ${tool.name} على Aivora، وتعرف على مميزاتها واستخداماتها وأسعارها وأهم التفاصيل عنها.`;

  const canonicalUrl = `${SITE_URL}/tool/${tool.slug}`;

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

      ...(tool.screenshot && {
        images: [
          {
            url: tool.screenshot,
            width: 1200,
            height: 630,
            alt: tool.name,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      ...(tool.screenshot && {
        images: [tool.screenshot],
      }),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ToolPage({
  params,
}: ToolPageProps) {
  const { slug } = await params;

  const data = await getToolBySlugCached(slug);

  const { tool, similarTools } = data;

  if (!tool) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: tool.name,

    description: tool.description,

    url: `${SITE_URL}/tool/${tool.slug}`,

    applicationCategory: "AIApplication",

    operatingSystem: "Web",

    ...(tool.screenshot && {
      image: tool.screenshot,
    }),

    publisher: {
      "@type": "Organization",
      name: "Aivora",
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/aivora-logo.png`,
      },
    },

    ...(tool.pricing === "مجاني" && {
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ToolDetails
        tool={tool}
        similarTools={similarTools}
      />
    </>
  );
}
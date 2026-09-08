import type { MetadataRoute } from "next";

import { getCategories } from "@/services/category.service";
import { getAllSubCategories } from "@/services/subCategory.service";
import { getToolsForSitemap } from "@/services/server/sitemap.service";
export const dynamic = "force-dynamic";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // =========================
  // Categories
  // =========================

  const categories = await getCategories();

  // =========================
  // SubCategories
  // =========================

  const { subCategories } = await getAllSubCategories();

  // =========================
  // Tools
  // =========================

  const tools = await getToolsForSitemap();

  // =========================
  // Sitemap
  // =========================

  return [
    // =========================
    // Static Pages
    // =========================

    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${SITE_URL}/all-subcategories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/free-tools`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${SITE_URL}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // =========================
    // Categories
    // =========================

    ...categories.map((category) => ({
      url: `${SITE_URL}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // =========================
    // SubCategories
    // =========================

    ...subCategories.map((subCategory) => ({
      url: `${SITE_URL}/subcategory/${subCategory.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),

    // =========================
    // Tools
    // =========================

    ...tools.map((tool) => ({
      url: `${SITE_URL}/tool/${tool.slug.replace(/&/g, "%26")}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
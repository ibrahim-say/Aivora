"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { getImageUrl } from "@/utils/image";
import { SearchTool } from "@/types/searchTool";

type Props = {
  currentCategoryId?: string;
  currentSubCategoryId?: string;
  tool: SearchTool;
};

export default function ToolCard({
  tool,
  currentCategoryId,
  currentSubCategoryId,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const visibleSubCategories =
    currentSubCategoryId
      ? tool.subCategoryData?.filter(
          (subCategory) =>
            subCategory._id === currentSubCategoryId
        ) ?? []
      : currentCategoryId
        ? tool.subCategoryData?.filter(
            (subCategory) =>
              subCategory.category === currentCategoryId
          ) ?? []
        : tool.subCategoryData?.slice(0, 2) ?? [];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 z-10 animate-pulse bg-secondary" />
        )}

        <Image
          src={getImageUrl(tool.screenshot)}
          alt={tool.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* Name + Website */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">

          <h3 className="min-w-0 text-xl font-bold leading-tight sm:text-2xl">
            {tool.name}
          </h3>

          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`زيارة موقع ${tool.name}`}
            className="shrink-0 transition hover:text-primary"
          >
            <ExternalLink
              size={21}
              className="sm:h-6 sm:w-6"
            />
          </a>

        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-base leading-7 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-7">
          {tool.description}
        </p>

        {/* Subcategories */}
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {visibleSubCategories.slice(0, 2).map((subCategory) => (
            <Link
              key={subCategory._id}
              href={`/subcategory/${subCategory.slug}`}
              className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:text-sm"
            >
              {subCategory.name}
            </Link>
          ))}

          {visibleSubCategories.length > 2 && (
            <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
              +{visibleSubCategories.length - 2}
            </span>
          )}

          {!currentCategoryId &&
            !currentSubCategoryId &&
            tool.subCategories &&
            tool.subCategories.length > 2 && (
              <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                +{tool.subCategories.length - 2}
              </span>
            )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5 sm:pt-6">

          <span className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground sm:px-3 sm:py-2 sm:text-base">
            {tool.pricing}
          </span>

          <Link
            href={`/tool/${tool.slug}`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:px-5 sm:text-base"
          >
            التفاصيل
          </Link>

        </div>

      </div>

    </div>
  );
}
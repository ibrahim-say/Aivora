"use client";

import ToolsSection from "@/components/tools/ToolsSection";

type Props = {
  search: string;
  categoryId?: string;
  subCategoryId?: string;
};

export default function ToolSearchResults({
  search,
  categoryId,
  subCategoryId,
}: Props) {
  if (!search) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        نتائج البحث عن "{search}"
      </h2>

      <ToolsSection
        q={search}
        categoryId={categoryId}
        subCategoryId={subCategoryId}
      />
    </section>
  );
}
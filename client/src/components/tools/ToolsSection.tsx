
"use client";

import { useTools } from "@/hooks/useTools";
import ToolsGrid from "@/components/tools/ToolsGrid";

type Props = {
  q?: string;
  categoryId?: string;
  subCategoryId?: string;
  pricing?: string;
  latestOnly?: boolean;
  mostViewedOnly?: boolean;
};

export default function ToolsSection({
  q,
  categoryId,
  subCategoryId,
  pricing,
  latestOnly = false,
  mostViewedOnly = false,
}: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
  } = useTools({
    q,
    categoryId,
    subCategoryId,
    pricing,
    latestOnly,
    mostViewedOnly,
  });

  const allTools =
    data?.pages.flatMap(
      (page) => page.tools
    ) || [];

  const isHomeSection =
    latestOnly || mostViewedOnly;

  const tools = isHomeSection
    ? allTools.slice(0, 30)
    : allTools;

  return (
    <ToolsGrid
      currentCategoryId={categoryId}
      currentSubCategoryId={subCategoryId}
      tools={tools}
      onLoadMore={fetchNextPage}
      hasMore={hasNextPage}
      loading={isPending}
      loadingMore={isFetchingNextPage}
    />
  );
}


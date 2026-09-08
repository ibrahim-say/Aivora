
"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getTools } from "@/services/tool.service";

type Props = {
  q?: string;
  categoryId?: string;
  subCategoryId?: string;
  pricing?: string;
  latestOnly?: boolean;
  mostViewedOnly?: boolean;
};

export function useTools({
  q = "",
  categoryId,
  subCategoryId,
  pricing,
  latestOnly = false,
  mostViewedOnly = false,
}: Props) {
  const hasSearch = Boolean(q.trim());

  const isLatestTools =
    latestOnly &&
    !hasSearch &&
    !categoryId &&
    !subCategoryId;

  const isMostViewedTools =
    mostViewedOnly &&
    !hasSearch &&
    !categoryId &&
    !subCategoryId;

  const isLimitedHomeSection =
    isLatestTools || isMostViewedTools;

  return useInfiniteQuery({
    queryKey: [
      "tools",
      q,
      categoryId,
      subCategoryId,
      pricing,
      isLatestTools ? "latest" : undefined,
      isMostViewedTools ? "most-viewed" : undefined,
    ],

    queryFn: ({ pageParam = 1 }) => {
      return getTools({
        q: q.trim() || undefined,
        category: categoryId,
        subCategory: subCategoryId,
        pricing,
        sort: isLatestTools
          ? "latest"
          : isMostViewedTools
            ? "popular"
            : undefined,
        page: pageParam,
        limit: 20,
      });
    },

    initialPageParam: 1,
    throwOnError: true,

    getNextPageParam: (
      lastPage,
      allPages
    ) => {
      if (isLimitedHomeSection) {
        const loadedCount = allPages.reduce(
          (total, page) =>
            total + page.tools.length,
          0
        );

        if (
          loadedCount >= 30 ||
          !lastPage.pagination?.hasNextPage
        ) {
          return undefined;
        }
      }

      if (
        !lastPage.pagination?.hasNextPage
      ) {
        return undefined;
      }

      return lastPage.pagination.page + 1;
    },
  });
}


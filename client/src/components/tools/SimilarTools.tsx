
import Link from "next/link";
import Image from "next/image";

import { Tool } from "@/types/tool";
import { getImageUrl } from "@/utils/image";

type SimilarToolsProps = {
  tools: Tool[];
};

export default function SimilarTools({
  tools,
}: SimilarToolsProps) {
  return (
    <section className="mt-10">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          أدوات مشابهة
        </h2>
      </div>

      {/* Empty state */}
      {tools.length === 0 ? (
        <p className="rounded-2xl border border-border p-4 text-center text-sm text-muted-foreground">
          لا توجد أدوات مشابهة
        </p>
      ) : (
        <div className="max-h-[700px] space-y-3 overflow-y-auto pl-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/30">
          {tools.map((tool) => {
            const visibleSubCategories =
              tool.subCategories?.slice(0, 2) ?? [];

            const remainingCount =
              Math.max(
                (tool.subCategories?.length ?? 0) - 2,
                0
              );

            return (
              <div
                key={tool._id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition hover:border-accent hover:shadow-sm"
              >
                {/* Tool Image */}
                <Link
                  href={`/tool/${tool.slug}`}
                  className="flex h-48 w-48 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                >
                  {tool.screenshot ? (
                    <Image
                      src={getImageUrl(
                        tool.screenshot || ""
                      )}
                      alt={tool.name}
                      width={192}
                      height={192}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-bold text-primary">
                      {tool.name.charAt(0)}
                    </span>
                  )}
                </Link>

                {/* Tool Info */}
                <div className="min-w-0 flex-1">
                  {/* Subcategories */}
                  {visibleSubCategories.length > 0 && (
                    <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {visibleSubCategories.map(
                        (subCategory) => (
                          <Link
                            key={subCategory._id}
                            href={`/subcategory/${subCategory.slug}`}
                            className="truncate text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            {subCategory.name}
                          </Link>
                        )
                      )}

                      {remainingCount > 0 && (
                        <span className="text-xs font-medium text-muted-foreground">
                          +{remainingCount}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tool Name */}
                  <Link
                    href={`/tool/${tool.slug}`}
                    className="line-clamp-2 text-xl font-semibold text-card-foreground transition-colors hover:text-primary"
                  >
                    {tool.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}


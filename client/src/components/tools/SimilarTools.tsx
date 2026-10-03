
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
    <section className="mt-8 sm:mt-10">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between sm:mb-5">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          أدوات مشابهة
        </h2>
      </div>

      {/* Empty state */}
      {tools.length === 0 ? (
        <p className="rounded-2xl border border-border p-4 text-center text-sm text-muted-foreground">
          لا توجد أدوات مشابهة
        </p>
      ) : (
        <div
          className="
            flex
            gap-3
            overflow-x-auto
            pb-3
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-muted-foreground/30

            sm:max-h-[700px]
            sm:flex-col
            sm:gap-3
            sm:overflow-x-hidden
            sm:overflow-y-auto
            sm:pl-2
            sm:pb-0
          "
        >
          {tools.map((tool) => {
            const visibleSubCategories =
              tool.subCategories?.slice(0, 2) ?? [];

            const remainingCount = Math.max(
              (tool.subCategories?.length ?? 0) - 2,
              0
            );

            return (
              <div
                key={tool._id}
                className="
                  flex
                  w-[280px]
                  shrink-0
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-3
                  transition
                  hover:border-accent
                  hover:shadow-sm

                  sm:w-auto
                  sm:shrink
                "
              >
                {/* Tool Image */}
                <Link
                  href={`/tool/${tool.slug}`}
                  className="
                    flex
                    h-24
                    w-24
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-muted

                    sm:h-48
                    sm:w-48
                  "
                >
                  {tool.screenshot ? (
                    <Image
                      src={getImageUrl(tool.screenshot)}
                      alt={tool.name}
                      width={192}
                      height={192}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold text-primary sm:text-base">
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
                            className="
                              truncate
                              text-xs
                              font-medium
                              text-muted-foreground
                              transition-colors
                              hover:text-primary

                              sm:text-lg
                            "
                          >
                            {subCategory.name}
                          </Link>
                        )
                      )}

                      {remainingCount > 0 && (
                        <span className="text-[11px] font-medium text-muted-foreground sm:text-xs">
                          +{remainingCount}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tool Name */}
                  <Link
                    href={`/tool/${tool.slug}`}
                    className="
                      line-clamp-2
                      text-base
                      font-semibold
                      leading-6
                      text-card-foreground
                      transition-colors
                      hover:text-primary

                      sm:text-xl
                      sm:leading-7
                    "
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


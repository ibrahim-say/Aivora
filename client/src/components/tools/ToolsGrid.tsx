import ToolCard from "@/components/tools/ToolCard";
import ToolCardSkeleton from "@/components/tools/ToolCardSkeleton";
import { SearchTool } from "@/types/searchTool";

type Props = {
  tools: SearchTool[];

  currentCategoryId?: string;
  currentSubCategoryId?: string;

  onLoadMore?: () => void;
  hasMore?: boolean;

  loading?: boolean;
  loadingMore?: boolean;

  className?: string;
};

export default function ToolsGrid({
  currentCategoryId,
  currentSubCategoryId,
  tools,
  onLoadMore,
  hasMore = false,
  loading = false,
  loadingMore = false,
  className = "",
}: Props) {
  return (
    <section className="py-16">
      <div
        className={`mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 ${className}`}
      >
        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {loading && tools.length === 0
            ? Array.from({ length: 6 }).map(
                (_, index) => (
                  <ToolCardSkeleton key={index} />
                )
              )
            : tools.map((tool) => (
                <ToolCard
                  key={tool._id}
                  currentCategoryId={currentCategoryId}
                  currentSubCategoryId={currentSubCategoryId}
                  tool={tool}
                />
              ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onLoadMore}
              disabled={loadingMore}
              className="
                rounded-xl
                bg-primary
                px-8
                py-4
                font-semibold
                text-primary-foreground
                transition
                hover:opacity-90
                disabled:cursor-not-allowed
                disabled:opacity-60
                cursor-pointer
              "
            >
              {loadingMore
                ? "جاري تحميل الأدوات..."
                : "المزيد من الأدوات"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
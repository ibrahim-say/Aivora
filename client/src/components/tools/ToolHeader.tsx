import Link from "next/link";

import { Tool } from "@/types/tool";
import ToolImage from "@/components/tools/ToolImage";

type ToolHeaderProps = {
  tool: Tool;
};

export default function ToolHeader({
  tool,
}: ToolHeaderProps) {
  return (
    <>
      {/* Tool Image */}
      <div className="overflow-hidden rounded-3xl border border-border bg-muted">
        <ToolImage
          screenshot={tool.screenshot}
          name={tool.name}
        />
      </div>

      {/* Header */}
      <div className="mt-7">
        <h1 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
          {tool.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {/* Subcategories */}
          {tool.subCategories &&
            tool.subCategories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tool.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory._id}
                    href={`/subcategory/${subCategory.slug}`}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:bg-accent"
                  >
                    {subCategory.name}
                  </Link>
                ))}
              </div>
            )}

          {/* Pricing */}
          {tool.pricing && (
            <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground">
              {tool.pricing}
            </span>
          )}

          {/* Website */}
          {tool.websiteUrl && (
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mr-auto inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
            >
              زيارة الموقع
            </a>
          )}
        </div>
      </div>
    </>
  );
}
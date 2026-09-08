import Link from "next/link";
import { ToolSubCategory } from "@/types/tool";

type FeaturedSubcategoriesProps = {
  subCategories?: ToolSubCategory[];
};

export default function FeaturedSubcategories({
  subCategories = [],
}: FeaturedSubcategoriesProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        الأقسام المميزة
      </h2>

      <div className="rounded-2xl border border-border bg-card p-4">
        {subCategories.length === 0 ? (
          <p className="text-xl text-muted-foreground">
            لا توجد أقسام فرعية
          </p>
        ) : (
          <div className="flex flex-col gap-1">
            {subCategories.map(
              (subCategory) => (
                <Link
                  key={subCategory._id}
                  href={`/subcategory/${subCategory.slug}`}
                  className="rounded-xl px-3 py-2 text-xl text-muted-foreground transition hover:bg-secondary hover:text-primary"
                >
                  {subCategory.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  BriefcaseBusiness,
  Megaphone,
  Video,
  GraduationCap,
  Smartphone,
  Shapes,
  Palette,
  Code2,
  Sparkles,
} from "lucide-react";

import { SubCategory } from "@/types/subCategory";

type Props = {
  subCategories: SubCategory[];
};

// Category icon mapping based on category name
const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "الأعمال والإنتاجية": BriefcaseBusiness,
  "صناعة المحتوى والتسويق": Megaphone,
  "الفيديو والصوت": Video,
  "التعليم والبحث": GraduationCap,
  "أدوات الهواتف الذكية": Smartphone,
  "أدوات متنوعة": Shapes,
  "الصور والتصميم": Palette,
  "التطوير والبرمجة": Code2,
};

export default function SubCategoriesGrid({
  subCategories,
}: Props) {
  // Group subcategories by category
  const groupedSubCategories = subCategories.reduce<
    Record<
      string,
      {
        category: SubCategory["category"];
        subCategories: SubCategory[];
      }
    >
  >((groups, subCategory) => {
    const categoryId = subCategory.category._id;

    if (!groups[categoryId]) {
      groups[categoryId] = {
        category: subCategory.category,
        subCategories: [],
      };
    }

    groups[categoryId].subCategories.push(subCategory);

    return groups;
  }, {});

  return (
    <div className="space-y-12">
      {Object.values(groupedSubCategories)
        .sort((a, b) => {
          if (a.category.name === "أدوات متنوعة") return 1;
          if (b.category.name === "أدوات متنوعة") return -1;

          return 0;
        })
        .map(({ category, subCategories }) => {
          // Check the category name before choosing its icon
          const CategoryIcon =
            categoryIcons[category.name] ?? Sparkles;

          return (
            <section key={category._id}>
              {/* Category Name */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <CategoryIcon className="h-6 w-6" />
                </div>

                <h2 className="text-3xl font-bold text-foreground">
                  {category.name}
                </h2>
              </div>

              {/* Subcategories Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subCategories.map((subCategory) => (
                  <Link
                    key={subCategory._id}
                    href={`/subcategory/${subCategory.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                  >
                    {/* Decorative background */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-secondary transition-transform duration-300 group-hover:scale-150" />

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-xl text-primary">
                        ✦
                      </div>

                      {/* Name */}
                      <h2 className="mb-2 text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                        {subCategory.name}
                      </h2>

                      {/* Description */}
                      {subCategory.description && (
                        <p className="line-clamp-3 text-lg leading-6 text-muted-foreground">
                          {subCategory.description}
                        </p>
                      )}

                      {/* Arrow */}
                      <div className="mt-5 flex items-center gap-2 text-lg font-semibold text-primary">
                        <span>استكشف الأدوات</span>

                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                          ←
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
    </div>
  );
}


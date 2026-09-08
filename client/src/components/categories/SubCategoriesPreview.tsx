import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SubCategory } from "@/types/category";
import Container from "../layout/Container";

type Props = {
  subCategories: SubCategory[];
};

export default function SubCategoriesPreview({
  subCategories,
}: Props) {
  return (
    <section className="py-12">
      <Container>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground">
          استكشف الأقسام الفرعية
        </h2>

        <p className="mt-3 text-lg text-muted-foreground">
          تصفح أدوات هذا التصنيف حسب المجال المناسب لك
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {subCategories.map((subCategory) => (
          <Link
            key={subCategory._id}
            href={`/subcategory/${subCategory.slug}`}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-secondary
              px-6
              py-3
              text-primary
              transition-all
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            <span>{subCategory.name}</span>

            <ArrowLeft
              size={18}
              className="
                transition-transform
                group-hover:-translate-x-1
              "
            />
          </Link>
        ))}
      </div>
      </Container>

    </section>
  );
}
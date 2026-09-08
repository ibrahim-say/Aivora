import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Category } from "@/types/category";
import Container from "../layout/Container";

type Props = {
  categories: Category[];
};

export default function CategoriesPreview({ categories }: Props) {
  return (
    <section className="py-12">
      <Container>

      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground">
          استكشف الأقسام
        </h2>

        <p className="mt-3 text-lg text-muted-foreground">
          تصفح الأدوات حسب المجال المناسب لك
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/category/${category.slug}`}
            className="
              group flex items-center gap-2
              rounded-full
              bg-secondary
              px-6 py-3
              text-primary
              transition-all
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            <span>{category.name}</span>

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
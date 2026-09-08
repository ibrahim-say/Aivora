"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import HeroSection from "@/components/common/HeroSection";
import SubCategoriesPreview from "@/components/categories/SubCategoriesPreview";
import ToolsSection from "@/components/tools/ToolsSection";
import SearchResultsHeader from "@/components/common/SearchResultsHeader";
import Container from "../layout/Container";

type Props = {
  category: {
    _id: string;
    name: string;
    description: string;
  };

  subCategories: any[];

  slug: string;
};

export default function CategoryContent({
  category,
  subCategories,
  slug,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("q") || "";

  const handleSearch = (value: string) => {
    if (!value) {
      router.push(`/category/${slug}`);
      return;
    }
  
    router.push(
      `/category/${slug}?q=${encodeURIComponent(value)}`
    );
  };

  return (
    <>
      <HeroSection
        title={category.name}
        description={category.description}
        onSearch={handleSearch}
        initialSearch={search}
      />

      {!search && (
        <section className="pt-4">
        <Container>
          <SubCategoriesPreview
            subCategories={subCategories}
          />

          
        </Container>
        <ToolsSection
        categoryId={category._id}
      />
      </section >
      )}

      {search && (
        <section >
          <Container>
          <SearchResultsHeader
            search={search}
          />
           </Container>
          <ToolsSection
            q={search}
            categoryId={category._id}
          />
        </section>
      )}
    </>
  );
}
"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import HeroSection from "@/components/common/HeroSection";
import ToolsSection from "@/components/tools/ToolsSection";
import SearchResultsHeader from "@/components/common/SearchResultsHeader";
import Container from "../layout/Container";

type Props = {
  subCategory: {
    _id: string;
    name: string;
    description?: string;
  };

  slug: string;
};

export default function SubCategoryContent({
  subCategory,
  slug,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("q") || "";

  const handleSearch = (value: string) => {
    if (!value) {
      router.push(
        `/subcategory/${slug}`
      );

      return;
    }

    router.push(
      `/subcategory/${slug}?q=${encodeURIComponent(
        value
      )}`
    );
  };

  return (
    <>
      <HeroSection
        title={subCategory.name}
        description={
          subCategory.description ||
          "اكتشف أفضل أدوات الذكاء الاصطناعي في هذا القسم."
        }
        onSearch={handleSearch}
        initialSearch={search}
      />
{!search && (
  <>
    

    <section className="pt-4">

      <ToolsSection subCategoryId={subCategory._id} />
    </section>
  </>
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
          subCategoryId={subCategory._id}
        />
        </section>
      )}
      
    </>
  );
}
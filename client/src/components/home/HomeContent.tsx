"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import HeroSection from "@/components/common/HeroSection";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import SearchResultsHeader from "@/components/common/SearchResultsHeader";
import LatestTools from "@/components/tools/LatestTools";
import MostViewedTools from "@/components/tools/MostViewedTools";
import ToolsSection from "@/components/tools/ToolsSection";
import Container from "../layout/Container";

type Props = {
  categories: any[];
};

export default function HomeContent({
  categories,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("q") || "";

  const handleSearch = (value: string) => {
    if (!value) {
      router.push("/");
      return;
    }

    router.push(`/?q=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <HeroSection
        onSearch={handleSearch}
        initialSearch={search}
      />

      {!search && (
        <>
          <CategoriesPreview categories={categories} />

          <LatestTools />

          <MostViewedTools />
        </>
      )}

      {search && (
        <section>
          <Container>
            <SearchResultsHeader search={search} />
          </Container>

          <ToolsSection q={search} />
        </section>
      )}
    </>
  );
}
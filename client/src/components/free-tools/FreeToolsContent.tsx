
"use client";

import { useRouter, useSearchParams } from "next/navigation";

import HeroSection from "@/components/common/HeroSection";
import SearchResultsHeader from "@/components/common/SearchResultsHeader";
import ToolsSection from "@/components/tools/ToolsSection";

export default function FreeToolsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("q") || "";

  const handleSearch = (value: string) => {
    if (!value) {
      router.push("/free-tools");
      return;
    }

    router.push(`/free-tools?q=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <HeroSection
  title=" الذكاء الاصطناعي المجانية"
  description="اكتشف أدوات مجانية للكتابة، التصميم، الصور، الفيديو، البرمجة والدراسة. ابحث عن الأداة المناسبة لك وابدأ الآن."
  onSearch={handleSearch}
  initialSearch={search}
/>

      {search && (
        <section>
          <SearchResultsHeader search={search} />
        </section>
      )}
    <section className="pt-4">

   
      <ToolsSection
        q={search || undefined}
        pricing="مجاني"
      />
       </section>
    </>
  );
}


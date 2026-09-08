"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  search: string;
};

export default function SearchResultsHeader({
  search,
}: Props) {
  const router = useRouter();

  return (
    <div className="mb-8 flex items-center gap-4 pt-4">
      <button
        type="button"
        onClick={() => router.back()}
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-border
          bg-background
          px-4
          py-2
          font-medium
          text-foreground
          transition
          hover:border-primary
          hover:text-primary
        "
      >
        <ArrowRight size={18} />
        رجوع
      </button>

      <h2 className="text-2xl font-bold text-foreground">
        نتائج البحث عن "{search}"
      </h2>
    </div>
  );
}
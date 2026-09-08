import Container from "@/components/layout/Container";
import SearchBar from "@/components/common/SearchBar";

type Props = {
  title?: string;
  description?: string;
  onSearch?: (value: string) => void;
  initialSearch?: string;
};

export default function Hero({
  title = "الذكاء الاصطناعي",
  description = "أكثر من 15 آلاف أدوات الذكاء الاصطناعي في مكان واحد. ابحث، قارن، واكتشف الأداة المناسبة لعملك أو دراستك.",
  onSearch,
  initialSearch = "",
}: Props) {
  return (
    <section className="relative -mt-[72px] overflow-hidden pt-[88px] sm:pt-[120px] lg:pt-[144px]">
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-secondary
          via-background
          to-background
        "
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-border
              bg-secondary
              px-4
              py-2
              text-sm
              font-medium
              text-primary
            "
          >
            🚀 أكبر دليل عربي لأدوات الذكاء الاصطناعي
          </span>

          <h1
            className="
              mt-8
              text-4xl
              font-extrabold
              leading-tight
              text-foreground
              sm:text-5xl
              lg:text-6xl
            "
          >
            اكتشف أفضل أدوات

            <span className="block text-primary">
              {title}
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
              sm:text-xl
            "
          >
            {description}
          </p>

          <SearchBar
            onSearch={onSearch}
            initialSearch={initialSearch}
          />
        </div>
      </Container>
    </section>
  );
}
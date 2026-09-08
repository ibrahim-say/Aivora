import Container from "@/components/layout/Container";
import ToolsSection from "@/components/tools/ToolsSection";

export default function MostViewedTools() {
  return (
    <section className="pt-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            الأكثر مشاهدة على Aivora
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            اكتشف أدوات الذكاء الاصطناعي الأكثر مشاهدة على Aivora
          </p>
        </div>
      </Container>

      <ToolsSection mostViewedOnly />
    </section>
  );
}
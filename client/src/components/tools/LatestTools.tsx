import Container from "@/components/layout/Container";
import ToolsSection from "@/components/tools/ToolsSection";

export default function LatestTools() {
  return (
    <section className="pt-4">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            أحدث الأدوات
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            اكتشف أحدث أدوات الذكاء الاصطناعي المضافة إلى Aivora
          </p>
        </div>
      </Container>

      <ToolsSection latestOnly />
    </section>
  );
}
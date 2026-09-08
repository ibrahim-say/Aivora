import type { Metadata } from "next";
import Container from "@/components/layout/Container";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "من نحن | Aivora",
  description:
    "تعرف على Aivora، دليلك العربي لاكتشاف أفضل أدوات الذكاء الاصطناعي ومقارنة الأدوات والخدمات المناسبة لاحتياجاتك.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "من نحن | Aivora",
    description:
      "تعرف على Aivora، دليلك العربي لاكتشاف أفضل أدوات الذكاء الاصطناعي.",
    url: `${SITE_URL}/about`,
    siteName: "Aivora",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary",
    title: "من نحن | Aivora",
    description:
      "تعرف على Aivora، دليلك العربي لاكتشاف أفضل أدوات الذكاء الاصطناعي.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
              من نحن
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              من هو Aivora؟
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Aivora هو دليل عربي متخصص يساعدك على اكتشاف أفضل أدوات
              الذكاء الاصطناعي في مكان واحد، بطريقة بسيطة ومنظمة وسهلة
              الاستخدام.
            </p>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground">
              مهمتنا
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                أصبح الذكاء الاصطناعي جزءًا أساسيًا من عالم التكنولوجيا،
                ومع ظهور آلاف الأدوات والخدمات المختلفة أصبح من الصعب
                معرفة الأداة المناسبة لكل احتياج.
              </p>

              <p>
                من هنا جاءت فكرة Aivora. نهدف إلى توفير مكان واحد يجمع
                أدوات الذكاء الاصطناعي المختلفة، مع تنظيمها في أقسام
                وتصنيفات واضحة تساعدك على الوصول إلى ما تبحث عنه بسرعة.
              </p>

              <p>
                سواء كنت تبحث عن أداة للكتابة، التصميم، إنشاء الصور،
                الفيديو، البرمجة، التسويق أو أي استخدام آخر، يساعدك
                Aivora على اكتشاف الخيارات المتاحة وفهم ما تقدمه كل أداة.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we offer */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">
                ماذا يقدم Aivora؟
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                نعمل على جعل اكتشاف أدوات الذكاء الاصطناعي أسهل وأسرع.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-card-foreground">
                  اكتشاف الأدوات
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  اكتشف مجموعة واسعة من أدوات الذكاء الاصطناعي في مكان
                  واحد بدلًا من البحث في عشرات المواقع.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-card-foreground">
                  تصنيفات منظمة
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  تصفح الأدوات حسب الأقسام والتصنيفات الفرعية للوصول
                  بسهولة إلى الأدوات المناسبة لاحتياجاتك.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-card-foreground">
                  معلومات واضحة
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  تعرف على الأدوات ومميزاتها وأسعارها واستخداماتها قبل
                  اتخاذ قرارك.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold text-primary">
              رؤيتنا
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground">
              أن يكون Aivora بوابتك الأولى إلى عالم الذكاء الاصطناعي
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              نطمح إلى بناء دليل عربي موثوق وسهل الاستخدام يساعد الأفراد
              والمطورين وأصحاب الأعمال وصناع المحتوى على اكتشاف الأدوات
              التي يمكن أن تجعل عملهم وحياتهم أكثر إنتاجية.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <Container>
          <div className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-primary-foreground">
              ابدأ باكتشاف أدوات الذكاء الاصطناعي
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/80">
              استكشف الأدوات والتصنيفات المختلفة واعثر على الأدوات
              المناسبة لك.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
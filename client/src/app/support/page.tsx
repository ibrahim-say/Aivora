import type { Metadata } from "next";
import Container from "@/components/layout/Container";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "الدعم والمساعدة | Aivora",
  description:
    "احصل على المساعدة والدعم في Aivora. تعرف على كيفية استخدام الموقع، البحث عن أدوات الذكاء الاصطناعي، والإبلاغ عن المشاكل.",
  alternates: {
    canonical: `${SITE_URL}/support`,
  },
  openGraph: {
    title: "الدعم والمساعدة | Aivora",
    description:
      "احصل على المساعدة والدعم في Aivora وتعرف على كيفية استخدام الموقع.",
    url: `${SITE_URL}/support`,
    siteName: "Aivora",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary",
    title: "الدعم والمساعدة | Aivora",
    description:
      "احصل على المساعدة والدعم في Aivora.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
              الدعم والمساعدة
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              كيف يمكننا مساعدتك؟
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              إذا كنت تواجه مشكلة أثناء استخدام Aivora أو لديك سؤال
              حول إحدى الأدوات، ستجد هنا المعلومات التي تساعدك.
            </p>
          </div>
        </Container>
      </section>

      {/* Help Topics */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">
                كيف يمكننا مساعدتك؟
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                اختر الموضوع الذي تحتاج إلى مساعدة بشأنه.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-bold text-card-foreground">
                  البحث عن أداة
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  استخدم شريط البحث في الصفحة الرئيسية للعثور على
                  أدوات الذكاء الاصطناعي المناسبة لاحتياجاتك.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-bold text-card-foreground">
                  تصفح الأقسام
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  يمكنك تصفح الأدوات من خلال الأقسام والتصنيفات
                  الفرعية للوصول إلى الأدوات المناسبة بسهولة.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-bold text-card-foreground">
                  مشكلة في إحدى الأدوات
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  إذا وجدت رابطًا لا يعمل أو معلومات غير صحيحة عن
                  إحدى الأدوات، يمكنك إبلاغنا بذلك.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-bold text-card-foreground">
                  اقتراح أداة جديدة
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  تعرف على أداة ذكاء اصطناعي جديدة؟ يمكنك اقتراحها
                  لإضافتها إلى دليل Aivora.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">
                الأسئلة الشائعة
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              <details className="group rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none font-bold text-card-foreground">
                  هل جميع الأدوات الموجودة في Aivora مجانية؟
                </summary>

                <p className="mt-4 leading-7 text-muted-foreground">
                  لا. يحتوي Aivora على أدوات مجانية، وأدوات تقدم
                  خططًا مجانية مع ميزات مدفوعة، بالإضافة إلى أدوات
                  مدفوعة وأدوات تقدم تجربة مجانية.
                </p>
              </details>

              <details className="group rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none font-bold text-card-foreground">
                  كيف أجد أداة مناسبة لاحتياجاتي؟
                </summary>

                <p className="mt-4 leading-7 text-muted-foreground">
                  يمكنك استخدام البحث أو تصفح الأقسام والتصنيفات
                  الفرعية للعثور على الأدوات المناسبة.
                </p>
              </details>

              <details className="group rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none font-bold text-card-foreground">
                  وجدت معلومات غير صحيحة، ماذا أفعل؟
                </summary>

                <p className="mt-4 leading-7 text-muted-foreground">
                  يمكنك التواصل معنا وإرسال تفاصيل المشكلة حتى
                  نتمكن من مراجعتها وتصحيحها.
                </p>
              </details>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-primary-foreground">
              لم تجد ما تبحث عنه؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/80">
              إذا لم تجد إجابة لسؤالك، يمكنك التواصل معنا وسنساعدك
              قدر الإمكان.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-primary-foreground px-7 py-3.5 font-semibold text-primary transition hover:bg-secondary"
            >
              تواصل معنا
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "تواصل معنا | Aivora",
  description:
    "تواصل مع فريق Aivora للاستفسارات والاقتراحات والإبلاغ عن المشاكل أو أي استفسارات متعلقة بأدوات الذكاء الاصطناعي.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "تواصل معنا | Aivora",
    description:
      "تواصل مع فريق Aivora للاستفسارات والاقتراحات والإبلاغ عن المشاكل.",
    url: `${SITE_URL}/contact`,
    siteName: "Aivora",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary",
    title: "تواصل معنا | Aivora",
    description:
      "تواصل مع فريق Aivora للاستفسارات والاقتراحات والإبلاغ عن المشاكل.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
              تواصل معنا
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              نحن هنا لمساعدتك
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              لديك سؤال أو اقتراح أو وجدت مشكلة في أحد محتويات
              Aivora؟ يسعدنا أن نسمع منك.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                تواصل مع Aivora
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                سواء كان لديك استفسار، اقتراح لتحسين الموقع، أو تريد
                الإبلاغ عن مشكلة في إحدى الأدوات، يمكنك التواصل معنا
                وسنحاول الرد عليك في أقرب وقت ممكن.
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-bold text-card-foreground">
                    الاستفسارات العامة
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    للاستفسارات والأسئلة المتعلقة بـ Aivora.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-bold text-card-foreground">
                    اقتراح أداة
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    هل تعرف أداة ذكاء اصطناعي غير موجودة في دليلنا؟
                    أخبرنا عنها.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-bold text-card-foreground">
                    الإبلاغ عن مشكلة
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    إذا وجدت معلومات غير صحيحة أو رابطًا لا يعمل،
                    أخبرنا لنتمكن من مراجعته.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-card-foreground">
                أرسل لنا رسالة
              </h2>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
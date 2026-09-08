import type { Metadata } from "next";
import Container from "@/components/layout/Container";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Aivora",
  description:
    "تعرف على سياسة الخصوصية في Aivora وكيفية التعامل مع المعلومات والبيانات عند استخدام الموقع.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "سياسة الخصوصية | Aivora",
    description:
      "تعرف على سياسة الخصوصية في Aivora وكيفية التعامل مع المعلومات والبيانات عند استخدام الموقع.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "Aivora",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary",
    title: "سياسة الخصوصية | Aivora",
    description:
      "تعرف على سياسة الخصوصية في Aivora وكيفية التعامل مع المعلومات والبيانات.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
              الخصوصية
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              سياسة الخصوصية
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              توضح هذه السياسة كيفية تعامل Aivora مع المعلومات والبيانات
              عند استخدامك للموقع والخدمات المتاحة من خلاله.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <Container>
          <article className="mx-auto max-w-4xl space-y-12 text-foreground">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold">
                1. مقدمة
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                نحن في Aivora نحترم خصوصيتك ونلتزم بالتعامل مع المعلومات
                بطريقة مسؤولة وشفافة. توضح سياسة الخصوصية هذه أنواع
                المعلومات التي قد يتم جمعها وكيفية استخدامها وحمايتها
                عند استخدامك لموقع Aivora.
              </p>
            </section>

            {/* Information */}
            <section>
              <h2 className="text-2xl font-bold">
                2. المعلومات التي قد يتم جمعها
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد يتم جمع بعض المعلومات التقنية أو المعلومات التي
                تقدمها لنا بشكل مباشر، وذلك بحسب طريقة استخدامك للموقع.
              </p>

              <ul className="mt-5 list-disc space-y-3 pr-6 leading-8 text-muted-foreground">
                <li>
                  معلومات تقنية مثل نوع المتصفح والجهاز ونظام التشغيل.
                </li>

                <li>
                  معلومات متعلقة بطريقة استخدام الموقع والصفحات التي
                  تتم زيارتها.
                </li>

                <li>
                  المعلومات التي تقدمها لنا عند التواصل معنا، مثل الاسم
                  والبريد الإلكتروني ومحتوى الرسالة.
                </li>
              </ul>
            </section>

            {/* Usage */}
            <section>
              <h2 className="text-2xl font-bold">
                3. كيفية استخدام المعلومات
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد نستخدم المعلومات المتاحة لنا من أجل تشغيل الموقع
                وتحسين تجربة المستخدم وتطوير خدمات Aivora وفهم كيفية
                استخدام الموقع واكتشاف المشاكل التقنية ومعالجتها.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold">
                4. ملفات تعريف الارتباط (Cookies)
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد يستخدم Aivora ملفات تعريف الارتباط والتقنيات المشابهة
                للمساعدة في تشغيل الموقع وتحسين تجربة المستخدم وتحليل
                استخدام الموقع.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد يتم استخدام ملفات تعريف الارتباط أيضًا من خلال
                خدمات خارجية يتم دمجها في الموقع، وفقًا لسياسات تلك
                الخدمات.
              </p>
            </section>

            {/* Analytics */}
            <section>
              <h2 className="text-2xl font-bold">
                5. خدمات التحليل
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد نستخدم أدوات تحليل وإحصاءات لفهم كيفية تفاعل
                المستخدمين مع الموقع، مثل عدد الزيارات والصفحات التي
                تتم مشاهدتها ومعلومات تقنية عامة.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                تساعدنا هذه البيانات على تحسين أداء الموقع وتجربة
                المستخدم، ولا تهدف إلى التعرف عليك شخصيًا.
              </p>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="text-2xl font-bold">
                6. الخدمات والروابط الخارجية
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                يحتوي Aivora على روابط لأدوات ومواقع وخدمات تابعة
                لجهات خارجية. عند الانتقال إلى أحد هذه المواقع، تصبح
                خاضعًا لسياسة الخصوصية والشروط الخاصة بذلك الموقع.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                لا يتحمل Aivora مسؤولية سياسات الخصوصية أو ممارسات
                المواقع والخدمات الخارجية.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-bold">
                7. حماية المعلومات
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                نعمل على اتخاذ إجراءات مناسبة للمساعدة في حماية
                المعلومات من الوصول غير المصرح به أو الاستخدام أو
                التعديل أو الكشف غير المصرح به.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                ومع ذلك، لا يمكن ضمان أن تكون أي عملية نقل أو تخزين
                للبيانات عبر الإنترنت آمنة بنسبة 100%.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-2xl font-bold">
                8. خصوصية الأطفال
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                لا يهدف Aivora إلى جمع معلومات شخصية من الأطفال بشكل
                متعمد. إذا كنت تعتقد أن طفلًا قدم معلومات شخصية من
                خلال الموقع، يرجى التواصل معنا حتى نتمكن من اتخاذ
                الإجراءات المناسبة.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-bold">
                9. التغييرات على سياسة الخصوصية
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر لمواكبة
                التغييرات في الموقع أو الخدمات أو المتطلبات القانونية.
                سيتم نشر أي تحديثات على هذه الصفحة.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold">
                10. التواصل معنا
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                إذا كان لديك أي سؤال أو استفسار متعلق بسياسة الخصوصية
                أو طريقة تعامل Aivora مع المعلومات، يمكنك التواصل معنا
                من خلال صفحة التواصل.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                تواصل معنا
              </a>
            </section>

            {/* Last Update */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                آخر تحديث: أغسطس 2026
              </p>
            </div>

          </article>
        </Container>
      </section>
    </main>
  );
}
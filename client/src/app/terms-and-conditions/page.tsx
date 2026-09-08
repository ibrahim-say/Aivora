import type { Metadata } from "next";
import Container from "@/components/layout/Container";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Aivora",
  description:
    "تعرف على الشروط والأحكام المنظمة لاستخدام موقع Aivora ودليل أدوات الذكاء الاصطناعي والخدمات المتاحة من خلاله.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
  openGraph: {
    title: "الشروط والأحكام | Aivora",
    description:
      "تعرف على الشروط والأحكام المنظمة لاستخدام موقع Aivora.",
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: "Aivora",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary",
    title: "الشروط والأحكام | Aivora",
    description:
      "تعرف على الشروط والأحكام المنظمة لاستخدام موقع Aivora.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
              الشروط والأحكام
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              الشروط والأحكام
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              توضح هذه الشروط القواعد والأحكام التي تنظم استخدامك
              لموقع Aivora والخدمات والمحتوى المتاح من خلاله.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <Container>
          <article className="mx-auto max-w-4xl space-y-12 text-foreground">

            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-bold">
                1. قبول الشروط
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                باستخدامك لموقع Aivora، فإنك توافق على الالتزام بهذه
                الشروط والأحكام وجميع السياسات المرتبطة بالموقع.
                إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم
                استخدام الموقع.
              </p>
            </section>

            {/* About Aivora */}
            <section>
              <h2 className="text-2xl font-bold">
                2. عن Aivora
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                Aivora هو دليل لأدوات الذكاء الاصطناعي يهدف إلى
                مساعدة المستخدمين على اكتشاف الأدوات والخدمات المختلفة
                وتنظيمها حسب الأقسام والتصنيفات.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Aivora لا يمثل بالضرورة الشركات أو الخدمات أو الأدوات
                المدرجة في الدليل، ما لم يتم توضيح ذلك بشكل صريح.
              </p>
            </section>

            {/* Use */}
            <section>
              <h2 className="text-2xl font-bold">
                3. استخدام الموقع
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                يمكنك استخدام Aivora لأغراض قانونية ومشروعة فقط.
                يجب عليك عدم استخدام الموقع بطريقة قد تؤدي إلى
                الإضرار بالموقع أو بالمستخدمين الآخرين أو بأي جهة
                خارجية.
              </p>

              <ul className="mt-5 list-disc space-y-3 pr-6 leading-8 text-muted-foreground">
                <li>
                  عدم محاولة الوصول غير المصرح به إلى أنظمة الموقع.
                </li>

                <li>
                  عدم استخدام الموقع في أي نشاط غير قانوني.
                </li>

                <li>
                  عدم محاولة تعطيل الموقع أو التأثير على أدائه.
                </li>

                <li>
                  عدم استخدام المحتوى بطريقة تنتهك حقوق الآخرين.
                </li>
              </ul>
            </section>

            {/* Tool Information */}
            <section>
              <h2 className="text-2xl font-bold">
                4. معلومات الأدوات والخدمات
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                نسعى إلى تقديم معلومات مفيدة ودقيقة عن الأدوات
                المدرجة في Aivora، مثل الوصف والأسعار والتصنيفات
                والروابط والمميزات.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                ومع ذلك، قد تتغير المعلومات الخاصة بالأدوات بمرور
                الوقت، مثل الأسعار أو المميزات أو سياسات الاستخدام.
                لذلك ننصح المستخدم بالتحقق من الموقع الرسمي للأداة
                قبل اتخاذ أي قرار.
              </p>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-2xl font-bold">
                5. الروابط الخارجية
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد يحتوي Aivora على روابط تؤدي إلى مواقع وخدمات
                خارجية. هذه المواقع لا تخضع لسيطرة Aivora، وبالتالي
                فإننا لا نتحمل مسؤولية محتواها أو سياساتها أو خدماتها.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                استخدامك لأي موقع أو خدمة خارجية يخضع للشروط
                والسياسات الخاصة بذلك الموقع.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold">
                6. الملكية الفكرية
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                جميع العناصر الخاصة بموقع Aivora، بما في ذلك التصميم
                والهوية البصرية والنصوص والمكونات البرمجية، تخضع
                لحقوق الملكية الفكرية المعمول بها، ما لم يذكر خلاف ذلك.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                لا يجوز نسخ أو إعادة نشر أو توزيع محتوى Aivora بطريقة
                تجارية أو غير مصرح بها دون الحصول على إذن مناسب.
              </p>
            </section>

            {/* Availability */}
            <section>
              <h2 className="text-2xl font-bold">
                7. توفر الموقع
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                نسعى إلى إبقاء Aivora متاحًا ومستقرًا، ولكن لا يمكننا
                ضمان استمرار الموقع دون انقطاع أو خلوه من الأخطاء
                في جميع الأوقات.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                قد نقوم بإيقاف أو تعديل بعض أجزاء الموقع مؤقتًا
                لأغراض الصيانة أو التطوير أو لأسباب تقنية أخرى.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold">
                8. إخلاء المسؤولية
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                يتم تقديم المعلومات الموجودة على Aivora لأغراض
                معلوماتية عامة. لا نضمن أن جميع المعلومات محدثة أو
                خالية من الأخطاء في جميع الأوقات.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                لا يتحمل Aivora مسؤولية أي خسائر أو أضرار ناتجة عن
                الاعتماد على المعلومات الموجودة في الموقع أو عن استخدام
                أي خدمة أو أداة تابعة لجهة خارجية.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-bold">
                9. التغييرات على الشروط
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                نحتفظ بالحق في تعديل أو تحديث هذه الشروط والأحكام من
                وقت لآخر. سيتم نشر النسخة المحدثة على هذه الصفحة،
                ويعتبر استمرارك في استخدام الموقع بعد التحديث موافقة
                على الشروط الجديدة.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold">
                10. التواصل معنا
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                إذا كان لديك أي سؤال أو استفسار حول هذه الشروط
                والأحكام، يمكنك التواصل معنا من خلال صفحة التواصل.
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
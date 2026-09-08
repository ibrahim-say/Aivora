import Link from "next/link";
import Container from "./Container";
import { footerLinks } from "@/config/footer";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted">
      <Container>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-foreground"
            >
              Aivora
            </Link>

            <p className="mt-5 max-w-sm text-base leading-8 text-muted-foreground">
              اكتشف أفضل أدوات الذكاء الاصطناعي في مكان واحد.
              ساعد نفسك في اختيار الأداة المناسبة من خلال التصنيفات
              والمراجعات.
            </p>
          </div>


          {/* Useful Links */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-foreground">
              روابط تهمك
            </h3>

            <ul className="space-y-4">
              {footerLinks.usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-foreground">
              القوانين
            </h3>

            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-foreground">
              تابعنا
            </h3>

            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>


        {/* Copyright */}
        <div className="border-t border-border py-7 text-center text-base text-muted-foreground">
          <p dir="rtl">
            جميع الحقوق محفوظة لـ{" "}
            <span dir="ltr" className="inline-block">
              Aivora © {new Date().getFullYear()}
            </span>
          </p>
        </div>

      </Container>
    </footer>
  );
}
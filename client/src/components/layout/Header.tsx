
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  siFacebook,
  siInstagram,
  siX,
} from "simple-icons";
import { useState } from "react";

import { navigation } from "@/config/navigation";
import Container from "@/components/layout/Container";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-xl">
      <Container>
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            {/* Logo Icon */}
            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                transition-all
                duration-300
                group-hover:scale-105
              "
            >
              <Image
                src="/images/aivora-logo.png"
                alt="Aivora Logo"
                width={40}
                height={40}
                priority
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Logo Name */}
            <div
              dir="ltr"
              className="flex items-center"
            >
              <span
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-foreground
                  transition-colors
                  group-hover:text-primary
                "
              >
                Ai
              </span>

              <span
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-primary
                "
              >
                vora
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 md:flex">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-base
                    font-semibold
                    transition-colors
                    ${
                      isActive
                        ? "bg-secondary text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Social Media */}
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card px-1.5 py-1.5 md:flex">
            <a
              href="https://web.facebook.com/profile.php?id=61593685306898"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5 fill-current"
                aria-hidden="true"
              >
                <path d={siFacebook.path} />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5 fill-current"
                aria-hidden="true"
              >
                <path d={siInstagram.path} />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5 fill-current"
                aria-hidden="true"
              >
                <path d={siX.path} />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-card
              text-foreground
              transition-all
              duration-200
              hover:border-primary/30
              hover:bg-secondary
              hover:text-primary
              md:hidden
            "
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden
            ${
              isOpen
                ? "max-h-[500px] border-t border-border/70 py-4"
                : "max-h-0"
            }
          `}
        >
          <nav className="flex flex-col gap-2 pb-4">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    text-base
                    font-semibold
                    transition-all
                    ${
                      isActive
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Social Media */}
          <div className="flex items-center justify-center gap-2 border-t border-border pt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d={siFacebook.path} />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d={siInstagram.path} />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d={siX.path} />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}


"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-gray bg-paper/92 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[92px] w-full max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
      >
        <Link href="/" aria-label={BUSINESS.name} className="shrink-0">
          {/* Horizontal primary lockup 2 — sized down for mobile so the
              right-hand "PLUMBING & DRAIN" stack still reads cleanly. */}
          <span className="hidden sm:inline-flex">
            <Logo variant="horizontal" size="md" tone="light" />
          </span>
          <span className="sm:hidden">
            <Logo variant="horizontal" size="sm" tone="light" />
          </span>
        </Link>

        <div className="hidden items-center gap-9 xl:gap-11 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium text-navy/75 transition-colors hover:text-navy",
                  active && "text-navy",
                )}
                style={{ letterSpacing: "0.04em" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 text-[13px] font-bold text-gold transition-colors hover:text-gold-dark md:inline-flex"
            style={{ letterSpacing: "0.02em" }}
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="copper-pulse relative hidden items-center gap-2 rounded-md bg-gold px-4 py-[10px] text-[12px] font-bold uppercase text-white shadow-sm transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark md:inline-flex"
            style={{ letterSpacing: "0.12em" }}
          >
            <span className="relative inline-flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            24/7 Emergency
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-warm-gray bg-paper text-navy transition-[border-color,background-color] duration-300 hover:border-navy/25 lg:hidden"
          >
            <span className="relative block h-5 w-5">
              <Menu
                className={cn(
                  "absolute inset-0 h-5 w-5 transition-all duration-300",
                  open ? "scale-75 rotate-45 opacity-0" : "scale-100 rotate-0 opacity-100",
                )}
                aria-hidden="true"
              />
              <X
                className={cn(
                  "absolute inset-0 h-5 w-5 transition-all duration-300",
                  open ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-45 opacity-0",
                )}
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-warm-gray bg-paper transition-all duration-300 ease-out lg:hidden",
          open ? "max-h-[360px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="container-1140 flex flex-col gap-1 py-3">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-[14px] font-medium transition-colors",
                  active ? "bg-navy text-white" : "text-navy/80 hover:bg-mist",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={BUSINESS.phoneHref}
            className="copper-pulse mt-2 flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-[13px] font-bold uppercase text-white"
            style={{ letterSpacing: "0.12em" }}
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

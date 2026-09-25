"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { TKey } from "@/i18n/dictionaries";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Seal } from "@/components/ui/Seal";
import { LanguageSwitcher } from "./LanguageSwitcher";

function isActive(pathname: string, item: NavItem): boolean {
  const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  const path = norm(pathname);
  if (item.href === "/") return path === "/";
  if (item.children?.some((c) => path === norm(c.href) || path.startsWith(`${norm(c.href)}/`))) return true;
  return path === norm(item.href) || path.startsWith(`${norm(item.href)}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const label = (key: string) => t(`nav.${key}` as TKey);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open; Esc closes menus
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setDropdown(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-navy-100 bg-ivory/95 shadow-royal backdrop-blur-sm"
          : "border-transparent bg-ivory",
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        {/* Brand */}
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={t("site.name")}>
          <Seal className="h-12 w-12 transition duration-300 group-hover:scale-105 lg:h-14 lg:w-14" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-semibold text-navy-900 sm:text-lg lg:text-xl">
              {t("site.name")}
            </span>
            <span className="block truncate text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-600 sm:text-xs">
              {t("site.tagline")}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav ref={navRef} aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item);
              if (!item.children) {
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        active ? "text-navy-950" : "text-navy-700 hover:text-navy-950",
                      )}
                    >
                      {label(item.key)}
                      {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />}
                    </Link>
                  </li>
                );
              }
              const isOpen = dropdown === item.key;
              return (
                // Single source of truth (React state) drives the dropdown — no CSS
                // :hover classes fighting the click state, so it always closes
                // immediately on selection, outside click or route change, and never
                // gets stuck open just because the cursor is still resting over it.
                <li
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setDropdown(item.key)}
                  onMouseLeave={() => setDropdown((cur) => (cur === item.key ? null : cur))}
                  onFocus={() => setDropdown(item.key)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setDropdown((cur) => (cur === item.key ? null : cur));
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdown(isOpen ? null : item.key)}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-navy-950" : "text-navy-700 hover:text-navy-950",
                    )}
                  >
                    {label(item.key)}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform duration-150", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                    {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />}
                  </button>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition duration-150 ease-out",
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-1 opacity-0 pointer-events-none",
                    )}
                  >
                    <ul className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-royal-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setDropdown(null)}
                            className={cn(
                              "block rounded-xl px-3.5 py-2.5 text-sm transition-colors",
                              pathname.replace(/\/$/, "") === child.href
                                ? "bg-navy-50 font-semibold text-navy-950"
                                : "text-navy-700 hover:bg-ivory-200 hover:text-navy-950",
                            )}
                          >
                            {label(child.key)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label={t("nav.search")}
            className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 bg-white text-navy-700 transition hover:border-gold-400 hover:text-navy-950"
          >
            <Search className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("nav.menu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 text-ivory transition hover:bg-navy-800 xl:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={t("nav.menu")}
              className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-ivory shadow-royal-lg xl:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between bg-royal-gradient px-5 py-4 text-ivory">
                <div className="flex items-center gap-3">
                  <Seal className="h-10 w-10" />
                  <span className="font-display text-base font-semibold leading-tight">{t("site.shortName")}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("nav.close")}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="gold-divider" aria-hidden="true" />

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="space-y-1">
                  {mainNav.map((item) => {
                    const active = isActive(pathname, item);
                    if (!item.children) {
                      return (
                        <li key={item.key}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-xl px-4 py-3 text-[0.95rem] font-medium",
                              active ? "bg-navy-900 text-ivory" : "text-navy-800 hover:bg-navy-50",
                            )}
                          >
                            {label(item.key)}
                          </Link>
                        </li>
                      );
                    }
                    const isExpanded = expanded === item.key;
                    return (
                      <li key={item.key}>
                        <button
                          type="button"
                          onClick={() => setExpanded(isExpanded ? null : item.key)}
                          aria-expanded={isExpanded}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[0.95rem] font-medium",
                            active ? "text-navy-950" : "text-navy-800",
                            "hover:bg-navy-50",
                          )}
                        >
                          {label(item.key)}
                          <ChevronDown
                            className={cn("h-4 w-4 text-gold-600 transition", isExpanded && "rotate-180")}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 overflow-hidden border-l border-gold-300/60 pl-2"
                            >
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-950"
                                  >
                                    {label(child.key)}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-navy-100 p-4">
                <LanguageSwitcher tone="light" className="w-full justify-center" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

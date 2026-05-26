"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_NAME, LUXURY_EASE } from "@/lib/constants";
import { primaryNav } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import Button from "@/components/common/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setAtTop(y < 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = !isHomePage || scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#F9FBF9]/95 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <Link href="/" className="flex flex-col leading-none group">
            <motion.span
              className={cn(
                "font-serif text-4xl font-light tracking-[0.15em] transition-colors duration-300",
                isDark ? "text-[#112211]" : "text-[#F9FBF9]"
              )}
            >
              {SITE_NAME}
            </motion.span>
            <span
              className={cn(
                "text-[10px] font-light uppercase tracking-[0.4em] transition-colors duration-300",
                isDark ? "text-[#112211]" : "text-[#F9FBF9]"
              )}
            >
              Meghalaya
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[20px] font-semibold drop-shadow-[0_0_12px_rgba(249,251,249,1) uppercase tracking-[0.1em] transition-colors duration-300",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300",
                  "hover:after:w-full",
                  isDark
                    ? "text-[#112211] hover:text-[#112211] after:bg-[#112211]"
                    : "text-[#F9FBF9]/70 hover:text-[#F9FBF9] after:bg-[#F9FBF9]",
                  pathname === link.href &&
                    (isDark
                      ? "text-[#112211] after:w-full"
                      : "text-[#F9FBF9] after:w-full")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant={isDark ? "primary" : "outline"}
              size="sm"
              className={cn(
                !isDark &&
                  "border-[#F9FBF9]/50 text-[#F9FBF9] hover:bg-[#F9FBF9]/10 hover:border-[#F9FBF9] rounded-[5px]"
              )}
            >
              <Link href="/booking">Reserve a Stay</Link>
            </Button>
          </div>

          <button
            className={cn(
              "flex lg:hidden items-center justify-center w-10 h-10 transition-colors duration-300",
              isDark ? "text-[#112211]" : "text-[#F9FBF9]"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
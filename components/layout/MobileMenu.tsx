"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_NAME, LUXURY_EASE } from "@/lib/constants";
import { primaryNav } from "@/data/navigation";
import { useScrollLock } from "@/hooks/useScrollLock";
import Button from "@/components/common/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  useScrollLock(open);

  useEffect(() => {
    onClose();
  }, [pathname]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: LUXURY_EASE },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.07, duration: 0.5, ease: LUXURY_EASE },
    }),
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#112211]/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#112211] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-7 border-b border-[#F9FBF9]/10">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-light tracking-[0.15em] text-[#F9FBF9]">
                  {SITE_NAME}
                </span>
                <span className="text-[8px] font-light uppercase tracking-[0.4em] text-[#F9FBF9]/40">
                  Meghalaya
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-[#F9FBF9]/60 hover:text-[#F9FBF9] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {primaryNav.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 font-serif text-3xl font-light text-[#F9FBF9]/70 hover:text-[#F9FBF9] transition-colors duration-300",
                      "border-b border-[#F9FBF9]/8",
                      pathname === link.href && "text-[#F9FBF9]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: LUXURY_EASE }}
              className="px-8 pb-10 pt-6 border-t border-[#F9FBF9]/10"
            >
              <Button variant="ochre" size="lg" fullWidth>
                <Link href="/booking">Reserve a Stay</Link>
              </Button>
              <p className="mt-4 text-center text-[10px] font-light uppercase tracking-[0.2em] text-[#F9FBF9]/30">
                Or call +91 94361 00000
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9FBF9] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center max-w-lg"
      >
        <p className="text-[#6B7A52] text-sm uppercase tracking-[0.3em] mb-4">
          Lost in the mist
        </p>
        <h1 className="text-8xl font-serif text-[#112211] font-bold mb-4">404</h1>
        <p className="text-[#2D3748] mb-8 leading-relaxed">
          The page you're looking for has wandered into the clouds. Let us guide you back to the forest.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}   
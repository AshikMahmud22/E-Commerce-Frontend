"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Search, X } from "lucide-react";

interface MobileSearchProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSearch({
  open,
  onClose,
}: MobileSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="mobile-search"
          initial={{
            x: 80,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: 80,
            opacity: 0,
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.25,
                  ease: "easeOut",
                }
          }
          className="flex flex-1 items-center gap-2"
        >
          <div className="flex h-11 flex-1 items-center rounded-full border border-gray-200 bg-gray-50 px-4">
            <Search
              aria-hidden="true"
              className="h-5 w-5 text-gray-500"
            />

            <input
              ref={inputRef}
              type="search"
              name="search"
              placeholder="Search products..."
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="search"
              aria-label="Search products"
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-2 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <X
              aria-hidden="true"
              className="h-5 w-5"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"use client";

import { memo, KeyboardEvent, useCallback, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { MenuItem } from "./types";

interface MegaMenuProps {
  item: MenuItem | null;
  onClose: () => void;
}

function MegaMenu({ item, onClose }: MegaMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          break;

        case "Tab":
          onClose();
          break;

        default:
          break;
      }
    },
    [onClose],
  );
const children = useMemo(() => {
  return item?.children ?? [];
}, [item]);
  return (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
        
          key={item.id}
          layout
          id={`mega-menu-${item.id}`}
          role="menu"
          aria-labelledby={`nav-${item.id}`}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 12,
          }}
          transition={
            shouldReduceMotion
              ? {
                  duration: 0,
                }
              : {
                  duration: 0.2,
                  ease: "easeOut",
                }
          }
          className="absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
        >
          <div className="max-h-[33vh] overflow-y-auto p-6">
            <h3
              id={`mega-menu-title-${item.id}`}
              className="mb-5 border-b pb-3 text-lg font-semibold"
            >
              {item.title}
            </h3>

            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {children.map((child, index) => (
                <li key={child.id}>
                  <Link
                    href={child.href ?? "#"}
                    role="menuitem"
                    data-menu-item
                    tabIndex={index === 0 ? 0 : -1}
                    onKeyDown={handleKeyDown}
                    className="flex items-center gap-2 rounded-md transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-gray-500"
                    />

                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(MegaMenu);

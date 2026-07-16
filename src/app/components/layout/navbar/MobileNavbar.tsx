"use client";

import { RefObject, useCallback } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";
import MobileActions from "./MobileActions";
import MobileSearch from "./MobileSearch";

import { useAppDispatch } from "@/app/store/hooks";
import { openDrawer } from "@/app/store/slices/uiSlice";

interface MobileNavbarProps {
  isSearchOpen: boolean;
  onSearchOpen: () => void;
  onSearchClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export default function MobileNavbar({
  isSearchOpen,
  onSearchOpen,
  onSearchClose,
  triggerRef,
}: MobileNavbarProps) {
  const dispatch = useAppDispatch();
const handleMenuOpen = useCallback(() => {
  dispatch(openDrawer("mobile-menu"));
}, [dispatch]);
  return (
    <div className="flex h-16 items-center lg:hidden">
      <AnimatePresence mode="wait">
        {isSearchOpen ? (
          <MobileSearch
            key="search"
            open={isSearchOpen}
            onClose={onSearchClose}
          />
        ) : (
          <motion.div
            key="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex w-full items-center justify-between"
          >
            <button
              ref={triggerRef}
              type="button"
              aria-label="Open menu"
             onClick={handleMenuOpen}
              className="rounded-full  transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black hover:cursor-pointer"
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>

            <Logo />

            <MobileActions onSearchOpen={onSearchOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

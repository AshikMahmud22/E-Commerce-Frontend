"use client";

import { RefObject, useCallback, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import DrawerContent from "./DrawerContent";
import DrawerHeader from "./DrawerHeader";
import DrawerOverlay from "./DrawerOverlay";

import {
  useAppDispatch,
  useAppSelector,
} from "@/app/store/hooks";

import { closeDrawer } from "@/app/store/slices/uiSlice";

import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/app/hooks/useEscapeKey";
import { useFocusTrap } from "@/app/hooks/useFocusTrap";
import { useRestoreFocus } from "@/app/hooks/useRestoreFocus";

import { drawerTransition } from "@/app/lib/animations";

interface MobileDrawerProps {
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export default function MobileDrawer({
  triggerRef,
}: MobileDrawerProps) {
  const dispatch = useAppDispatch();

  const open = useAppSelector(
    (state) => state.ui.activeDrawer === "mobile-menu",
  );

  const drawerRef = useRef<HTMLElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const handleClose = useCallback(() => {
    dispatch(closeDrawer());
  }, [dispatch]);

  useBodyScrollLock(open);
  useEscapeKey(open, handleClose);
  useFocusTrap(open, drawerRef);
  useRestoreFocus(open, triggerRef);

  return (
    <>
    
      <DrawerOverlay
        open={open}
        onClose={handleClose}
      />

      <AnimatePresence mode="wait">
        {open && (
          <motion.aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            tabIndex={-1}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : drawerTransition
            }
            className="fixed left-0 top-0 z-50 flex h-dvh w-[85vw] max-w-sm flex-col overflow-hidden bg-white shadow-2xl"
          >
            <DrawerHeader
              onClose={handleClose}
            />

            <div className="flex-1 overflow-y-auto overscroll-contain">
              <DrawerContent />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
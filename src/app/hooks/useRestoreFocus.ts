"use client";

import { RefObject, useEffect } from "react";

export function useRestoreFocus(
  open: boolean,
  triggerRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
    }
  }, [open, triggerRef]);
}
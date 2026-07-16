"use client";

import { useEffect } from "react";

export function useBodyScrollLock(open: boolean) {
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);
}
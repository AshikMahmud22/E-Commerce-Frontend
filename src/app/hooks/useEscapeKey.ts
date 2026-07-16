"use client";

import { useEffect } from "react";

export function useEscapeKey(
  open: boolean,
  onClose: () => void
) {
  useEffect(() => {
    if (!open) return;

    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handle);

    return () =>
      window.removeEventListener("keydown", handle);
  }, [open, onClose]);
}
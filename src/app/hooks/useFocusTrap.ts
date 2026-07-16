"use client";

import { RefObject, useEffect } from "react";

export function useFocusTrap(
  open: boolean,
  ref: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!open || !ref.current) return;

    const container = ref.current;

    const focusable = container.querySelectorAll<HTMLElement>(
      `
      a[href],
      button:not([disabled]),
      textarea,
      input,
      select,
      [tabindex]:not([tabindex="-1"])
      `
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    function handle(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    container.addEventListener("keydown", handle);

    return () => {
      container.removeEventListener("keydown", handle);
    };
  }, [open, ref]);
}
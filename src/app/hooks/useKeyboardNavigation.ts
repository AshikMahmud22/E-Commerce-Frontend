"use client";

import {
  KeyboardEvent,
  RefObject,
  useCallback,
  useRef,
} from "react";

interface UseKeyboardNavigationProps {
  containerRef: RefObject<HTMLElement | null>;
}

export function useKeyboardNavigation({
  containerRef,
}: UseKeyboardNavigationProps) {
  const searchRef = useRef("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSearch = () => {
    searchRef.current = "";

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      const container = containerRef.current;

      if (!container) return;

      const items = Array.from(
        container.querySelectorAll<HTMLElement>("[data-nav-item]"),
      );

      if (!items.length) return;

      const currentIndex = items.findIndex(
        (item) => item === document.activeElement,
      );

      switch (event.key) {
        case "ArrowRight": {
          event.preventDefault();

          items[(currentIndex + 1) % items.length]?.focus();
          return;
        }

        case "ArrowLeft": {
          event.preventDefault();

          items[
            (currentIndex - 1 + items.length) % items.length
          ]?.focus();
          return;
        }

        case "Home": {
          event.preventDefault();

          items[0]?.focus();
          return;
        }

        case "End": {
          event.preventDefault();

          items[items.length - 1]?.focus();
          return;
        }

        default:
          break;
      }

      if (
        event.key.length === 1 &&
        /^[a-z]$/i.test(event.key)
      ) {
        searchRef.current += event.key.toLowerCase();

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(
          clearSearch,
          500,
        );

        const match = items.find((item) =>
          item.textContent
            ?.trim()
            .toLowerCase()
            .startsWith(searchRef.current),
        );

        match?.focus();
      }
    },
    [containerRef],
  );

  return {
    onKeyDown,
  };
}
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { menu } from "./menu";

export function useMegaMenu() {
  const [activeCategory, setActiveCategory] =
    useState<string | null>(null);

  const timerRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  const activeItem = useMemo(() => {
    return (
      menu.find(
        (item) => item.id === activeCategory,
      ) ?? null
    );
  }, [activeCategory]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const openMenu = useCallback(
    (id: string) => {
      clearTimer();

      timerRef.current = setTimeout(() => {
        setActiveCategory(id);
      }, 120);
    },
    [clearTimer],
  );

  const closeMenu = useCallback(() => {
    clearTimer();

    timerRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  }, [clearTimer]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return {
    activeCategory,
    activeItem,
    openMenu,
    closeMenu,
    clearTimer,
  };
}
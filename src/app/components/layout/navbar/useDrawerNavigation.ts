"use client";

import { useMemo, useState } from "react";
import { MenuItem } from "./types";

export function useDrawerNavigation(root: MenuItem[]) {
  const [stack, setStack] = useState<MenuItem[]>([]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const currentItems = useMemo(() => {
    if (stack.length === 0) {
      return root;
    }

    return stack[stack.length - 1].children ?? [];
  }, [root, stack]);

  const currentParent = stack.length > 0 ? stack[stack.length - 1] : null;

  const open = (item: MenuItem) => {
    if (!item.children?.length) return;

    setDirection("forward");
    setStack((prev) => [...prev, item]);
  };

  const back = () => {
    setDirection("back");
    setStack((prev) => prev.slice(0, -1));
  };

  const reset = () => {
    setStack([]);
    setDirection("forward");
  };

  return {
    stack,
    currentItems,
    currentParent,
    direction,
    open,
    back,
    reset,
  };
}

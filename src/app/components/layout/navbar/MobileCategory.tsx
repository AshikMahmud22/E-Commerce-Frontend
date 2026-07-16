"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MenuItem } from "./types";

interface Props {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
  isOpen?: boolean;
}

export default function MobileCategory({
  item,
  onOpen,
  isOpen = false,
}: Props) {
  const handleOpen = useCallback(() => {
    onOpen(item);
  }, [item, onOpen]);

  if (item.children?.length) {
    return (
      <button
        type="button"
        aria-label={item.title}
        aria-expanded={isOpen}
        onClick={handleOpen}
        className="flex w-full items-center justify-between px-4 py-4 text-left font-medium text-gray-900 outline-none transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 active:bg-gray-100"
      >
        <span>{item.title}</span>
        <ChevronRight
          aria-hidden="true"
          className="h-5 w-5 stroke-2 text-gray-400"
        />
      </button>
    );
  }

  return (
    <Link
      href={item.href ?? "#"}
      className="block px-4 py-4 text-sm font-medium text-gray-700 outline-none transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 active:bg-gray-100"
    >
      {item.title}
    </Link>
  );
}
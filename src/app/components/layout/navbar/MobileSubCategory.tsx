"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { MenuItem } from "./types";

interface MobileSubCategoryProps {
  parent: MenuItem;
  onBack: () => void;
}

export default function MobileSubCategory({
  parent,
  onBack,
}: MobileSubCategoryProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="flex w-full items-center gap-2 border-b border-gray-100 px-4 py-4 text-left text-sm font-semibold text-gray-900 outline-none transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 active:bg-gray-100"
      >
        <ChevronLeft className="h-5 w-5 stroke-[2.5] text-gray-500" />
        <span>{parent.title}</span>
      </button>

      <ul className="py-2">
        {parent.children?.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href ?? "#"}
              className="block px-6 py-3 text-sm font-medium text-gray-600 outline-none transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 active:bg-gray-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
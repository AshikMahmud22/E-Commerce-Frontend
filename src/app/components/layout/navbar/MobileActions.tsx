"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { memo } from "react";

interface MobileActionsProps {
  onSearchOpen: () => void;
}

 function MobileActions({
  onSearchOpen,
}: MobileActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
       aria-label="Open search"
        onClick={onSearchOpen}
        className="rounded-full p-2 hover:bg-gray-100"
      >
        <Search className="h-5 w-5" />
      </button>

      <Link
       aria-label="Shopping cart"
        href="/cart"
        className="relative rounded-full p-2 hover:bg-gray-100"
      >
        <ShoppingCart className="h-5 w-5" />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          0
        </span>
      </Link>
    </div>
  );
}
export default memo(MobileActions);
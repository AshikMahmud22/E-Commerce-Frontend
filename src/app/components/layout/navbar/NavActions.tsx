"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { memo } from "react";

function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <Link
        aria-label="Shopping cart"
        href="/cart"
        className="transition hover:text-blue-600"
      >
        <ShoppingCart className="h-6 w-6" />
      </Link>

      <Link
        aria-label="Profile"
        href="/profile"
        className="transition hover:text-blue-600"
      >
        <User className="h-6 w-6" />
      </Link>
    </div>
  );
}
export default memo(NavActions);
"use client";

import { memo } from "react";
import Link from "next/link";

function Logo() {
  return (
   <Link
  href="/"
  aria-label="Go to homepage"
  title="Home"
  className="text-2xl font-bold tracking-wide uppercase"
>
  LOGO
</Link>
  );
}

export default memo(Logo);
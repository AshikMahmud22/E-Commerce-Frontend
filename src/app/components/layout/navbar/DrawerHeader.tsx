"use client";

import { X } from "lucide-react";
import { memo, useCallback } from "react";

interface Props {
  onClose: () => void;
}

function DrawerHeader({ onClose }: Props) {
  const handleClick = useCallback(() => {
  onClose();
}, [onClose]);
  return (
    <div className="flex items-center justify-between border-b p-5 border-gray-400">
      <h2 id="mobile-menu-title" className="text-lg font-semibold">
        Menu
      </h2>
      <button
        type="button"
        aria-label="Close menu"
        onClick={handleClick}
        className="rounded-md p-2 hover:bg-gray-100  "
      >
        <X aria-hidden="true" className="h-6 w-6 hover:rotate-90 duration-300 hover:text-red-500 hover:cursor-pointer" />
      </button>
    </div>
  );
}
export default memo(DrawerHeader);
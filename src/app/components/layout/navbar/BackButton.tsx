"use client";

import { ChevronLeft } from "lucide-react";
import { memo, useCallback } from "react";

interface Props {
  title: string;
  onBack: () => void;
}

 function BackButton({
  title,
  onBack,
 }: Props) {

  const handleBack = useCallback(() => {
  onBack();
}, [onBack]);
  return (
    <button
      onClick={handleBack}
      className="flex w-full items-center gap-2 border-b px-4 py-4 font-medium hover:bg-gray-50"
    >
      <ChevronLeft  aria-hidden="true" className="h-5 w-5" />
      {title}
    </button>
  );
}

export default memo(BackButton);
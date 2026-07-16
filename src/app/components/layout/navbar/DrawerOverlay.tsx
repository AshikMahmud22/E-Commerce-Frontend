"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { memo } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

function DrawerOverlay({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black"
        />
      )}
    </AnimatePresence>
  );
}

export default memo(DrawerOverlay);
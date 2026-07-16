import { Variants } from "framer-motion";

export const drawerVariants: Variants = {
  enterFromRight: {
    x: "100%",
    opacity: 0,
  },

  enterFromLeft: {
    x: "-100%",
    opacity: 0,
  },

  center: {
    x: 0,
    opacity: 1,
  },

  exitToLeft: {
    x: "-100%",
    opacity: 0,
  },

  exitToRight: {
    x: "100%",
    opacity: 0,
  },
};

export const drawerTransition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
} as const;

export const defaultTransition = {
  duration: 0.25,
  ease: "easeOut",
} as const;
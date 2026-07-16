"use client";

import { useRef } from "react";
import NavItem from "./NavItem";
import { menu } from "./menu";
import { useMegaMenu } from "./useMegaMenu";
import { useKeyboardNavigation } from "@/app/hooks/useKeyboardNavigation";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import dynamic from "next/dynamic";
import MegaMenuLoading from "@/app/components/ui/loading/MegaMenuLoading";

const MegaMenu = dynamic(
  () => import("./MegaMenu"),
  {
    loading: () => <MegaMenuLoading />,
  },
);

export default function DesktopNavbar() {
  const navRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const { onKeyDown } = useKeyboardNavigation({
    containerRef: navRef,
  });

  const {
    activeCategory,
    activeItem,
    openMenu,
    closeMenu,
    clearTimer,
  } = useMegaMenu();

  useOutsideClick(wrapperRef, closeMenu);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={clearTimer}
      onMouseLeave={closeMenu}
    >
      <nav aria-label="Primary navigation">
        <ul
          ref={navRef}
          role="menubar"
          onKeyDown={onKeyDown}
          className="flex h-20 items-center gap-8"
        >
          {menu.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeCategory === item.id}
              onOpen={openMenu}
              menuRef={menuContainerRef}
            />
          ))}
        </ul>
      </nav>

      <div ref={menuContainerRef}>
        <MegaMenu
          item={activeItem}
          onClose={closeMenu}
        />
      </div>
    </div>
  );
}
"use client";

import { forwardRef, KeyboardEvent, memo, useCallback, RefObject } from "react";
import { MenuItem } from "./types";
import { ChevronDown } from "lucide-react";

interface NavItemProps {
  item: MenuItem;
  isActive: boolean;
  onOpen: (id: string) => void;
  menuRef: RefObject<HTMLElement | null>;
}

const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(function NavItem(
  { item, isActive, onOpen, menuRef },
  ref,
) {
  const menuId = `mega-menu-${item.id}`;

  const handleMouseEnter = useCallback(() => {
    onOpen(item.id);
  }, [item.id, onOpen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          break;

        case "Enter":
        case " ":
          event.preventDefault();
          onOpen(item.id);
          break;

        case "ArrowDown":
          event.preventDefault();
          onOpen(item.id);

          requestAnimationFrame(() => {
            if (menuRef.current) {
              const first =
                menuRef.current.querySelector<HTMLElement>("[data-menu-item]");
              first?.focus();
            }
          });
          break;

        default:
          break;
      }
    },
    [item.id, onOpen, menuRef],
  );

  return (
    <li role="none" onMouseEnter={handleMouseEnter} className="h-full">
      <button
        ref={ref}
        type="button"
        data-nav-item
        role="menuitem"
        tabIndex={0}
        aria-label={item.title}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup={item.children ? "menu" : undefined}
        aria-expanded={isActive}
        aria-controls={item.children ? menuId : undefined}
        onKeyDown={handleKeyDown}
        className="group flex h-full items-center gap-1.5 border-b-2 border-transparent px-1 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-black hover:text-black focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 hover:cursor-pointer data-[state=open]:text-black"
        data-state={isActive ? "open" : "closed"}
      >
        <span>{item.title}</span>
        <ChevronDown 
          size={14} 
          className={`stroke-[2.5] pt-0.5 text-gray-400 transition-transform duration-300 ease-in-out group-hover:text-black ${
            isActive ? "rotate-180 text-black" : ""
          }`}
        />
      </button>
    </li>
  );
});

NavItem.displayName = "NavItem";

export default memo(NavItem);
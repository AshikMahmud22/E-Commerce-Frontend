"use client";

import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavActions from "./NavActions";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import DrawerLoading from "@/app/components/ui/loading/DrawerLoading";

const MobileDrawer = dynamic(() => import("./MobileDrawer"), {
  ssr: false,
  loading: () => <DrawerLoading />,
});

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const handleSearchOpen = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const handleSearchClose = useCallback(() => {
    setIsSearchOpen(false);
  }, []);
  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="hidden h-20 items-center justify-between lg:flex">
            <div className="flex items-center gap-12">
              <Logo />
              <DesktopNavbar />
            </div>

            <div className="flex items-center gap-6">
              <SearchBar />
              <NavActions />
            </div>
          </div>

          <MobileNavbar
            triggerRef={menuButtonRef}
            isSearchOpen={isSearchOpen}
            onSearchOpen={handleSearchOpen}
            onSearchClose={handleSearchClose}
          />
        </div>
      </header>

      <MobileDrawer triggerRef={menuButtonRef} />
    </>
  );
}

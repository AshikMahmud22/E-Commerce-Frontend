"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { menu } from "./menu";

export default function DrawerContent() {
  const drawerMenu = useMemo(() => menu, []);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <nav aria-label="Mobile navigation">
        <ul className="divide-y divide-gray-100">
          {drawerMenu.map((item) => {
            const hasChildren = !!item.children?.length;
            const isExpanded = expandedId === item.id;

            return (
              <li key={item.id} className="flex flex-col">
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => handleToggle(item.id)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 outline-none transition-colors hover:bg-gray-50 active:bg-gray-100 hover:cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ease-in-out ${
                          isExpanded ? "rotate-180 text-black" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-200 ease-in-out bg-gray-50/50 ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="pl-15 pr-5 py-1.5 flex flex-col gap-0.5">
                          {item.children?.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.href ?? "#"}
                                className="block py-2.5 text-xs font-medium text-gray-600 outline-none transition-colors hover:text-black focus-visible:text-black flex items-center justify-between"
                              >
                                <span>{subItem.title}</span>
                                <ChevronDown
                                  size={12}
                                  className="text-gray-600 transition-transform rotate-270"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className="block px-5 py-4 text-sm font-semibold text-gray-900 outline-none transition-colors hover:bg-gray-50 active:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

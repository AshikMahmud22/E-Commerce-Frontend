"use client";

import { Search } from "lucide-react";
import { memo, useState } from "react";

 function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 outline-none transition-colors duration-500 focus:border-gray-500 "
      />
    </div>
  );
}
export default memo(SearchBar);
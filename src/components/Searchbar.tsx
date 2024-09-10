"use client";

import { toast } from "sonner";

export function SearchBar() {
  return (
    <form
      className="flex items-center w-2/5 rounded-full py-10"
      onSubmit={(e) => {
        e.preventDefault();
        toast.info("This is still under construction 🏗️");
      }}
    >
      <input
        type="text"
        placeholder="Search Projects"
        className="bg-gray-50 pl-10 pr-5 py-2 w-full h-14 text-xl rounded-full border border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500"
      />
    </form>
  );
}

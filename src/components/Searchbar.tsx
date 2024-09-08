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
        className="bg-white pl-10 pr-5 py-2 border w-full h-14 text-xl rounded-full focus:outline-none focus:shadow-outline placeholder-gray-500"
      />
    </form>
  );
}

import { SearchBar } from "@/src/components/Searchbar";
import UserList from "@/src/components/UserList";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div className="flex flex-col w-full pt-5">
        <div className="flex justify-between items-center px-10">
          <SearchBar />
          <Link href="/create-project">
            <div className="bg-gray-800 text-white text-xl h-14 w-56 px-4 py-2 rounded-lg flex items-center justify-center ml-4">
              Create Project +
            </div>
          </Link>
        </div>
      <UserList />
    </div>
  );
}

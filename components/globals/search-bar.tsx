import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <form action="">
      <div className="flex items-center w-[340px] px-2 h-[40px] border-[2px] border-border rounded-md focus-visible:border-[2px] cursor-pointer">
        <Input
          type="text"
          placeholder="Search for anything"
          className="w-full h-full bg-transparent text-primary border-none cursor-pointer"
        />
        <Search size={24} />
      </div>
    </form>
  );
};

export default SearchBar;

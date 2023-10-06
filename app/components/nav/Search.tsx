import { FC } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const Search: FC<SearchProps> = ({ handleSearch }) => {
  return (
    <>
      <aside className="absolute left-4 cursor-pointer" onClick={handleSearch}>
        <MagnifyingGlassCircleIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={handleSearch}
        />
      </aside>
    </>
  );
};

export default Search;

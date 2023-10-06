import { FC } from "react";

const Search: FC<SearchProps> = ({ handleSearch }) => {
  return (
    <>
      <aside className="absolute left-4 cursor-pointer" onClick={handleSearch}>
        Search
      </aside>
    </>
  );
};

export default Search;

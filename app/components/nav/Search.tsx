import { FC } from "react";

type SearchProps = {
  handleSearch: () => void;
};

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

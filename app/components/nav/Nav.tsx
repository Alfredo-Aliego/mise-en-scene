"use client";
import Link from "next/link";
import Search from "./Search";
import Background from "./Background";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Nav: FC<NavProps> = ({
  searchBar,
  setSearchBar,
  backgroundMode,
  setBackgroundMode,
}) => {
  const [canClick, setCanClick] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  // search bar input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // update text displayed as user enters input
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputValue;
    setInputValue("");
    router.push(`/results?query=${value}`);
  };

  const handleSearch = () => setSearchBar(!searchBar);

  const handleBackground = () => {
    setBackgroundMode(!backgroundMode);
    setCanClick(!canClick);
  };

  return (
    <>
      <main className="w-full flex flex-col justify-between items-center p-4 h-20vh relative bg-primary shadow-[rgba(0,0,15,0.5)_0px_4px_3px_0px]">
        <header className="flex justify-center text-4xl font-mono items-center w-full h-full">
          <h1>[Mise-En-Scène]</h1>
        </header>

        <section className="flex w-full justify-center z-10">
          <Search handleSearch={handleSearch} />

          <nav className="flex gap-5 font-mono">
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/director">Director</Link>
            <Link href="/genre">Genre</Link>
            <Link href="/year">Year</Link>
            <Link href="/country">Country</Link>
          </nav>

          <Background handleBackground={handleBackground} canClick={canClick} />
        </section>
      </main>

      <aside
        className={`flex flex-grow items-center absolute top-20vh left-0 w-full h-10vh transition-transform duration-500  ${
          searchBar
            ? "transform translate-y-0 bg-primary shadow-[rgba(0,0,15,0.5)_0px_5px_4px_0px]"
            : "transform translate-y-[-10vh]"
        }`}
      >
        <form className="flex w-full" onSubmit={handleSubmit}>
          <input
            className={`pl-4 text-text bg-secondary flex-grow mx-4 h-12 transition-opacity outline-none ${
              searchBar
                ? "delay-500 opacity-100 "
                : " delay-1500 opacity-0 invisible"
            }`}
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </aside>
    </>
  );
};

export default Nav;

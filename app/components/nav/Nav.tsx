"use client";
import Link from "next/link";
import Search from "./Search";
import Background from "./Background";
import { FC, useState } from "react";

type NavProps = {
  searchBar: boolean;
  setSearchBar: (searchBar: boolean) => void;
  backgroundMode: boolean;
  setBackgroundMode: (backgroundMode: boolean) => void;
};

const Nav: FC<NavProps> = ({
  searchBar,
  setSearchBar,
  backgroundMode,
  setBackgroundMode,
}) => {
  const [canClick, setCanClick] = useState(true);

  const handleSearch = () => setSearchBar(!searchBar);

  const handleBackground = () => {
    setBackgroundMode(!backgroundMode);
    setCanClick(!canClick);
  };

  return (
    <>
      <main className="w-screen flex flex-col justify-between items-center p-4 h-20vh bg-black text-white relative">
        <header>Mise-En-Scène</header>

        <section className="flex w-screen justify-center z-10">
          <Search handleSearch={handleSearch} />

          <nav className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/director">Director</Link>
            <Link href="/genre">Genre</Link>
            <Link href="/year">Year</Link>
          </nav>

          <Background handleBackground={handleBackground} canClick={canClick} />
        </section>
      </main>

      <aside
        className={`flex items-center absolute top-20vh left-0 w-full bg-black h-10vh transition-transform duration-500 ${
          searchBar
            ? "transform translate-y-0"
            : "transform translate-y-[-10vh]"
        }`}
      >
        <input
          className={`w-screen px-4 transition-opacity outline-none ${
            searchBar ? "delay-500 opacity-100" : "opacity-0 invisible"
          }`}
        ></input>
      </aside>
    </>
  );
};

export default Nav;

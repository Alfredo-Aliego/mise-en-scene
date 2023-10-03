"use client";
import Link from "next/link";
import Search from "./Search";
import { useState } from "react";

const Nav = () => {
  const [searchBar, setSearchBar] = useState(false);

  const handleSearch = () => setSearchBar(!searchBar);

  return (
    <>
      <main className="w-screen flex flex-col justify-between items-center p-4 h-20vh bg-black text-white">
        <header>Mise-En-Scène</header>

        <nav className="flex w-screen justify-center z-10">
          <section className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/genre">Genre</Link>
            <Link href="/year">Year</Link>
          </section>

          <Search handleSearch={handleSearch} />
        </nav>
      </main>

      {/* The translate transition works, but it takes up the space where it will transform to, even when searchBar is false. Currently using an alternative where there is no transition but the content underneath moves dynamically. */}
      {/* <aside
        className={`bg-black h-10vh transition-transform duration-500 ${
          searchBar
            ? "transform translate-y-0"
            : "transform translate-y-[-10vh]"
        }`}
      ></aside> */}

      {searchBar ? <aside className="bg-black h-10vh "></aside> : null}
    </>
  );
};

export default Nav;

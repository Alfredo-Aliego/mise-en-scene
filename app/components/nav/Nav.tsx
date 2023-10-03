"use client";
import Link from "next/link";
import Search from "./Search";
import { FC, useState } from "react";

type NavProps = {
  searchBar: boolean;
  setSearchBar: (searchBar: boolean) => void;
};

const Nav: FC<NavProps> = ({ searchBar, setSearchBar }) => {
  const handleSearch = () => setSearchBar(!searchBar);

  return (
    <>
      <main className="w-screen flex flex-col justify-between items-center p-4 h-20vh bg-black text-white relative">
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
      <aside
        className={`absolute top-20vh left-0 w-full bg-black h-10vh transition-transform duration-500 ${
          searchBar
            ? "transform translate-y-0"
            : "transform translate-y-[-10vh]"
        }`}
      ></aside>
    </>
  );
};

export default Nav;

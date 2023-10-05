"use client";
import React, { useState, useEffect } from "react";
import { getTitlesOnly } from "../../api/api";
import Link from "next/link";

type Title = {
  title: string;
};

type SortedTitle = string[];

const MoviesPage = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [sortedTitles, setSortedTitles] = useState<SortedTitle>([]);

  useEffect(() => {
    fetchTitles();
  }, []);

  useEffect(() => {
    sortTitles();
  }, [titles]);

  useEffect(() => {}, [sortedTitles]);

  const fetchTitles = async () => {
    const fetchedTitles: Title[] = await getTitlesOnly();
    setTitles(fetchedTitles);
  };

  const sortTitles = () => {
    titles.forEach((title) => {
      sortedTitles.push(title.title);
    });
    setSortedTitles(sortedTitles.sort());
  };

  return (
    <main className="m-4 pt-4">
      {sortedTitles.length > 0 ? (
        sortedTitles.map((title, index) => (
          <Link key={index} href={`/movie/${title}`} className="block w-max">
            {title}
          </Link>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
};

export default MoviesPage;

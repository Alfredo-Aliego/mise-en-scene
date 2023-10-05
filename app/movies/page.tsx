"use client";
import React, { useState, useEffect } from "react";
import { getTitlesOnly } from "../../api/api";
import Link from "next/link";

type Title = {
  title: string;
};

const MoviesPage = () => {
  const [titles, setTitles] = useState<Title[]>([]);

  useEffect(() => {
    fetchTitles();
  }, []);

  const fetchTitles = async () => {
    const fetchedTitles: Title[] = await getTitlesOnly();
    setTitles(fetchedTitles);
  };

  return (
    <main className="m-4 pt-4">
      {titles.length > 0 ? (
        titles.map((title, index) => (
          <Link
            key={index}
            href={`/movie/${title.title}`}
            className="block w-max"
          >
            {title.title}
          </Link>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
};

export default MoviesPage;

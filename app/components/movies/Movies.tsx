"use client";
import { useState, useEffect } from "react";
import { getTitlesOnly } from "../../../api/api";
import Link from "next/link";
import LoadingBars from "../loading/LoadingBars";

type Title = {
  title: any;
  imdb_id: string;
};

type SortedTitle = Title[];

const Movies = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [sortedTitles, setSortedTitles] = useState<SortedTitle>([]);

  useEffect(() => {
    fetchTitles();
  }, []);

  useEffect(() => {
    sortTitles();
  }, [titles]);

  const fetchTitles = async () => {
    const fetchedTitles: Title[] = await getTitlesOnly();
    setTitles(fetchedTitles);
  };

  const sortTitles = () =>
    setSortedTitles([...titles].sort((a, b) => a.title.localeCompare(b.title)));

  return (
    <main className="m-4 pt-4">
      {sortedTitles.length > 0 ? (
        sortedTitles.map((title, index) => (
          <Link
            key={index}
            href={`/movie/${title.imdb_id}`}
            className="block w-max"
          >
            {title.title}
          </Link>
        ))
      ) : (
        <LoadingBars />
      )}
    </main>
  );
};

export default Movies;

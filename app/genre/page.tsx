"use client";
import React, { useState, useEffect } from "react";
import { getGenresOnly } from "@/api/api";
import Link from "next/link";

type Genre = {
  genre: string;
};

type UniqueGenre = string[];

const GenrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [uniqueGenres, setUniqueGenres] = useState<UniqueGenre>([]);
  const allGenres: string[] = [];

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    getUniqueGenres();
  }, [genres]);

  useEffect(() => {}, [uniqueGenres]);

  const fetchGenres = async () => {
    const fetchedGenres = await getGenresOnly();
    setGenres(fetchedGenres);
  };

  const getUniqueGenres = () => {
    genres.forEach((genre) => {
      const splitGenres = genre.genre.split(", ");
      allGenres.push(...splitGenres);
    });
    setUniqueGenres(Array.from(new Set(allGenres.sort())));
  };

  return (
    <main className="m-4 pt-4">
      {uniqueGenres.length > 0 ? (
        uniqueGenres.map((genre, index) => (
          <Link key={index} href={`/genre/${genre}`} className="block w-max">
            {genre}
          </Link>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
};

export default GenrePage;

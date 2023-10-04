"use client";
import React, { useState, useEffect } from "react";
import { getMovies } from "@/api/api";
import Link from "next/link";

type Movie = {
  genre: string;
};

type UniqueGenre = string[];

const GenrePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [uniqueGenres, setUniqueGenres] = useState<UniqueGenre>([]);
  const allGenres: string[] = [];

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    getGenres();
  }, [movies]);

  useEffect(() => {}, [uniqueGenres]);

  const fetchMovies = async () => {
    let fetchedMovies: Movie[] = await getMovies();
    setMovies(fetchedMovies);
  };

  const getGenres = () => {
    movies.forEach((movie) => {
      const movieGenres = movie.genre.split(", ");
      allGenres.push(...movieGenres);
    });
    setUniqueGenres(Array.from(new Set(allGenres)));
  };

  return (
    <main className="m-4 pt-4">
      {uniqueGenres.length > 0 ? (
        uniqueGenres.map((genre, index) => (
          <Link key={index} href={`/${genre}`} className="block w-max">
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

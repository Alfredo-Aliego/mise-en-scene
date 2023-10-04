"use client";
import React, { useState, useEffect } from "react";
import { getMovies } from "../../api/api";
import Link from "next/link";

type Movie = {
  imdb_id: string;
  title: string;
};

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    let fetchedMovies: Movie[] = await getMovies();
    setMovies(fetchedMovies);
  };

  return (
    <main className="m-4 pt-4">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Link
            key={movie.imdb_id}
            href={`/${movie.title}`}
            className="block w-max"
          >
            {movie.title}
          </Link>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
};

export default MoviesPage;

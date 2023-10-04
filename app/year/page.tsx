"use client";
import React, { useState, useEffect } from "react";
import { getMovies } from "@/api/api";
import Link from "next/link";

type Movie = {
  date_released: string;
};

type UniqueYear = number[];

const YearPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [uniqueYears, setUniqueYears] = useState<UniqueYear>([]);
  const allYears: number[] = [];

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    getYears();
  }, [movies]);

  useEffect(() => {}, [uniqueYears]);

  const fetchMovies = async () => {
    let fetchedMovies: Movie[] = await getMovies();
    setMovies(fetchedMovies);
  };

  const getYears = () => {
    movies.forEach((movie) =>
      allYears.push(parseInt(movie.date_released.slice(0, 4)))
    );
    setUniqueYears(Array.from(new Set(allYears)).sort((a, b) => a - b));
  };

  return (
    <main className="m-4 pt-4">
      {uniqueYears.length > 0 ? (
        uniqueYears.map((year, index) => (
          <Link key={index} href={`/${year}`} className="block w-max">
            {year}
          </Link>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
};

export default YearPage;

"use client";
import { getMovies } from "../api/api.js";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

type Movies = {
  stills: Still[];
  imdb_id: string;
  title: string;
};

type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
};

export default function HomePage() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    let stills: Movies[] = await getMovies();
    setMovies(stills);
    console.log(stills);
  }

  return (
    <main className="m-4 pt-4">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Fragment key={movie.imdb_id}>
            <Link href={`/${movie.title}`} className="block w-max">
              {movie.title}
            </Link>
            <div>
              <img src={movie.stills[0].image_url} alt={movie.title} />
            </div>
          </Fragment>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
}

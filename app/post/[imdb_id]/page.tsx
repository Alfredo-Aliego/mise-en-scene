"use client";
import { useState, useEffect } from "react";
import { getMovieById } from "@/api/api";

type Movie = {
  imdb_id: string;
  title: string;
  date_released: string;
  genre: string;
  rating: string;
  director: string;
  country: string;
  imdb_rating: string;
  stills: Still[];
};

type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
};

export default function Page({ params }: { params: { imdb_id: string } }) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    let fetchedMovie: Movie = await getMovieById(params.imdb_id);
    setMovie(fetchedMovie);
    console.log(fetchedMovie);
  };

  if (!movie)
    return (
      <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
    );

  return (
    <div className="container mx-auto px-4 my-12">
      <h1 className="text-4xl font-bold pt-4 mb-4">
        {movie.title} ({new Date(movie.date_released).getFullYear()})
      </h1>
      <img
        src={movie.stills[0].image_url}
        alt={movie.title}
        className=" w-full"
      />
      <p className="mb-2">
        <span className="font-semibold">Director:</span> {movie.director}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Genre:</span> {movie.genre}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Rating:</span> {movie.rating}
      </p>
      <p className="mb-4">
        <span className="font-semibold">IMDb Rating:</span> {movie.imdb_rating}
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {movie.stills.map((still) => (
          <div key={still.id} className="w-full">
            <img
              className="rounded shadow-lg"
              src={still.image_url}
              alt={`Still from ${movie.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

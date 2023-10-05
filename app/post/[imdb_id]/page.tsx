"use client";
import { useState, useEffect } from "react";
import { getMovieById } from "@/api/api";
import Link from "next/link";
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
  const [movie, setMovie] = useState<Movie | null>(null);

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

  let rating: number = (parseFloat(movie.imdb_rating) / 10) * 5;

  let radioIndex = Math.round(rating * 2) - 1;

  const totalStars = 10;

  console.log(rating);

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
      <div className="flex items-center justify-between mt-2">
        <p className="">
          <span className="font-semibold">Director:</span> {movie.director}
        </p>
        <p className="">
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>
        <p className="">
          <span className="font-semibold">Rating:</span> {movie.rating}
        </p>
        <p className="">
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
          >
            <span className="font-semibold hover:underline">IMDb Rating:</span>
          </a>

          <div
            className="rating rating-lg rating-half lg:tooltip"
            data-tip={rating}
          >
            {Array.from({ length: totalStars }).map((_, index) => {
              return (
                <input
                  type="radio"
                  name="rating-10"
                  className={`bg-yellow-500 mask mask-star-2 ${
                    index % 2 === 0 ? "mask-half-1" : "mask-half-2"
                  }`}
                  checked={index === radioIndex}
                />
              );
            })}
          </div>
        </p>
      </div>

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

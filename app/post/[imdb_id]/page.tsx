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
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    let fetchedMovie: Movie[] = await getMovieById(params.imdb_id);
    setMovie(fetchedMovie);
    console.log(fetchedMovie);
  };

  return <div>My Post:{params.imdb_id}</div>;
}

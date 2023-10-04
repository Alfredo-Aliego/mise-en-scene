"use client";
import { getStills } from "../api/api.js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [stills, setStills] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const stills = await getStills();
    setStills(stills);
  }

  return (
    // Replace with logic relevant to this component
    // <main className="m-4 pt-4">
    //   {movies.length > 0 ? (
    //     movies.map((movie) => (
    //       <Link
    //         key={movie.imdb_id}
    //         href={`/${movie.title}`}
    //         className="block w-max"
    //       >
    //         {movie.title}
    //       </Link>
    //     ))
    //   ) : (
    <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
    // )}
    // </main>
  );
}

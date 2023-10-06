"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getGenresOnly } from "@/api/api";
import LoadingBars from "../loading/LoadingBars";

type Genre = {
  genre: string;
};

type UniqueGenre = string[];

const Genre = () => {
  const router = useRouter();

  const [genres, setGenres] = useState<Genre[]>([]);
  const [uniqueGenres, setUniqueGenres] = useState<UniqueGenre>([]);
  const allGenres: string[] = [];

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    getUniqueGenres();
  }, [genres]);

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
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {uniqueGenres.length > 0 ? (
        uniqueGenres.map((genre, index) => (
          <article
            key={index}
            className="w-[26vw] h-[13vw] flex justify-center items-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current"
            onClick={() => router.push(`/genre/${genre}`)}
          >
            {`[ ${genre} ]`}
          </article>
        ))
      ) : (
        <LoadingBars />
      )}

      {/* Invisible for layout purposes */}
      <div className="w-[26vw] h-[13vw] invisible"></div>
    </main>
  );
};

export default Genre;

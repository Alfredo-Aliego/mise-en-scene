"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDirectorsOnly } from "@/api/api";
import LoadingBars from "../loading/LoadingBars";

const Director = () => {
  const router = useRouter();

  const [directors, setDirectors] = useState<Director[]>([]);
  const [uniqueDirectors, setUniqueDirectors] = useState<UniqueDirector>([]);
  const allDirectors: string[] = [];

  useEffect(() => {
    fetchDirectors();
  }, []);

  useEffect(() => {
    getUniqueDirectors();
  }, [directors]);

  const fetchDirectors = async () => {
    const fetchedDirectors = await getDirectorsOnly();
    setDirectors(fetchedDirectors);
  };

  const getUniqueDirectors = () => {
    directors.forEach((director) => {
      const splitDirectors = director.director.split(", ");
      allDirectors.push(...splitDirectors);
    });
    setUniqueDirectors(Array.from(new Set(allDirectors.sort())));
  };

  return (
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {uniqueDirectors.length > 0 ? (
        uniqueDirectors.map((director, index) => (
          <article
            key={index}
            className="w-[26vw] h-[13vw] flex justify-center items-center text-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current"
            onClick={() => router.push(`/director/${director}`)}
          >
            {`[ ${director} ]`}
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

export default Director;

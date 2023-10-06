"use client";
import React, { useState, useEffect } from "react";
import { getDirectorsOnly } from "@/api/api";
import Link from "next/link";
import LoadingBars from "../components/loading/LoadingBars";

type Director = {
  director: string;
};

type UniqueDirector = string[];

const DirectorPage = () => {
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
    <main className="m-4 pt-4">
      {uniqueDirectors.length > 0 ? (
        uniqueDirectors.map((director, index) => (
          <Link
            key={index}
            href={`/director/${director}`}
            className="block w-max"
          >
            {director}
          </Link>
        ))
      ) : (
        <LoadingBars />
      )}
    </main>
  );
};

export default DirectorPage;

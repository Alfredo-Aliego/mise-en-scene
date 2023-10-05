"use client";
import React, { useState, useEffect } from "react";
import { getYearsOnly } from "@/api/api";
import Link from "next/link";

type Year = {
  year: string;
};

type UniqueYear = number[];

const YearPage = () => {
  const [years, setYears] = useState<Year[]>([]);
  const [uniqueYears, setUniqueYears] = useState<UniqueYear>([]);
  const allYears: number[] = [];

  useEffect(() => {
    fetchYears();
  }, []);

  useEffect(() => {
    getYears();
  }, [years]);

  useEffect(() => {}, [uniqueYears]);

  const fetchYears = async () => {
    let fetchedYears: Year[] = await getYearsOnly();
    setYears(fetchedYears);
  };

  const getYears = () => {
    years.forEach((year) => allYears.push(parseInt(year.year)));
    setUniqueYears(allYears.sort((a, b) => a - b));
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

"use client";
import React, { useState, useEffect } from "react";
import { getCountriesOnly } from "@/api/api";
import Link from "next/link";

type Country = {
  country: string;
};

type UniqueCountry = string[];

const CountryPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [uniqueCountries, setUniqueCountries] = useState<UniqueCountry>([]);
  const allCountries: string[] = [];

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    getUniqueCountries();
  }, [countries]);

  useEffect(() => {}, [uniqueCountries]);

  const fetchCountries = async () => {
    const fetchedCountries = await getCountriesOnly();
    setCountries(fetchedCountries);
  };

  const getUniqueCountries = () => {
    countries.forEach((country) => {
      const splitCountries = country.country.split(", ");
      allCountries.push(...splitCountries);
    });
    setUniqueCountries(Array.from(new Set(allCountries.sort())));
  };

  return (
    <main className="m-4 pt-4">
      {uniqueCountries.length > 0 ? (
        uniqueCountries.map((country, index) => (
          <Link
            key={index}
            href={`/country/${country}`}
            className="block w-max"
          >
            {country}
          </Link>
        ))
      ) : (
        <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
      )}
    </main>
  );
};

export default CountryPage;

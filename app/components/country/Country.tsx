"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCountriesOnly } from "@/api/api";
import LoadingBars from "../loading/LoadingBars";

const Country = () => {
  const router = useRouter();

  const [countries, setCountries] = useState<Country[]>([]);
  const [uniqueCountries, setUniqueCountries] = useState<UniqueCountry>([]);
  const allCountries: string[] = [];

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    getUniqueCountries();
  }, [countries]);

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
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {uniqueCountries.length > 0 ? (
        uniqueCountries.map((country, index) => (
          <article
            key={index}
            className="w-[26vw] h-[13vw] flex justify-center items-center text-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current"
            onClick={() => router.push(`/country/${country}`)}
          >
            {`[ ${country} ]`}
          </article>
        ))
      ) : (
        <LoadingBars />
      )}
    </main>
  );
};

export default Country;

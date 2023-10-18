import Link from "next/link";
import { getCountriesOnly } from "@/api/lib/getCountriesOnly";
import LoadingBars from "../loading/LoadingBars";

const Country = async () => {
  const countries: Promise<Country[]> = getCountriesOnly();
  let uniqueCountries = await countries;
  let allCountries: string[] = [];

  uniqueCountries.forEach((country) => {
    const splitCountries = country.country.split(", ");
    allCountries = allCountries.concat(splitCountries);
  });

  uniqueCountries = Array.from(new Set(allCountries.sort())).map((country) => ({
    country,
  }));

  return (
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {uniqueCountries.length > 0 ? (
        uniqueCountries.map((country, index) => (
          <Link
            key={index}
            href={`/country/${country.country}`}
            className="w-[26vw] h-[13vw] flex justify-center items-center text-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current"
          >
            {`[ ${country.country} ]`}
          </Link>
        ))
      ) : (
        <LoadingBars />
      )}
    </main>
  );
};

export default Country;

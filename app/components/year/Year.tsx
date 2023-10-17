import Link from "next/link";
import { getYearsOnly } from "@/api/lib/getYearsOnly";
import LoadingBars from "../loading/LoadingBars";

const Year = async () => {
  const years: Promise<Year[]> = getYearsOnly();
  let allYears = await years;
  let sortedYears: number[] = [];

  allYears.forEach((year) => sortedYears.push(parseInt(year.year)));

  sortedYears.sort((a, b) => a - b).map((year) => ({ year }));

  return (
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {sortedYears.length > 0 ? (
        sortedYears.map((year, index) => (
          <Link
            key={index}
            href={`/year/${year}`}
            className="w-[26vw] h-[13vw] flex justify-center items-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current"
          >
            {`[ ${year} ]`}
          </Link>
        ))
      ) : (
        <LoadingBars />
      )}
    </main>
  );
};

export default Year;

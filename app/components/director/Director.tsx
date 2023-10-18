import Link from "next/link";
import { getDirectorsOnly } from "@/api/lib/getDirectorsOnly";
import LoadingBars from "../loading/LoadingBars";

const Director = async () => {
  const directors: Promise<Director[]> = getDirectorsOnly();
  let uniqueDirectors = await directors;
  let allDirectors: string[] = [];

  uniqueDirectors.forEach((director) => {
    const splitDirectors = director.director.split(", ");
    allDirectors = allDirectors.concat(splitDirectors);
  });

  uniqueDirectors = Array.from(new Set(allDirectors.sort())).map(
    (director) => ({ director })
  );

  return (
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {uniqueDirectors.length > 0 ? (
        uniqueDirectors.map((director, index) => (
          <Link
            key={index}
            href={`/director/${director.director}`}
            className="w-[26vw] h-[13vw] flex justify-center items-center text-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current"
          >
            {`[ ${director.director} ]`}
          </Link>
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

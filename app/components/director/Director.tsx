import Link from "next/link";
import { getDirectorsOnly } from "@/api/lib/getDirectorsOnly";
import LoadingBars from "../loading/LoadingBars";

const Director = async () => {
  const uniqueDirectors: Promise<Director[]> = getDirectorsOnly();

  const directors = await uniqueDirectors;
  console.log("yo");
  console.log(directors);

  return (
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {directors.length > 0 ? (
        directors.map((director, index) => (
          <Link key={index} href={`/director/${director.director}`}>
            <article className="w-[26vw] h-[13vw] flex justify-center items-center text-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current">
              {`[ ${director.director} ]`}
            </article>
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

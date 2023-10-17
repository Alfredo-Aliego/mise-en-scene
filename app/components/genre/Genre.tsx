import { getGenresOnly } from "@/api/lib/getGenresOnly";
import LoadingBars from "../loading/LoadingBars";
import Link from "next/link";

const Genre = async () => {
  const uniqueGenres: Promise<Genre[]> = getGenresOnly();
  let genres = await uniqueGenres;

  let allGenres: string[] = [];

  genres.forEach((genre) => {
    const splitGenres = genre.genre.split(", ");
    allGenres = allGenres.concat(splitGenres);
  });

  genres = Array.from(new Set(allGenres.sort())).map((genre) => ({ genre }));

  return (
    <main className="flex justify-center flex-wrap gap-8 m-4 pt-8">
      {genres.length > 0 ? (
        genres.map((genre, index) => (
          <Link key={index} href={`/genre/${genre.genre}`}>
            <article className="w-[26vw] h-[13vw] flex justify-center items-center bg-secondary cursor-pointer hover:opacity-50 text-4xl border border-current shadow-lg shadow-current">
              {`[ ${genre.genre} ]`}
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

export default Genre;

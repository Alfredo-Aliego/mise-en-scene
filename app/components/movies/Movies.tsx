import Link from "next/link";
import LoadingBars from "../loading/LoadingBars";
import { getTitlesOnly } from "@/api/lib/getTitlesOnly";

const Movies = async () => {
  const titleData: Promise<Title[]> = getTitlesOnly();
  const titles = await titleData;

  const sortedTitles = [...titles].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <main className="m-4 pt-4">
      {sortedTitles.length > 0 ? (
        sortedTitles.map((title, index) => (
          <Link
            key={index}
            href={`/movie/${title.imdb_id}`}
            className="block w-max"
          >
            {title.title}
          </Link>
        ))
      ) : (
        <LoadingBars />
      )}
    </main>
  );
};

export default Movies;

import { queryCountries } from "@/api/lib/queryCountries";
import Masonry from "@/utils/Masonry";
import Link from "next/link";

const CountryResultsPage = async ({ params }: CountryParamsProps) => {
  const movieData: movieData = queryCountries(params.country);
  const movies = await movieData;

  return (
    <main className="mr-4 pt-8">
      <Masonry breakpointCols={3} className="flex" columnClassName="pl-4">
        {movies.map((movie) => (
          <article
            key={movie.imdb_id}
            className="relative group overflow-hidden bg-gray-400 mb-4"
          >
            <Link href={`/movie/${movie.imdb_id}`}>
              <header className="overflow-hidden absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-100 opacity-0 transition-opacity flex justify-center items-center">
                <h1 className="text-white text-center font-bold z-10">
                  {movie.title}
                </h1>
              </header>
              <img
                src={movie.stills[22]?.image_url}
                alt={movie.title}
                className="transition-transform transform group-hover:scale-110 w-full h-auto "
              />
            </Link>
          </article>
        ))}
      </Masonry>
    </main>
  );
};

export default CountryResultsPage;

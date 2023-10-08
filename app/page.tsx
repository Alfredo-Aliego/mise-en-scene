import Link from "next/link";
import Masonry from "@/utils/Masonry";
import LoadingBars from "./components/loading/LoadingBars";
import getMovies from "@/api/lib/getMovies";

const HomePage = async () => {
  const movieData: Promise<Movies[]> = getMovies();

  const movies = await movieData;

  return (
    <main>
      <Masonry
        breakpointCols={3}
        className="flex"
        columnClassName="pl-4 pr-4  pt-4"
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdb_id}>
              <div className="relative group overflow-hidden bg-gray-400 mb-4">
                <img
                  src={movie.stills[22]?.image_url}
                  alt={movie.title}
                  className="transition-transform transform group-hover:scale-110 w-full h-auto "
                />
                <div className="overflow-hidden absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-100 opacity-0 transition-opacity flex justify-center items-center">
                  <span className="text-white font-bold z-10">
                    <Link href={`/movie/${movie.imdb_id}`}>
                      <h1>{movie.title}</h1>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <aside className="w-screen flex justify-center">
            <LoadingBars />
          </aside>
        )}
      </Masonry>
    </main>
  );
};

export default HomePage;

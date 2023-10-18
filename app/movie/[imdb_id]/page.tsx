import { getMovieById } from "@/api/lib/getMovieById";
import FancyBox from "@/hook/Fancy";

const MovieDetailPage = async ({ params }: MovieDetailParamsProps) => {
  const movieDetailData: movieDetailData = getMovieById(params.imdb_id);
  const movie = await movieDetailData;

  let rating: number = (parseFloat(movie.imdb_rating) / 10) * 5;

  let radioIndex = Math.round(rating * 2) - 1;

  const totalStars = 10;

  return (
    <main className="container mx-auto px-4 my-12">
      <h1 className="text-4xl font-bold pt-4 mb-4">
        {movie.title} ({new Date(movie.date_released).getFullYear()})
      </h1>
      <img
        src={movie.stills[0].image_url}
        alt={movie.title}
        className=" w-full"
      />
      <section className="flex items-center justify-between mt-2">
        <article>
          <h2>
            <strong>Director:</strong> {movie.director}
          </h2>
        </article>
        <article>
          <h2>
            <strong>Genre:</strong> {movie.genre}
          </h2>
        </article>
        <article>
          <h2>
            <strong>Rated:</strong> {movie.rating}
          </h2>
        </article>
        <article className="flex items-center">
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
          >
            <h2 className="font-semibold hover:underline">
              IMDb Rating:&nbsp;
            </h2>
          </a>

          <span
            className="rating rating-lg rating-half lg:tooltip pointer-events-none"
            data-tip={rating}
          >
            {Array.from({ length: totalStars }).map((_, index) => {
              return (
                <input
                  key={index}
                  type="radio"
                  name="rating-10"
                  className={`bg-yellow-500 mask mask-star-2 ${
                    index % 2 === 0 ? "mask-half-1" : "mask-half-2"
                  }`}
                  checked={index === radioIndex}
                />
              );
            })}
          </span>
        </article>
      </section>

      <FancyBox
        options={{
          Carousel: {
            infinite: false,
          },
          Toolbar: {
            display: {
              left: ["infobar"],
              middle: ["zoomIn", "zoomOut"],
              right: ["slideshow", "thumbs", "close"],
            },
          },
        }}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {movie.stills.map((still) => (
            <div key={still.id} className="w-full">
              <img
                className="rounded shadow-lg cursor-pointer"
                src={still.image_url}
                alt={`Still from ${movie.title}`}
                data-fancybox="gallery"
              />
            </div>
          ))}
        </div>
      </FancyBox>
    </main>
  );
};

export default MovieDetailPage;

import { getMovieById } from "@/api/lib/getMovieById";
import FancyBox from "../../../hook/Fancy.jsx";
import LoadingBars from "../../components/loading/LoadingBars";

const MovieDetailPage = async ({ params }: MovieDetailParamsProps) => {
  const movieDetailData: movieDetailData = getMovieById(params.imdb_id);
  const movie = await movieDetailData;

  if (!movie) return <LoadingBars />;

  let rating: number = (parseFloat(movie.imdb_rating) / 10) * 5;

  let radioIndex = Math.round(rating * 2) - 1;

  const totalStars = 10;

  return (
    <div className="container mx-auto px-4 my-12">
      <h1 className="text-4xl font-bold pt-4 mb-4">
        {movie.title} ({new Date(movie.date_released).getFullYear()})
      </h1>
      <img
        src={movie.stills[0].image_url}
        alt={movie.title}
        className=" w-full"
      />
      <div className="flex items-center justify-between mt-2">
        <p className="">
          <span className="font-semibold">Director:</span> {movie.director}
        </p>
        <p className="">
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>
        <p className="">
          <span className="font-semibold">Rating:</span> {movie.rating}
        </p>
        <p className="">
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
          >
            <span className="font-semibold hover:underline">IMDb Rating:</span>
          </a>

          <span
            className="rating rating-lg rating-half lg:tooltip"
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
        </p>
      </div>
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
    </div>
  );
};

export default MovieDetailPage;

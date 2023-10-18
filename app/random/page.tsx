"use client";
import { getStills } from "../../api/api.js";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import LoadingBars from "../components/loading/LoadingBars";

export default function RandomPage() {
  const [stills, setStills] = useState<Still[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    let img: Still[] = await getStills();
    setStills(shuffle(img));
    console.log(img);
  }

  function shuffle(array: Still[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * array.length);

      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  if (!stills) {
    return (
      <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
    );
  }
  return (
    <main className="mr-4 pt-4 ">
      <Masonry breakpointCols={3} className="flex" columnClassName="pl-4">
        {stills && stills.length > 0 ? (
          stills.map((still) => (
            <Fragment key={still.id}>
              <div className="relative group overflow-hidden bg-gray-400 mb-4">
                <img
                  src={still.image_url}
                  alt={still.imdb_id}
                  className="transition-transform transform group-hover:scale-110 w-full h-auto "
                />
                <div className="overflow-hidden absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-100 opacity-0 transition-opacity flex justify-center items-center">
                  <span className="text-white font-bold z-10">
                    <Link href={`/post/${still.imdb_id}`}>
                      <h1>{still.imdb_id}</h1>
                    </Link>
                  </span>
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <LoadingBars />
        )}
      </Masonry>
    </main>
  );
}

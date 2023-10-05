"use client";
import { getStills } from "../../api/api.js";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";

type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
};

export default function RandomPage() {
  const [stills, setStills] = useState<Still[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    let img: Still[] = await getStills();
    setStills(img);
    console.log(img);
  }

  return (
    <div>
      <h1>Random Page</h1>
    </div>
  );
}

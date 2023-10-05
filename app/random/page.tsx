import { getStills } from "../../api/api.js";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";

type Movies = {
  stills: Still[];
  imdb_id: string;
  title: string;
};
type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
};

export default function RandomPage() {
  const [stills, setStills] = useState<Still[]>([]);

  return (
    <div>
      <h1>Random Page</h1>
    </div>
  );
}

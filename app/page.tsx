"use client";
import { getStills } from "../api/api.js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [stills, setStills] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const stills = await getStills();
    setStills(stills);
  }

  return <main>HomePage</main>;
}

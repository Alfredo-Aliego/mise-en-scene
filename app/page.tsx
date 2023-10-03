// test
import { getMovies, getMovieById, getStills, getStillById } from "../api/api";

export default function HomePage() {
  // test
  const movies = async () => {
    let movies = await getMovies()
    // console.log(movies)
    let oneMovie = await getMovieById("tt0361862")
    // console.log(oneMovie)
    let stills = await getStills()
    // console.log(stills)
    let oneStill = await getStillById("1")
    // console.log(oneStill)
  }

  movies()

  return (
    <main>
      HomePage
    </main>
  )
}

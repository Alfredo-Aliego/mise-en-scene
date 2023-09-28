import Link from "next/link"

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/genre">Genre</Link>
      <Link href="/year">Year</Link>
    </nav>
  )
}

export default Nav
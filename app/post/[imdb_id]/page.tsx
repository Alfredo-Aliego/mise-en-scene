export default function Page({ params }: { params: { imdb_id: string } }) {
  return <div>My Post:{params.imdb_id}</div>;
}

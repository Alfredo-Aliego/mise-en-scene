export default async function getMovies() {
  const response = await fetch(
    "http://app-movies-django-env.eba-se3ptfd6.us-west-2.elasticbeanstalk.com/movies/"
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export const queryCountries = async (query: query) => {
  const res = await fetch(
    `http://app-movies-django-env.eba-se3ptfd6.us-west-2.elasticbeanstalk.com/countries/${query}`
  );

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};

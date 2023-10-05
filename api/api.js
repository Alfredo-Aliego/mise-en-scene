import api from "./apiConfig";

// get all movies
export const getMovies = async () => {
  try {
    const res = await api.get("/movies");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// get movie by id
export const getMovieById = async (id) => {
  try {
    const res = await api.get(`/movies/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// get all stills
export const getStills = async () => {
  try {
    const res = await api.get("/stills/");
    return res.data;
  } catch (error) {
    console.log("Error: fetching stills.", error);

    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw error;
    }
  }
};

// get still by id
export const getStillById = async (id) => {
  try {
    const res = await api.get(`/stills/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// query directors
export const queryDirectors = async (query) => {
  try {
    const res = await api.get(`/directors/${query}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// query genres
export const queryGenres = async (query) => {
  try {
    const res = await api.get(`/genres/${query}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// query countries
export const queryCountries = async (query) => {
  try {
    const res = await api.get(`/countries/${query}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// query titles
export const queryTitles = async (query) => {
  try {
    const res = await api.get(`/titles/${query}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// query years (needs exact match)
export const queryYears = async (year) => {
  try {
    const res = await api.get(`/years/${year}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// directors only list
export const getDirectorsOnly = async () => {
  try {
    const res = await api.get("/only/directors");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// titles only list
export const getTitlesOnly = async () => {
  try {
    const res = await api.get("/only/titles");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// genres only list
export const getGenresOnly = async () => {
  try {
    const res = await api.get("/only/genres");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// countries only list
export const getCountriesOnly = async () => {
  try {
    const res = await api.get("/only/countries");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// years only list
export const getYearsOnly = async () => {
  try {
    const res = await api.get("/only/years");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// imdb ids only list
export const getImdbIdOnly = async () => {
  try {
    const res = await api.get("/only/imdb");
    return res.data;
  } catch (error) {
    throw error;
  }
};

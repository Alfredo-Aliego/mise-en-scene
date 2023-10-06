type Movie = {
  imdb_id: string;
  title: string;
  date_released: string;
  genre: string;
  rating: string;
  director: string;
  country: string;
  imdb_rating: string;
  stills: Still[];
};

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

type Director = {
  director: string;
};

type UniqueDirector = string[];

type Country = {
  country: string;
};

type UniqueCountry = string[];

type Genre = {
  genre: string;
};

type UniqueGenre = string[];

type Title = {
  title: any;
  imdb_id: string;
};

type SortedTitle = Title[];

type NavProps = {
  searchBar: boolean;
  setSearchBar: (searchBar: boolean) => void;
  backgroundMode: boolean;
  setBackgroundMode: (backgroundMode: boolean) => void;
};

type SearchProps = {
  handleSearch: () => void;
};

type BackgroundProps = {
  handleBackground: () => void;
  canClick: boolean;
};

type Genre = {
  genre: string;
};

type UniqueGenre = string[];

type Year = {
  year: string;
};

type UniqueYear = number[];

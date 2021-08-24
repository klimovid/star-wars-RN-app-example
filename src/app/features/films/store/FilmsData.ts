export interface IFilmData {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/people/1/",
  //    "https://swapi.py4e.com/api/people/2/",
  //],
  planets: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/planets/1/",
  //    "https://swapi.py4e.com/api/planets/2/",
  //],
  starships: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/starships/2/",
  //    "https://swapi.py4e.com/api/starships/3/",
  //],
  vehicles: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/vehicles/4/",
  //    "https://swapi.py4e.com/api/vehicles/6/",
  //],
  species: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/species/1/",
  //    "https://swapi.py4e.com/api/species/2/",
  //],
  created: string;
  edited: string;
  url: string;
}

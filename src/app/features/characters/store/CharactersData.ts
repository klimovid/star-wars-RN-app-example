export interface ICharacterData {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  //"https://swapi.py4e.com/api/planets/1/"
  films: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/films/1/",
  //    "https://swapi.py4e.com/api/films/2/",
  //],
  species: Array<string>;
  //[
  //    "https://swapi.py4e.com/api/species/2/"
  //],
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

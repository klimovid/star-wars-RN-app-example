import { ICharacterData } from './CharactersData';

export default class CharacterModel {
  private data: ICharacterData;

  constructor(film: ICharacterData) {
    this.data = film;
  }

  public get id(): string {
    return this.data.url;
  }

  public get url(): string {
    return this.data.url;
  }

  public get name(): string {
    return this.data.name;
  }

  public get gender(): string {
    return this.data.gender;
  }

  public get mass(): number {
    return this.data.mass;
  }

  public get height(): number {
    return this.data.height;
  }
}

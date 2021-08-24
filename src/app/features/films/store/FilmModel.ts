import { computed } from 'mobx';

import CharacterModel from '../../characters/store/CharacterModel';
import { IFilmData } from './FilmsData';

const TOP_CHARACTERS_COUNT = 5;

export default class FilmModel {
  constructor(
    private readonly deps: {
      data: IFilmData;
      getCharacter: (
        characterUrl: CharacterModel['url'],
      ) => CharacterModel | undefined;
      loadCharacter: (
        characterUrl: CharacterModel['url'],
      ) => Promise<CharacterModel>;
    },
  ) {}

  public get id(): string {
    return this.deps.data.url;
  }

  public get url(): string {
    return this.deps.data.url;
  }

  public get title(): string {
    return this.deps.data.title;
  }

  public get episodeNumber(): number {
    return this.deps.data.episode_id;
  }

  public get releaseDate(): Date {
    return new Date(this.deps.data.release_date);
  }

  public get openingCrawl(): string {
    return this.deps.data.opening_crawl;
  }

  public get director(): string {
    return this.deps.data.director;
  }

  public get producer(): string {
    return this.deps.data.producer;
  }

  private get _topCharacters(): IFilmData['characters'] {
    return this.deps.data.characters.slice(0, TOP_CHARACTERS_COUNT);
  }

  @computed
  public get characters(): Array<CharacterModel> {
    return this._topCharacters
      .map((characterId) => {
        return this.deps.getCharacter(characterId);
      })
      .filter(Boolean) as Array<CharacterModel>;
  }

  preloadCharacters = async () => {
    return Promise.all(
      this._topCharacters.map((characterId) =>
        this.deps.loadCharacter(characterId),
      ),
    );
  };
}

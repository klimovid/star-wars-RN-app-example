import { observable, runInAction, action, makeAutoObservable } from 'mobx';

import Api from '../../../rootStore/Api';

import FilmsApi from './Films.api';
import { IFilmData } from './FilmsData';
import FilmModel from './FilmModel';
import CharacterModel from '../../characters/store/CharacterModel';

export default class FilmsStore {
  constructor(
    private readonly deps: {
      api: Api;
      getCharacter: (
        characterUrl: CharacterModel['url'],
      ) => CharacterModel | undefined;
      loadCharacter: (
        characterUrl: CharacterModel['url'],
      ) => Promise<CharacterModel>;
    },
  ) {
    makeAutoObservable(this);
  }

  filmsApi = new FilmsApi(this.deps);

  isRefreshing: boolean = false;

  isFetching: boolean = false;

  isFetchedWithError: boolean = false;

  filmsList = observable.array<FilmModel>([]);

  @action.bound
  loadFilms = async (): Promise<Array<FilmModel>> => {
    try {
      await this.fetchFilms();
      return this.filmsList;
    } catch (error) {
      throw error;
    }
  };

  @action.bound
  refreshFilms = async (): Promise<Array<FilmModel>> => {
    runInAction(() => {
      this.isRefreshing = true;
    });

    try {
      await this.fetchFilms();
      return this.filmsList;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      runInAction(() => {
        this.isRefreshing = false;
      });
    }
  };

  @action.bound
  private fetchFilms = async () => {
    runInAction(() => {
      this.isFetching = true;
    });

    try {
      const newFilms = await this.filmsApi.fetchFilms();

      runInAction(() => {
        this.filmsList.replace(
          newFilms
            .map(
              (film: IFilmData) =>
                new FilmModel({
                  data: film,
                  getCharacter: this.deps.getCharacter,
                  loadCharacter: this.deps.loadCharacter,
                }),
            )
            .sort(
              (first, second) => first.episodeNumber - second.episodeNumber,
            ),
        );
        this.isFetchedWithError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isFetchedWithError = true;
      });

      throw new Error(error.message);
    } finally {
      runInAction(() => {
        this.isFetching = false;
      });
    }
  };

  @action.bound
  clearFilms = () => {
    this.filmsList.replace([]);
  };
}

import { action, runInAction, makeAutoObservable } from 'mobx';

import FilmModel from '../../store/FilmModel';

class FilmModalStore {
  constructor(film: FilmModel) {
    makeAutoObservable(this);

    this.film = film;
    this.loadData();
  }

  private film: FilmModel;

  isLoading: boolean = false;

  @action.bound
  async loadData() {
    runInAction(() => {
      this.isLoading = true;
    });

    await this.film.preloadCharacters();

    runInAction(() => {
      this.isLoading = false;
    });
  }
}

export default FilmModalStore;

import Api, { IApiListResponse } from '../../../rootStore/Api';

import { IFilmData } from './FilmsData';

export default class OrdersApi {
  constructor(
    private deps: {
      api: Api;
    },
  ) {}

  async fetchFilms(): Promise<Array<IFilmData>> {
    const response = await this.deps.api.get<IApiListResponse<IFilmData>>(
      `https://swapi.py4e.com/api/films/`,
    );

    if (!response.results) {
      throw Error('Failed to fetch orders');
    }

    return response.results;
  }
}

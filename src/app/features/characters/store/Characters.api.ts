import Api from '../../../rootStore/Api';

import { ICharacterData } from './CharactersData';

export default class CharactersApi {
  constructor(
    private deps: {
      api: Api;
    },
  ) {}

  async fetchCharacter(
    characterUrl: ICharacterData['url'],
  ): Promise<ICharacterData> {
    const response = await this.deps.api.get<ICharacterData>(characterUrl);

    if (!response) {
      throw Error('Failed to fetch orders');
    }

    return response;
  }
}

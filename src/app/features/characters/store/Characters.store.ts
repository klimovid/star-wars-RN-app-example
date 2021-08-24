import { observable, runInAction, action } from 'mobx';

import Api from '../../../rootStore/Api';

import CharactersApi from './Characters.api';
import CharacterModel from './CharacterModel';
import withMinDuration from '../../../../lib/withMinDuration';

export default class CharactersStore {
  constructor(
    private readonly deps: {
      api: Api;
    },
  ) {}

  charactersApi = new CharactersApi(this.deps);

  charactersIndex = observable.map<CharacterModel['id'], CharacterModel>(
    {},
    { deep: false },
  );

  @action.bound
  getCharacter = (
    characterId: CharacterModel['id'],
  ): CharacterModel | undefined => {
    return this.charactersIndex.get(characterId);
  };

  @action.bound
  loadCharacter = async (
    characterId: CharacterModel['id'],
  ): Promise<CharacterModel> => {
    try {
      const cachedCharacter = this.charactersIndex.get(characterId);
      if (cachedCharacter) {
        return Promise.resolve(cachedCharacter as CharacterModel);
      }

      const characterData = await withMinDuration(500)(
        this.charactersApi.fetchCharacter(characterId),
      );
      runInAction(() => {
        this.charactersIndex.set(
          characterId,
          new CharacterModel(characterData),
        );
      });

      return Promise.resolve(
        this.charactersIndex.get(characterId) as CharacterModel,
      );
    } catch (error) {
      throw error;
    }
  };
}

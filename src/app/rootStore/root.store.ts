import Api from './Api';
import FilmsStore from '../features/films/store/Films.store';
import CharactersStore from '../features/characters/store/Characters.store';
import CharacterModel from '../features/characters/store/CharacterModel';

class RootStore {
  constructor() {}

  api: Api = new Api();

  characters: CharactersStore = new CharactersStore({
    api: this.api,
  });

  films: FilmsStore = new FilmsStore({
    api: this.api,
    getCharacter: (characterId: CharacterModel['id']) => {
      return this.characters.getCharacter(characterId);
    },
    loadCharacter: async (characterId: CharacterModel['id']) => {
      return await this.characters.loadCharacter(characterId);
    },
  });
}

const rootStore = new RootStore();

export default rootStore;

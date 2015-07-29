import BaseStore from 'fluxible/addons/BaseStore';

class CharacterStore extends BaseStore {

    character: {
        name: undefined,
        race: undefined
    }

    constructor(dispatcher) {
        super(dispatcher);
        this.characters = [];
    }

    _receiveCharacters(characters) {
        this.characters = characters;
        this.emitChange();
    }

    _updateCharacter(payload) {
        console.info('payload: %j', payload);
        this.character = payload;
        this.emitChange();
    }

    getCharacter() {
        return this.character;
    }

    getAll() {
        return this.characters;
    }

    dehydrate() {
        return {
            characters: this.characters
        };
    }

    rehydrate(state) {
        this.characters = state.characters;
    }
}

CharacterStore.storeName = 'CharacterStore';
CharacterStore.handlers = {
    'RECEIVE_CHARACTERS_SUCCESS': '_receiveCharacters',
    'UPDATE_RACE': '_updateCharacter'
};

export default CharacterStore;

import BaseStore from 'fluxible/addons/BaseStore';

class CharacterStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.characters = [];
    }

    _receiveCharacters(characters) {
        this.characters = characters;
        this.emitChange();
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
    'RECEIVE_CHARACTERS_SUCCESS': '_receiveCharacters'
};

export default CharacterStore;

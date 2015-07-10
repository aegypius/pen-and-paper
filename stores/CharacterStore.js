import BaseStore from 'fluxible/addons/BaseStore';

class CharacterStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.characters = [
            {
                name: 'Voldhaü',
                class: 'Chasseur',
                player: 'Nicolas LAURENT'
            },
            {
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            },
            {
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            },
            {
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            },
            {
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            },
            {
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            }
        ];
    }

    getCharacters() {
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
export default CharacterStore;

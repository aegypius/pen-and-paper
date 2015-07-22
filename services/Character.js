import characters from '../fixtures/characters';

export default {
    name: 'character',
    read: (req, resource, params, config, callback) => {
        callback(null, characters);
    }
};

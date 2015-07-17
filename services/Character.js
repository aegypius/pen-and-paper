export default {
    name: 'character',
    read: (req, resource, params, config, callback) => {
        callback(null, [
            {
                id: 1,
                name: 'Voldhaü',
                class: 'Chasseur',
                player: 'Nicolas LAURENT'
            },
            {
                id: 2,
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            },
            {
                id: 3,
                name: 'Mephistelia',
                class: 'Erudit',
                player: 'Élodie CHIVRET'
            }
        ]);
    }
};

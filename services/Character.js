export default {
    name: 'character',
    read: (req, resource, params, config, callback) => {
        callback(null, [
            {
                name: 'Voldhaü',
                class: 'Chasseur',
                player: 'Nicolas LAURENT'
            },
            {
                name: 'Expiation',
                class: 'Chaman',
                player: 'Loïc BILLARD'
            }
        ]);
    }
};

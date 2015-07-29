export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
    character: {
        path: '/character/:id',
        method: 'get',
        page: 'character',
        title: 'Character',
        handler: require('../components/CharacterEditor')
    }
};

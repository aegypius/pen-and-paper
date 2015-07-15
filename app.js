import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import CharacterStore from './stores/CharacterStore';
import RouteStore from './stores/RouteStore';
import fetchrPlugin from 'fluxible-plugin-fetchr';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register fetchr
app.plug(fetchrPlugin({
    xhrPath: '/api'
}));

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(CharacterStore);

module.exports = app;

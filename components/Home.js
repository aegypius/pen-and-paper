import React, {Component, PropTypes} from 'react';
import { connectToStores, provideContext } from 'fluxible-addons-react';

import CharacterCard from './CharacterCard';
import CharacterStore from '../stores/CharacterStore';
import { FloatingActionButton, IconButton, Styles } from 'material-ui';

let Colors = Styles.Colors;

class Home extends Component {
    propTypes: {
        characters: PropTypes.array
    }

    getStyles() {
        return {
            position: 'fixed',
            right: '12px',
            bottom: '12px'
        };
    }

    render() {
        var characters = this.props.characters.map((character) => {
            return <CharacterCard key={character.id} character={character}/>;
        }, this);

        return (
            <div>
                <div id="character-list">{characters}</div>
                <FloatingActionButton mini={false} style={this.getStyles()}>+</FloatingActionButton>
            </div>
        );
    }
}

Home = connectToStores(Home, [CharacterStore], function (context, props) {
    var charStore = context.getStore(CharacterStore);
    return {
        characters: charStore.getAll()
    };
});
// Home = provideContext(Home);
export default Home;

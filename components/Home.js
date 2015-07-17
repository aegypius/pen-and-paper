import React, {Component, PropTypes} from 'react';
import { connectToStores, provideContext } from 'fluxible-addons-react';

import CharacterCard from './CharacterCard';
import ApplicationStore from '../stores/ApplicationStore';
import CharacterStore from '../stores/CharacterStore';
import { AppBar, FloatingActionButton, IconButton, Styles } from 'material-ui';
import showCharacters from '../actions/showCharacters';

let Colors = Styles.Colors;

class Home extends Component {

    contextTypes: {
        executeAction: PropTypes.func.isRequired
    }

    getStyles() {
        return {
            listStyles: {
                padding: '6px'
            },
            floatingButtonStyles: {
                position: 'fixed',
                right: '12px',
                bottom: '12px'
            }
        };
    }

    componentDidMount() {
        this.props.context.executeAction(showCharacters, {});
    }

    onRefresh() {
        this.props.context.executeAction(showCharacters, {});
    }

    render() {
        var characters = this.props.characters.map((character) => {
            return <CharacterCard key={character.id} character={character}/>;
        }, this);

        let { listStyles, floatingButtonStyles } = this.getStyles();

        return (
            <div>
                <AppBar showMenuIconButton={false} title={this.props.title}></AppBar>
                <div style={listStyles}>{characters}</div>
                <FloatingActionButton mini={false} style={floatingButtonStyles}>+</FloatingActionButton>
            </div>
        );
    }
}

Home = connectToStores(Home, [CharacterStore], function (context, props) {
    var appStore = context.getStore(ApplicationStore);
    var charStore = context.getStore(CharacterStore);

    return {
        title: appStore.getApplicationName(),
        characters: charStore.getAll()
    };
});
export default provideContext(Home);

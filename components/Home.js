import React, {Component, PropTypes} from 'react';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { navigateAction } from 'fluxible-router';

import CharacterCard from './CharacterCard';
import ListItem from './ListItem';
import ApplicationStore from '../stores/ApplicationStore';
import CharacterStore from '../stores/CharacterStore';
import { AppBar, FloatingActionButton, IconButton, FontIcon, Styles } from 'material-ui';
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
        let { characters, context } = this.props;
        let { listStyles, floatingButtonStyles } = this.getStyles();

        return (
            <div>
                <AppBar showMenuIconButton={false} title={this.props.title}></AppBar>
                <ListItem style={listStyles} items={characters.map((character) => <CharacterCard key={character.id} character={character}/>)}></ListItem>
                <FloatingActionButton mini={false} primary={true} linkButton={true} style={floatingButtonStyles} href='/character/new' context={context}>
                    <FontIcon className="material-icons">add</FontIcon>
                </FloatingActionButton>
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

import React, { Component, PropTypes } from 'react';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { AppBar, TextField, SelectField, IconButton, FontIcon, Styles } from 'material-ui';
import races from '../fixtures/races';
import classes from '../fixtures/classes';
import genders from '../fixtures/genders';

import updateRace from '../actions/updateRace';

import ApplicationStore from '../stores/ApplicationStore';
import CharacterStore from '../stores/CharacterStore';

class CharacterEditor extends Component {

    propTypes: {
    }

    getStyles() {
        return {
            container: {
                padding: '6px'
            },
            field: {
                large: {
                    width: '100%'
                },
                small: {
                    width: '33%'
                }
            }
        };
    }

    handleChange(value) {
        console.log(this, arguments);
        this.context.executeAction(updateRace, value);
    }

    linkState(prop) {
        return {
            value: this.props.character,
            requestChange: this.handleChange
        };
    }

    render() {
        let { character, context } = this.props;
        let { container, field } = this.getStyles();

        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton linkButton={true} href="/" iconClassName="material-icons">arrow_back</IconButton>}
                    iconElementRight={<IconButton iconClassName="material-icons">check</IconButton>}
                    title={this.props.title}
                ></AppBar>
                <div style={container}>
                    <TextField style={field.small} floatingLabelText="Character" />
                    <TextField style={field.small} floatingLabelText="Player" />
                    <SelectField
                        style={field.small}
                        floatingLabelText='Race'
                        valueMember="name"
                        displayMember="name"
                        context={context}
                        menuItems={races}
                    />
                    <SelectField
                        style={field.small}
                        floatingLabelText='Class'
                        valueMember="name"
                        displayMember="name"
                        context={context}
                        menuItems={classes}
                    />
                    <TextField style={field.small} floatingLabelText="Level" />
                    <TextField style={field.small} floatingLabelText="Experience" />
                    <SelectField
                        style={field.small}
                        floatingLabelText='Gender'
                        valueMember="name"
                        displayMember="name"
                        context={context}
                        menuItems={genders}
                    />
                    <TextField style={field.small} floatingLabelText="Age" />
                    <TextField style={field.small} floatingLabelText="Height" />
                    <TextField style={field.small} floatingLabelText="Weight" />
                    <TextField style={field.small} floatingLabelText="Handedness" />
                    <TextField style={field.small} floatingLabelText="Hair" />
                    <TextField style={field.small} floatingLabelText="Eyes" />
                    <TextField style={field.small} floatingLabelText="Skin" />
                    <TextField style={field.small} floatingLabelText="Code of Honour" />
                    <TextField style={field.small} floatingLabelText="Allegiance #1" />
                    <TextField style={field.small} floatingLabelText="Allegiance #2" />
                    <TextField style={field.small} floatingLabelText="Allegiance #3" />
                </div>
            </div>
        );
    }
}

CharacterEditor = connectToStores(CharacterEditor, [CharacterStore], function (context, props) {
    var appStore = context.getStore(ApplicationStore);
    var charStore = context.getStore(CharacterStore);

    return {
        title: appStore.getApplicationName(),
        character: charStore.getCharacter()
    };
});
export default provideContext(CharacterEditor);

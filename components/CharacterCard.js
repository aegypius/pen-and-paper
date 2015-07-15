import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, Avatar, Styles } from 'material-ui';
let Colors = Styles.Colors;

class CharacterCard extends Component {

    propTypes: {
        character: PropTypes.object
    }

    getStyles() {
        return {
            marginBottom: '5px'
        };
    }

    render() {
        let initial = this.props.character.player.substr(0, 1).toUpperCase();
        let backgroundColor = Colors.grey400;
        let color = Colors.white;

        switch (initial) {
            default:
                backgroundColor = Colors.deepOrange500;
        }
        let avatar = (<Avatar color={color} backgroundColor={backgroundColor}>{initial}</Avatar>);
        return (
            <Card style={this.getStyles()}>
                <CardHeader title={this.props.character.name} subtitle={'Classe: ' + this.props.character.class} avatar={avatar}/>
            </Card>
        );
    }
}

export default CharacterCard;

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
        let { character } = this.props;
        let initial = character.name.substr(0, 1).toUpperCase();
        let backgroundColor = Colors.grey400;
        let color = Colors.white;

        switch (initial) {
            default:
                backgroundColor = Colors.deepOrange500;
        }

        let avatar = (<Avatar color={color} backgroundColor={backgroundColor}>{initial}</Avatar>);
        let classes = character.classes
            .sort((a, b) => a.level > b.level ? -1 : 1 )
            .map((c) => c.name + ' (' + c.level + ')')
            .join(' / ')
        ;

        return (
            <Card style={this.getStyles()}>
                <CardHeader title={character.name} subtitle={classes} avatar={avatar} />
            </Card>
        );
    }
}

export default CharacterCard;

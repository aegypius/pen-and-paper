/*globals document*/

import React, { PropTypes, Component } from 'react';

class Page extends Component {

    propTypes: {
        handler: PropTypes.element
    }

    getStyles() {
        return {
            padding: '70px 6px 6px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '12px'
        };
    }

    render() {
        let Handler = this.props.handler;

        return (
            <div style={this.getStyles()}>
                <Handler />
            </div>
        );
    }
}

export default Page;

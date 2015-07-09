/*globals document*/

import React, { PropTypes, Component } from 'react';

class Page extends Component {
    getStyles() {
        return {
            container: {
                padding: '70px 24px 24px',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '15px'
            }
        };
    }

    render() {
        let Handler = this.props.handler;
        let styles = this.getStyles();

        return (
            <div style={styles.container}>
                <Handler/>
            </div>
        );
    }
}

export default Page;

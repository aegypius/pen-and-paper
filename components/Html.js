import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Html extends React.Component {

    getStyles() {
        return {
            margin: 0
        };
    }

    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()} • {this.props.context.getStore(ApplicationStore).getApplicationName()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css"></link>
            </head>
            <body style={this.getStyles()}>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src={'/public/js/' + this.props.clientFile}></script>
            </html>
        );
    }
}

export default Html;

/*globals document*/

import React, { PropTypes, Component } from 'react';
import mui from 'material-ui';

import ApplicationStore from '../stores/ApplicationStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

var { AppCanvas, Styles } = mui;
var { ThemeManager, Colors } = Styles;


class Application extends Component {

    getChildContext() {
        var tm = new ThemeManager();

        return {
            muiTheme: tm.getCurrentTheme()
        };
    }

    getStyles() {
        return {
            fontFamily: 'Roboto, sans-serif',
            fontSize: '12px'
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }

    render() {
        var Handler = this.props.currentRoute.get('handler');

        return (
            <div style={this.getStyles()}>
                <AppCanvas>
                    <Handler context={this.props.context}/>
                </AppCanvas>
            </div>
        );
    }

}

Application.childContextTypes = {
    muiTheme: PropTypes.object
};

Application = connectToStores(Application, [ApplicationStore], function (context, props) {
    var appStore = context.getStore(ApplicationStore);
    return {
        currentPageName: appStore.getCurrentPageName(),
        pageTitle: appStore.getPageTitle(),
        pages: appStore.getPages(),
        applicationName: appStore.getApplicationName()
    };
});
Application = provideContext(Application);
export default handleHistory(Application);

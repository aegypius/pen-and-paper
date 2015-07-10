/*globals document*/

import React, { PropTypes, Component } from 'react';
import mui from 'material-ui';

import Page from './Page';
import Home from './Home';

import ApplicationStore from '../stores/ApplicationStore';

import provideContext from 'fluxible/addons/provideContext';
import connectToStores from 'fluxible/addons/connectToStores';
import { handleHistory } from 'fluxible-router';

var { AppCanvas, AppBar, Styles } = mui;
var { ThemeManager, Colors } = Styles;


class Application extends Component {
    getChildContext() {
        var tm = new ThemeManager();

        return {
            muiTheme: tm.getCurrentTheme()
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
            <AppCanvas>
                <AppBar title={this.props.applicationName}></AppBar>
                <Page handler={Handler}></Page>
            </AppCanvas>
        );
    }

}

Application.childContextTypes = {
    muiTheme: PropTypes.object
};

Application = connectToStores(Application, [ApplicationStore], function (stores, props) {
    var appStore = stores.ApplicationStore;
    return {
        currentPageName: appStore.getCurrentPageName(),
        pageTitle: appStore.getPageTitle(),
        pages: appStore.getPages(),
        applicationName: appStore.getApplicationName()
    };
});
Application = provideContext(Application);
export default handleHistory(Application);

import BaseStore from 'fluxible/addons/BaseStore';
import routesConfig from '../configs/routes';
import RouteStore from './RouteStore';

class ApplicationStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.currentPageName = null;
        this.currentPage = null;
        this.pages = routesConfig;
        this.pageTitle = '';
        this.applicationName = 'Pen & Paper';
    }

    handlePageTitle(currentRoute) {
        var self = this;
        this.dispatcher.waitFor(RouteStore, function () {
            if (currentRoute && currentRoute.get('title')) {
                self.pageTitle = currentRoute.get('title');
                self.emitChange();
            }
        });
    }

    getApplicationName() {
        return this.applicationName;
    }

    getCurrentPageName() {
        return this.currentPageName;
    }

    getPageTitle() {
        return this.pageTitle;
    }

    getPages() {
        return this.pages;
    }

    dehydrate() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            pageTitle: this.pageTitle,
            applicationName: this.applicationName
        };
    }

    rehydrate(state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.applicationName = state.applicationName;
        this.pages = state.pages;
        this.pageTitle = state.pageTitle;
    }
}

ApplicationStore.storeName = 'ApplicationStore';
ApplicationStore.handlers = {
    'NAVIGATE_SUCCESS': 'handlePageTitle'
};

export default ApplicationStore;

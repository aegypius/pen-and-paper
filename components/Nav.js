'use strict';
var React = require('react');
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
    render() {
        const selected = this.props.selected;
        const links = this.props.links;

        const linkHTML = Object.keys(links).map(function (name) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }

            return (
                <NavLink routeName={link.page} key={link.path} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
            );
        });

        return (
            <nav>
                {linkHTML}
            </nav>
        );
    }
}

Nav.defaultProps = {
    selected: 'home',
    links: {}
};

module.exports = Nav;

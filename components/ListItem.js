import React, {Component, PropTypes} from 'react';

class ListItem extends Component
{
    propTypes: {
        styles: PropTypes.object,
        items: PropTypes.element.isRequired
    }

    render() {
        let { styles, items } = this.props;

        return (
            <div className="list-item" style={styles}>
                {items}
            </div>
        );
    }
}


export default ListItem;

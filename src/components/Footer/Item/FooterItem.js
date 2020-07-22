import React from 'react';
import PropTypes from 'prop-types';
//Estilos
import './Item.css';

function FooterItem (props) {
    
    const { className } = props;

    return (
        <div className={ "Container-Item " + className }>
            <ul>
                { props.children }
            </ul>
        </div>
    );
}

FooterItem.propTypes = {
    className: PropTypes.string
};

FooterItem.defaultProps = {
    className: "Container-Item-Simple"
};

export default FooterItem;
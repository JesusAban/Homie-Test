import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './Label.css';

function Label(props){
    
    const { value, className } = props;
    
    return (
        <div className={ `Label-Container${ className ? (' ' + className) : '' }` }>
            { value }
        </div>
    );
}

Label.propTypes = {
    value: PropTypes.any.isRequired,
    className: PropTypes.string
};

export default Label;
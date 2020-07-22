import React from 'react';
import PropTypes from 'prop-types';
//Components
import NumberFormat from 'react-number-format';

function Currency (props) {

    const { value } = props;

    return (
        <NumberFormat
            value={ parseFloat(value.toFixed(2)) } 
            displayType={ 'text' } 
            thousandSeparator={ true }
            prefix={ '$' }
        />
    );
}

Currency.propTypes = {
    value: PropTypes.number.isRequired
};

export default Currency;
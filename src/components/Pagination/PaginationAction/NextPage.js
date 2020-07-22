import React from 'react';
import PropTypes from 'prop-types';
//Components
import Next from 'src/components/NavigationOption/Next';
//Styles
import './PaginationAction.css';

function NextPage(props) {

    return (
        <Next
            className="Pagination-Action-Container"
            classAction="Pagination-Action"
            { ...props }
        />
    );
}

NextPage.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default NextPage;
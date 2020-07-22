import React from 'react';
import PropTypes from 'prop-types';
//Components
import Preview from 'src/components/NavigationOption/Preview';
//Styles
import './PaginationAction.css';

function PreviewPage(props) {

    return (
        <Preview
            className="Pagination-Action-Container"
            classAction="Pagination-Action"
            { ...props }
        />
    );
}

PreviewPage.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default PreviewPage;
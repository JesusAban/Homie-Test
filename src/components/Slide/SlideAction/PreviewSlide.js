import React from 'react';
import PropTypes from 'prop-types';
//Components
import Preview from 'src/components/NavigationOption/Preview';
//Styles
import './SlideAction.css';

function PreviewSlide(props) {

    return (
        <Preview 
            className="Slide-Action-Container"
            classAction="Slide-Action"
            { ...props }
        />
    );
}

PreviewSlide.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default PreviewSlide;
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Next from 'src/components/NavigationOption/Next';
//Styles
import './SlideAction.css';

function NextSlide(props) {

    return (
        <Next
            className="Slide-Action-Container"
            classAction="Slide-Action"
            { ...props }
        />
    );
}

NextSlide.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default NextSlide;
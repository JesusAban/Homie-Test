import React from 'react';
import PropTypes from 'prop-types';
//Components
import Slide from 'src/components/Slide';
//Styles
import './SlideDepartment.css';

function SlideDepartment(props) {
    
    const { images } = props;

    return (
        <Slide className="Slide-Department-Content">
            {
                images.map((image, index) => (
                    <img src={ image } key={ index } alt={ `Img-${index}` } className="Slide-Department-Img"/>
                ))
            }
        </Slide>
    );
}

SlideDepartment.propTypes = {
    images: PropTypes.array.isRequired
};

export default SlideDepartment;
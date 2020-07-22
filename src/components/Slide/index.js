import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//Components
import NextSlide from './SlideAction/NextSlide';
import PreviewSlide from './SlideAction/PreviewSlide';
//Styles
import './Slide.css';

function Slide(props){
    
    const { children } = props;
    const { className } = props;
    const [number, setNumber] = useState(0);
    const [showNext, setShowNext] = useState(props.children && props.children.length > 1 ? true : false);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        loadSlide();
    }, [number]);

    const loadSlide = () => {
        let currentNumber = number;
        
        if(currentNumber > 0 && currentNumber < (children.length - 1)) {
            setShowNext(true);
            setShowPreview(true);
        } else if (currentNumber === (children.length - 1)){
            setShowNext(false);
        } else {
            setShowPreview(false);
        }
    };

    return (
        <div className={ `Slide${className ? (' ' + className) : ''}` }>
            <div className="Slide-Container">
            {
                children.map((child, index) => (
                    <div className={ `Slide-Fade${ number === index ? ' Slide-Active' : ' Slide-Hidden'}` } key={ index }>
                        { child }
                    </div>
                ))
            }
            </div>
            {
                showPreview && <PreviewSlide
                    value={ number } 
                    setValue={ setNumber } 
                    action={ loadSlide }
                    />
            }
            { 
                showNext && <NextSlide 
                    value={ number } 
                    setValue={ setNumber } 
                    action={ loadSlide }
                    />
                
            }
        </div>
    );
}

Slide.propTypes = {
    children: PropTypes.array.isRequired
};

export default Slide;
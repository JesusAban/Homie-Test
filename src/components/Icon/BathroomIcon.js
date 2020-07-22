import React from 'react';
//Components
import bathroom from 'src/images/bathroom.png';
//Styles
import './Icon.css';

function BathroomIcon (){
    return (
        <div className="Icon-Container">
            <img src={ bathroom } alt="footer" className="Icon" />
        </div>
    );
}

export default BathroomIcon;
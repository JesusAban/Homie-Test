import React from 'react';
//Components
import facebook from 'src/images/facebook.png';
//Styles
import './Icon.css';

function FacebookIcon (){
    return (
        <div className="Icon-Container">
            <img src={ facebook } alt="footer" className="Icon" />
        </div>
    );
}

export default FacebookIcon;
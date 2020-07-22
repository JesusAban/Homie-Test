import React from 'react';
//Components
import homie from 'src/images/homie.png';
//Styles
import './Images.css';

function LogoImage (){
    return (
        <div className="Logo-Container">
            <img src={ homie } alt="logo" className="Logo" />
        </div>
    );
}

export default LogoImage;
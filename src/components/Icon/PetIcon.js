import React from 'react';
//Components
import pet from 'src/images/pet.png';
//Styles
import './Icon.css';

function PetIcon (){
    return (
        <div className="Icon-Container">
            <img src={ pet } alt="footer" className="Icon" />
        </div>
    );
}

export default PetIcon;
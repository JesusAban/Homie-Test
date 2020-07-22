import React from 'react';
//Components
import parking from 'src/images/parking.png';
//Styles
import './Icon.css';

function ParkingIcon (){
    return (
        <div className="Icon-Container">
            <img src={ parking } alt="footer" className="Icon" />
        </div>
    );
}

export default ParkingIcon;
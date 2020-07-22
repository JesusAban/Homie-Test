import React from 'react';
//Components
import bedroom from 'src/images/bedroom.png';
//Styles
import './Icon.css';

function RoomIcon (){
    return (
        <div className="Icon-Container">
            <img src={ bedroom } alt="footer" className="Icon" />
        </div>
    );
}

export default RoomIcon;
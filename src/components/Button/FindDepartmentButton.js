import React from 'react';
//Components
import DefaultButton from './DefaultButton';
//Styles
import './Button.css';

function FindDepartmentButton(props) {
    return (
        <DefaultButton 
            className="Find-Department-Button"
            title="Encuéntrame un depa"
            { ...props }
        />
    );
}

export default FindDepartmentButton;
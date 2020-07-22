import React from 'react';
//Components
import filter from 'src/images/filter.svg';
//Styles
import './Icon.css';

function FilterIcon (){
    return (
        <div className="Icon-Container">
            <img src={ filter } alt="footer" className="Icon" />
        </div>
    );
}

export default FilterIcon;
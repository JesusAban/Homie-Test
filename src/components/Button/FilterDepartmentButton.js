import React from 'react';
//Components
import DefaultButton from './DefaultButton';
import { Filter } from 'src/components/Icon';
//Styles
import './Button.css';

function FilterDepartmentButton(props) {

    return (
        <DefaultButton 
            className="Filter-Department-Button"
            title="Filtros"
            icon={ <Filter/> }
            { ...props }
        />
    );
}

export default FilterDepartmentButton;
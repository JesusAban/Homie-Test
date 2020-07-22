import React from 'react';
//Components
import InfoItemDefault from './InfoItemDefault';
import { Pet } from 'src/components/Icon';

function PetInfoItem (props) {
    
    return (
        <InfoItemDefault 
            { ...props }
            icon = { < Pet />}
        />
    );
}

export default PetInfoItem;
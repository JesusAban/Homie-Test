import React from 'react';
//Components
import InfoItemDefault from './InfoItemDefault';
import { Bathroom } from 'src/components/Icon';

function BathroomInfoItem (props) {
    
    return (
        <InfoItemDefault 
            { ...props }
            icon= { < Bathroom />}
        />
    );
}

export default BathroomInfoItem;
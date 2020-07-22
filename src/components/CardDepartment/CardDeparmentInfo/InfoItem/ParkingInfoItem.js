import React from 'react';
//Components
import InfoItemDefault from './InfoItemDefault';
import { Parking } from 'src/components/Icon';

function ParkingInfoItem (props) {
    
    return (
        <InfoItemDefault 
            { ...props }
            icon = { <Parking />}
        />
    );
}

export default ParkingInfoItem;
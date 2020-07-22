import React from 'react';
//Components
import InfoItemDefault from './InfoItemDefault';
import { Room } from 'src/components/Icon';

function RoomInfoItem (props) {
    
    return (
        <InfoItemDefault 
            { ...props }
            icon = { <Room />}
        />
    );
}

export default RoomInfoItem;
import React from 'react';
//Components
import { 
    RoomInfo,
    BathroomInfo,
    ParkingInfo,
    PetInfo,
    Info
} from './InfoItem';

import './CardDepartmentInfo.css';

function CardDepartmentInfo(props){
    
    const { department } = props;

    return (
        <div className="Card-Department-Info-Container">
            <RoomInfo 
                value={ department.bedrooms }
            />
            <BathroomInfo 
                value={ department.bathrooms }
            />
            <ParkingInfo 
                value={ department.parkings }
            />
            <PetInfo
                value={ department.petFriendly ? "Sí": "No" }
            />
            <Info 
                value={ department.sqareMts }
                className={ "Card-Department-Info-Item-Mts"}
                textClass={ "Card-Department-Info-Item-Text-Mts" }

            />
        </div>
    );
}

export default CardDepartmentInfo;
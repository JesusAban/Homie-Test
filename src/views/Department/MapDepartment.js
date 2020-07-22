import React from 'react';
//Components
import L from 'leaflet';
import { Marker,  Map, TileLayer, Tooltip } from 'react-leaflet';
import Currency from 'src/components/Currency';
//Redux
import { useSelector } from 'react-redux';
//Styles
import 'leaflet/dist/leaflet.css';
import './Department.css';
//Constants
import { MAP_POSITION, MAP_ZOOM } from 'src/constants/Config';


function MapDepartment (){
    
    const departments = useSelector((state) => state.department);

    const getIcon = (selected) => {
        return new L.icon({
            iconUrl: require(`src/images/marker-${selected === true ? 'selected' : 'empty'}.png`),
            iconSize: [1, 1],
            iconAnchor: [1, 1],
            popupAnchor: [0, -41]
        });
    };

    const Markers = () => {
        if(departments && departments.departments && departments.departments.length > 0){
            let markers= departments.departments.map((department) => (
                    <Marker 
                        key={ department.id }
                        icon={ getIcon(department.selected) }
                        position={ [department.location.lat, department.location.lng] }
                        draggable={ false }
                        opacity={ 1 }
                    >
                        <Tooltip
                            direction="top"
                            opacity={ 1 }
                            permanent
                            className={`Map-Department${department.selected === true ? '-Selected' : ''}`}
                        >
                            <Currency
                                value={ department.price }
                            />
                        </Tooltip>
                    </Marker>
                ));
            return markers;
        }

        return null;
    };

    const getInitLocation = () => {
        if(departments && departments.location) {
            return departments.location 
        }
        return MAP_POSITION;
    };

    return (
        <div className="Map-Department-Container">
            <Map center={ getInitLocation() } zoom={ MAP_ZOOM } >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers />
            </Map>
        </div>
    );
}

export default MapDepartment;
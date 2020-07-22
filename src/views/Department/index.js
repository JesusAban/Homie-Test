import React, { useEffect } from 'react';
//Components
import ListDepartmentContent from './ListDepartmentContent';
//Redux
import { useDispatch } from 'react-redux';
import { loadDepartments } from 'src/actions';

import './Department.css';
import MapDepartment from './MapDepartment';

function Department() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDepartments());
    });

    return(
        <div className="Department-Container">
            <ListDepartmentContent />
            <MapDepartment />
        </div>
    );
}

export default Department;
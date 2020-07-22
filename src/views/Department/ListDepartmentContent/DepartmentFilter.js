import React, { useState, useEffect } from 'react';
//Components
import { FilterDepartment } from 'src/components/Button';
//Redux
import { useSelector } from 'react-redux';
//Styles
import './ListDepartmentContent.css';

function DepartmentFilter() {

    const departmentsSelector = useSelector((state) => state.departments);

    const getDepartments = () => {
        let departments = 0;
        if(departmentsSelector !== null && departmentsSelector.departments && departmentsSelector.departments.length > 0){
            departments = departmentsSelector.departments.length;
        }
        return departments;
    };

    return (
        <div className="Department-Filter-Container">
            <div className="Department-Filter">
                <div className="Department-Filter-Location">
                    Cuidad de México
                </div>
                <div className="Department-Filter-Departments">
                    { `${ getDepartments() } departamentos` }
                </div>
            </div>
            <div className="Department-Filter-Action">
                <FilterDepartment />
            </div>
        </div>
    );
}

export default DepartmentFilter;
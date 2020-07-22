import React from 'react';
//Components
import CardDepartment from 'src/components/CardDepartment';
//Redux
import { useSelector } from 'react-redux';

function DepartmentCards() {

    const departmentSelector = useSelector((state) => state.department);

    return (
        <>
            {
                departmentSelector && departmentSelector.departments && departmentSelector.departments.length > 0 ? departmentSelector.departments.map((department) => (
                    <CardDepartment
                        key={ department.id }
                        department={ department }
                    />
                ))
                : null
            }
        </>
    );
}

export default DepartmentCards;
import React, { useState, useEffect } from 'react';
//Components
import Pagination from 'src/components/Pagination';
import DepartmentCards from './DepartmentCards';
import DepartmentFilter from './DepartmentFilter';
import Label from 'src/components/Label'
import { FindDepartment } from 'src/components/Button';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadDeparmentsByPaging } from 'src/actions';
//Styles
import './ListDepartmentContent.css';


function ListDepartmentContent() {

    const departmentsSelector = useSelector((state) => state.departments);
    const paginationSelector = useSelector((state) => state.pagination);

    const dispatch = useDispatch();

    const [page, setPage] = useState(getDefaultPage());
    const [pageSize] = useState(12);
    const [totalPages, setTotalPages] = useState(1);

    function getDefaultPage(){
        return paginationSelector ? paginationSelector.currentPage : 1;
    }

    useEffect(() => {
        if(departmentsSelector.departments && departmentsSelector.departments.length > 0) {
            setTotalPages(getTotalPages());
            loadPage();
        }
    }, [departmentsSelector]);

    useEffect(() => {
        loadPage();
    }, [page]);

    const loadPage = () => {
        let totalItems = departmentsSelector.departments.length;
        let pages = getTotalPages();
        
        let init = page > 1 ? (((page - 1) * pageSize) + 1) : 1 ;
        let end = page < pages ? ((page * pageSize) + 1) : totalItems;
        if(end > 0) {
            let departments = departmentsSelector.departments.slice(init, end);
            
            let pagination = {
                departments,
                page
            };

            dispatch(loadDeparmentsByPaging(pagination));
        }
    };

    function getTotalPages () {
        if(departmentsSelector.departments.length > 12 ) {
            let result = departmentsSelector.departments.length / 12;
            return parseInt(result.toFixed(0));
        }

        return 1;
    }

    return (
        <div className="List-Department-Container">
            <DepartmentFilter />
            <DepartmentCards />
            <Pagination
                page={ page }
                setPage={ setPage }
                totalItems={ departmentsSelector.departments.length }
                totalPages={ totalPages }
            />
            <Label value={ "¿No encuentras depa?" } className="Label-Not-Found" />
            <Label value={ "Dinos que quieres y nosotros te lo buscamos" } className="Label-Suggesting" />
            <FindDepartment />
        </div>
    );
}

export default ListDepartmentContent;
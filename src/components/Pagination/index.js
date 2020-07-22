import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//Components
import PreviewPage from './PaginationAction/PreviewPage';
import NextPage from './PaginationAction/NextPage';
//Styles
import './Pagination.css';

function Pagination(props) {

    const { page, setPage, totalPages, itemsPerPage, totalItems } = props;
    const { onChangePage } = props;
    const [showNext, setShowNext] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        if(page){
            changePage();
        }
    }, [page, totalPages]);

    const changePage = () => {
        let currentPage = page;
        if(currentPage > 1 && currentPage < totalPages) {
            setShowPreview(true);
            setShowNext(true);
        } else if (currentPage === 1) {
            setShowPreview(false);
        } else {
            setShowNext(false);
        }
    };

    return (
        <div className="Pagination">
            <div className="Pagination-Container">
            {
                `${(page - 1) === 0 ? 1 : ((page - 1) * itemsPerPage)} a ${ page * itemsPerPage } de ${ totalItems }`
            }
            </div>
            {
                showPreview && <PreviewPage
                    value={ page } 
                    setValue={ setPage } 
                    action={ onChangePage }
                    />
            }
            { 
                showNext && <NextPage
                    value={ page } 
                    setValue={ setPage } 
                    action={ onChangePage }
                    />
                
            }
        </div>
    );
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    onChangePage: PropTypes.func
};

Pagination.defaultProps = {
    page: 1,
    itemsPerPage: 12
};

export default Pagination;
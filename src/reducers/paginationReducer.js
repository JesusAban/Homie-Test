import * as actionTypes from 'src/actions';

const defaultState = {
    currentPage: 1,
    size: 12,
    total: 0
};

const initialState = () => {
    let departments = localStorage.getItem('paging');
    
    if(departments) {
        return JSON.parse(departments);
    }

    return defaultState;
};

const departmentReducer = (state = initialState(), action) => {
    switch(action.type) {
        case actionTypes.UPDATE_TOTAL: {
            let payload = action.payload;
            let prevState = JSON.parse(JSON.stringify(state));
            prevState.total = payload;
            localStorage.setItem('paging', JSON.stringify(prevState));

            return {
                ...state,
                total: payload
            };
        }

        case actionTypes.UPDATE_CURRENT_PAGE: {
            let payload = action.payload;
            let prevState = JSON.parse(JSON.stringify(state));
            prevState.currentPage = payload;
            localStorage.setItem('paging', JSON.stringify(prevState));

            return {
                ...state,
                currentPage: payload
            };
        }

        default: {
            return state;
        }
    }
};

export default departmentReducer;
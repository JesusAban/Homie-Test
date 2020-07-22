import { combineReducers } from 'redux';
import departmentsReducer from './department/departmentsReducer';
import departmentReducer from './department/departmentReducer';
import paginationReducer from './paginationReducer';

const rootReducer = () => combineReducers({
    departments: departmentsReducer,
    department: departmentReducer,
    pagination: paginationReducer
});

export default rootReducer;
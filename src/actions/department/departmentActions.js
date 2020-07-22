import { updatePage } from 'src/actions';

export const LOAD_DEPARTMENTS_BY_PAGIN = 'LOAD_DEPARTMENTS_BY_PAGIN';
export const REMOVE_DEPARTMENTS = 'REMOVE_DEPARTMENTS';
export const SELECT_DEPARTMENT = 'SELECT_DEPARTMENT';

export const loadDeparmentsByPaging = (paging) => (dispatch) => {
    let departments = paging.departments;
    departments.forEach((department) => {
        department.selected = false;
    });
    dispatch(removeDepartments());
    dispatch({ type: LOAD_DEPARTMENTS_BY_PAGIN, payload: departments });
    dispatch(updatePage(paging.page));
};

export const selectDepartment = (department) => (dispatch) => {
    let payload = {
        id: department.id,
        location: [department.location.lat, department.location.lng],
    }
    dispatch({ type: SELECT_DEPARTMENT, payload });
};

export const removeDepartments = () => (dispatch) => {
    dispatch({ type: REMOVE_DEPARTMENTS });
};
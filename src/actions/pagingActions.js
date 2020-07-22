export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

export const updateTotal = (total) => (dispatch) => {
    dispatch({type: UPDATE_TOTAL, payload: total});
};

export const updatePage = (page) => (dispatch) => {
    dispatch({type: UPDATE_CURRENT_PAGE, payload: page});
};
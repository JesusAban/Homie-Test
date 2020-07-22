import * as actionTypes from 'src/actions';

const defaultState = {
    departments: []
};

const departmentsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_DEPARTMENTS:{
            let payload = action.payload;
            return {
                ...state,
                departments: payload
            };
        }

        default: {
            return state;
        }
    }
};

export default departmentsReducer;
import * as actionTypes from 'src/actions';

const defaultState = {
    location: null,
    departments: []
};

const departmentReducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_DEPARTMENTS_BY_PAGIN: {
            let payload = action.payload;
            let location = payload[0].location;
            
            return {
                ...state,
                location: [location.lat, location.lng],
                departments: payload
            };
        }

        case actionTypes.REMOVE_DEPARTMENTS: {
            let payload = defaultState;
            return {
                ...state,
                location: null,
                departments: payload.departments
            };
        }

        case actionTypes.SELECT_DEPARTMENT: {
            let payload = action.payload;
            return {
                ...state,
                location: payload.location,
                departments: state.departments.map((department) => {
                    if(department.id === payload.id) {
                        return {
                            ...department,
                            selected: true
                        }
                    } else {
                        return {
                            ...department,
                            selected: false
                        }
                    }
                })
            };
        }

        default: {
            return state;
        }
    }
};

export default departmentReducer;
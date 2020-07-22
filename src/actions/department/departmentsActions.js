import DepartmentService from 'src/services/DepartmentService';

export const LOAD_DEPARTMENTS = 'LOAD_DEPARTMENTS';

export const loadDepartments = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        DepartmentService.getDepartments()
            .then((response) => {
                if(response.data) {
                    let departments = response.data.homes.map((department) => (
                        {
                            id: department.id,
                            address: department.abbr_address,
                            bathrooms: department.bathrooms,
                            bedrooms: department.bedrooms,
                            homieExclusive: department.is_homie_exclusive,
                            location: department.location,
                            name: department.name,
                            parkings: department.parkings,
                            petFriendly: department.pet_friendly,
                            photos: department.photos,
                            price: department.price,
                            sqareMts: department.sqare_mts,
                            selected: false
                        }   
                    ));
                    console.log(departments);
                    dispatch({type: LOAD_DEPARTMENTS, payload: departments });
                    resolve(true);
                } else {
                    reject();
                }
            })
            .catch((error) => {
                reject();
            });
    });
};
const CHANGED = 'homework15/job_page/changed';
const ADDED = 'homework15/job_page/added';

const changed = (id, name, value) => ({
    type: CHANGED,
    payload: {
        id: id,
        fieldName: name,
        fieldValue: value
    }
});
const added = (id) => ({
    type: ADDED,
    payload: {
        id: id,
        nameCompany: '',
        position: '',
        dataStartJob: '',
        dataEndJob: ''
    }

});

export const changeValue = (id, fieldName, fieldValue) => (dispatch) => {
    dispatch(changed(id, fieldName, fieldValue));
};
export const addedJob = (id) => (dispatch) => {
    dispatch(added(id));
};

const initialState = {
    jobs: [{
        id: 0,
        nameCompany: '',
        position: '',
        dataStartJob: '',
        dataEndJob: ''
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED:
            return {
                ...state,
                jobs: state.jobs.map((item) => {
                    if (item.id === action.payload.id) {
                        item = {
                            ...item,
                            [action.payload.fieldName]: action.payload.fieldValue
                        }
                        return item;
                    } else {
                        return item;
                    }
                })
            }
        case ADDED:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        default:
            return state;
    }

};

export default reducer;
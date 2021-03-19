const CHANGED = 'homework15/university_page/changed';
const ADDED = 'homework15/university_page/added';

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
        nameUniversity: '',
        specialty: '',
        dataStartUniversity: '',
        dataEndUniversity: ''
    }

});

export const changeValue = (id, fieldName, fieldValue) => (dispatch) => {
    dispatch(changed(id, fieldName, fieldValue));
};
export const addedUniversity = (id) => (dispatch) => {
    dispatch(added(id));
};

const initialState = {
    universities: [{
        id: 0,
        nameUniversity: '',
        specialty: '',
        dataStartUniversity: '',
        dataEndUniversity: ''
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED:
            return {
                ...state,
                universities: state.universities.map((item) => {
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
                universities: [...state.universities, action.payload,]
            }
        default:
            return state;
    }

};

export default reducer;
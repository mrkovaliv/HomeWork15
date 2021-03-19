const CHANGED = 'homework15/person_form/changed';

const changed = (name, value) => ({
    type: CHANGED,
    payload: {
        fieldName: name,
        fieldValue: value
    }

});

export const changeValue = (fieldName, fieldValue) => (dispatch) => {
    dispatch(changed(fieldName, fieldValue));
};

const initialState = {
    formData: {
        firstName: '',
        lastName: '',
        position: '',
        phone: '',
        email: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.fieldName]: action.payload.fieldValue
                }
            }
        default:
            return state;
    }
};

export default reducer;
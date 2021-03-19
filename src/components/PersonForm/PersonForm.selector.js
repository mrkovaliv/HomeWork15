import { createSelector, createStructuredSelector } from 'reselect';

const formDataSelector = createSelector(
    (state) => state.personForm,
    ({ formData }) => formData ? formData : {}
);


export default formDataSelector;
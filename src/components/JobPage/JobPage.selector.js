import { createSelector } from 'reselect';

const jobsSelector = createSelector(

    (state) => state.jobPage,
    ({ jobs }) => jobs ? jobs : []

);

export default jobsSelector;
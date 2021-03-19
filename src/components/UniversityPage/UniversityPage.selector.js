import { createSelector } from 'reselect';

const universitiesSelector = createSelector(
    (state) => state.universityPage,
    ({ universities }) => universities ? universities : []
);

export default universitiesSelector;
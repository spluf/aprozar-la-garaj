import {createSelector} from 'reselect';

const selectUOMs = state => {
    return state.uoms;
};

export const selectUOMList = createSelector(
    [selectUOMs],
    (uoms) => uoms.uoms
);
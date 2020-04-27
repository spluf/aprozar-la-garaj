import {createSelector} from 'reselect';

const selectCategories = state => {
    return state.categories;
};

export const selectCategoryList = createSelector(
    [selectCategories],
    (categories) => categories.categories
);
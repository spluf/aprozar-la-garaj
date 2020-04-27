import CategoryActionTypes from './category.types';

export const addCategory = item => ({
    type: CategoryActionTypes.ADD_CATEGORY,
    payload: item
});

export const removeCategory = item => ({
    type: CategoryActionTypes.REMOVE_CATEGORY,
    payload: item
});

export const updateCategoryList = item => ({
    type: CategoryActionTypes.UPDATE_CATEGORY_LIST,
    payload: item
});
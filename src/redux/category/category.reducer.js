import CategoryActionTypes from './category.types';
import {addCategory} from './category.utils';

const INITIAL_STATE = {
    categories: []
}

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CategoryActionTypes.ADD_CATEGORY:
            return {
                ...state,
                categories: addCategory(state.categories, action.payload)
            };
        case CategoryActionTypes.UPDATE_CATEGORY_LIST:
            return {
                ...state,
                categories: Object.assign(action.payload)
            }
        default:
            return state;
    }
}

export default categoryReducer;
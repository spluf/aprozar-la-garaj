import productActionTypes from './product.types';

const INITIAL_STATE = {
    products: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productActionTypes.UPDATE_PRODUCT_LIST:
            console.log('payload', action.payload);
            return {
                ...state,
                products: Object.assign(action.payload)
            }
        default:
            return state;
    }
}

export default productReducer;
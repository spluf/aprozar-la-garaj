import productActionTypes from './product.types';

const INITIAL_STATE = {
    productList: [],
    selectedProduct: {
        name: '',
        imgUrl: '',
        uom:{},
        category: {},
        price:0
    }
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productActionTypes.UPDATE_PRODUCT_LIST:
            return {
                ...state,
                productList: Object.assign(action.payload)
            }
        case productActionTypes.SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: Object.assign(action.payload)
            }
        case productActionTypes.UPDATE_SELECTED_PRODUCT_VALUES:
            return {
                ...state,
                selectedProduct: Object.assign(action.payload)
            }
        default:
            return state;
    }
}

export default productReducer;
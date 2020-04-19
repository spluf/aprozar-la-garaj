import productActionTypes from './product.types';

export const updateProductList = (products) => ({
    type: productActionTypes.UPDATE_PRODUCT_LIST,
    payload: products
});
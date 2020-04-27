import productActionTypes from './product.types';

export const updateProductList = (products) => ({
    type: productActionTypes.UPDATE_PRODUCT_LIST,
    payload: products
});

export const selectProductToEdit = (product) => ({
    type: productActionTypes.SELECT_PRODUCT,
    payload: product
})

export const updateSelectedProductValues = (product) => ({
    type: productActionTypes.UPDATE_SELECTED_PRODUCT_VALUES,
    payload: product
})
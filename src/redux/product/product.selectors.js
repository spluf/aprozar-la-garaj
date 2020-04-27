import {createSelector} from 'reselect';

const selectProducts = state => {
    return state.productList;
};

export const selectProductList = createSelector(
    [selectProducts],
    (productList) => productList.products
);

export const getSelectedProduct = createSelector(
    [selectProducts],
    (productList) => productList.selectedProduct
)
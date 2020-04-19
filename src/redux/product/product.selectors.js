import {createSelector} from 'reselect';

const selectProducts = state => {
    console.log('state', state);
    return state.products;
};

export const selectProductList = createSelector(
    [selectProducts],
    (products) => products.products
);
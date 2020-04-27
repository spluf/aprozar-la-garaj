import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import productReducer from './product/product.reducer';
import categoryReducer from './category/category.reducer';
import UOMReducer from './uom/uom.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    productList: productReducer,
    categories: categoryReducer,
    uoms: UOMReducer
});

export default persistReducer(persistConfig, rootReducer);
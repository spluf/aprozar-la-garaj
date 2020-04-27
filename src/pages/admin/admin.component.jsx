import React from 'react';
import {Route} from 'react-router-dom';

import ProductsPage from './products/products.component';
import CategoriesPage from './categories/categories.component';
import UOMPage from './uoms/uoms.component';
import OrdersPage from './orders/orders.component';
import AdminMenu from './admin-menu/admin-menu.component';

import './admin.styles.scss';

const AdminPage = ({match}) => {
    console.log('match', `${match.path}/categories`);
    return(
        <div className='main'>
            <div className='admin-page'>
                <div className='admin-menu'>
                    <AdminMenu />
                </div>
                <div className='admin-content'>
                    <Route exact path={`${match.path}`} component={ProductsPage} />
                    <Route exact path={`${match.path}/categories`} component={CategoriesPage} />
                    <Route exact path={`${match.path}/uoms`} component={UOMPage} />
                    <Route exact path={`${match.path}/orders`} component={OrdersPage} />
                </div>
            </div>

        </div>
    )
}

export default AdminPage;
import React from 'react';

import CheckoutList from '../../components/checkout-list/checkout-list.component';

import './checkout.styles.scss';


const CheckoutPage = () => {
    return(
        <div className='main'>
            <div className='checkout-list'>
                <CheckoutList />
            </div>
        </div>
    )
}

export default CheckoutPage;
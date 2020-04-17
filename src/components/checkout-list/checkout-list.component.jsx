import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from './checkout-item/checkout-item.component';

import './checkout-list.styles.scss';


const CheckoutList = ({cartItems, totalValue}) => {
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Produs</span>
                </div>
                <div className='header-block'>
                    <span>Descriere</span>
                </div>
                <div className='header-block'>
                    <span>Cantitate</span>
                </div>
                <div className='header-block'>
                    <span>Pret</span>
                </div>
                <div className='header-block'>
                    <span>Sterge</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.key} cartItem={cartItem} />
                )
            }
            <div className='total'>
                <span>Total: {totalValue} RON</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutList);
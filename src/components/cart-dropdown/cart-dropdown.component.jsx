import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/customButton.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className='empty-cart-message'>Cosul este gol</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/aprozar-la-garaj/checkout');
                dispatch(toggleCartHidden());
            }}>FINALIZEAZA COMANDA</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
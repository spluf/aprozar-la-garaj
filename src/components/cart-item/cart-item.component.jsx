import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {imgUrl, price, name, quantity}}) => {

    return(
        <div className='cart-item'>
            <img src={imgUrl} alt='product' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price} RON</span>
            </div>
        </div>
    )
}

export default CartItem;
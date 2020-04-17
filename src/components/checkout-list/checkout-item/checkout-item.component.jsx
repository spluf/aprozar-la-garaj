import React from 'react';

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem: {name, imgUrl, price, quantity}}) => {
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imgUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price} RON</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;
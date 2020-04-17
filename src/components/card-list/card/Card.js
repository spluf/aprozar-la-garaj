import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../../redux/cart/cart.actions';

import CustomButton from '../../custom-button/customButton.component';

import './card.styles.scss';

const Card = ({product, addItem}) => {
    
    return (
        <article className="card">
            <div className="image" style={{
                backgroundImage: `url(${product.imgUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </div>
            <CustomButton onClick={() => addItem(product)} inverted>Adauga</CustomButton>
        </article>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Card);
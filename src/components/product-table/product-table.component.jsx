import React from 'react';

import './product-table.styles.scss';

const ProductTable = ({products}) => {
    return (
        <div className='product-table'>
            {
                products.map(({name, imgUrl, price}) => (
                    <div className='product-item'>
                        <div className='image-container'>
                            <img src={imgUrl} alt='item'/>
                        </div>
                        <span className='name'>{name}</span>
                        <span className='price'>{price} RON</span>
                        <button>Editeaza</button>
                        <button>Sterge</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductTable;
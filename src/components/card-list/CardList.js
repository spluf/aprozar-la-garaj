import React from 'react';
import Card from './card/Card';

import './cardlist.styles.scss';

export default function CardList({productsList}) {
const cardComponent = productsList.map((productList, i) => {
    if(productList.products.length > 0){
        return(
            <div className='product-category'>
                <h2>{productList.name}</h2>
                <hr />
                <div className='card-list'>
                {
                    productList.products.map(product => {
                        return <Card key={i} product={product} />
                    })
                }
                </div>
                
            </div>
        )
    }
})

    return (
        <section className="category-list">
            {cardComponent}
        </section>
    )
}

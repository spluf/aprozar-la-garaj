import React from 'react';
import Card from './card/Card';

import './cardlist.styles.scss';

export default function CardList({products}) {
const cardComponent = products.map((product, i) => {
    return <Card key={i} product={product} />
})

    return (
        <section className="card-list">
            {cardComponent}
        </section>
    )
}

import React from 'react';

import './card.styles.scss';

export default function Card({product}) {
    return (
        <article className="fl grow no-underline w-50 w-25-m w-20-l">
            <div className="aspect-ratio aspect-ratio--1x1">
                <img alt='produs' src={product.imgUrl}
                    className="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h1 className="mb0 white-90">{product.name}</h1>
                <h2 className="fw4 mt2 white-60">{product.price} Ron</h2>
            </a>
        </article>
    )
}

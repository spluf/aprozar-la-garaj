import React from 'react'

export default function Card({product}) {
    return (
        <article className="fl grow w-100 tc w-50-m w-25-l">
            <div className="aspect-ratio aspect-ratio--1x1">
                <img alt='produs' src={product.imgUrl}
                    className="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f4-ns mb0 black-90">{product.name}</h3>
                <h3 className="f6 f5 fw4 mt2 black-60">{product.price} Ron</h3>
            </a>
        </article>
    )
}

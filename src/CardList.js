import React from 'react'
import Card from './Card'

export default function CardList({products}) {
const cardComponent = products.map((product, i) => {
    return <Card key={i} product={product} />
})

    return (
        <section className="cardList cf w-100 pa2-ns">
            {cardComponent}
        </section>
    )
}

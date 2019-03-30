import React from 'react';
import Card from '../Card/Card';

export default function CardContainer({ cards }) {
    console.log(cards)
    const displayCards = cards.map((card) => (
        <Card key={card.name} card={card} />
    ))
    return (
        <div className="card-container">
            {displayCards}
        </div>
    )
}
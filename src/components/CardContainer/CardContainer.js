import React from 'react';
import Card from '../Card/Card';

export default function CardContainer({ cards }) {
    const displayCards = cards.map((card) => (
        <Card key={card.name} card={card} />
    ))
    return (
        <div className="card-container">
            {displayCards}
        </div>
    )
}
import React from 'react';
import Card from '../Card/Card';

export default function CardContainer({ selectedCards }) {
    console.log(selectedCards)
    const displayCards = selectedCards.map((card) => (
        <Card key={card.name} card={card} />
    ))
    return (
        <div className="card-container">
            {displayCards}
        </div>
    )
}
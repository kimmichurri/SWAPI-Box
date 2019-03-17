import React from 'react';

export default function Card({ card }) {
    console.log(card)
    return (
        <div className="individual-card">
            <h4>{card.name}</h4>
            <p>{card.species}</p>
            <p>{card.homeworld}</p>
            <p>{card.population}</p>
            <p>{card.language}</p>
            <p>{card.terrain}</p>
            <p>{card.climate}</p>
            <p>{card.residents}</p>
            <p>{card.model}</p>
            <p>{card.class}</p>
            <p>{card.passengers}</p>
            <button>🌟</button>
        </div>
    )
}
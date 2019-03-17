import React from 'react';
import nautical_star from '../../assets/nautical_star.svg';

export default function Card({ card }) {
    console.log(card)
    return (
        <div className="individual-card">
            <h3 className="card-title">{card.name}
            <button className="favorite-container">
                <img 
                    className="favorite-icon" 
                    src={nautical_star} 
                    alt="black and white nautical star" 
                />
            </button>
            </h3>
            <p>{card.species} </p>
            <p>{card.homeworld}</p>
            <p>{card.population}</p>
            <p>{card.language}</p>
            <p>{card.terrain}</p>
            <p>{card.climate}</p>
            <p>{card.residents}</p>
            <p>{card.model}</p>
            <p>{card.class}</p>
            <p>{card.passengers}</p>
        </div>
    )
}
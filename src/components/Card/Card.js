import React from 'react';

export default function Card({ homeworld, name, population, species}) {
    return (
        <div className="individual-card">
            <h4>{name}</h4>
            <p>{species}</p>
            <p>{homeworld}</p>
            <p>{population}</p>
        </div>
    )
}
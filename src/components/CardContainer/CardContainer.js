import React from 'react';
import Card from '../Card/Card';

export default function CardContainer({ people }) {
    const displayPeopleCards = people.map((person) => (
        <Card key={person.name} {...person} />
    ))
    return (
        <div className="card-container">
            {displayPeopleCards}
        </div>
    )
}
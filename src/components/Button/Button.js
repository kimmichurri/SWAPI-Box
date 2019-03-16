import React from 'react';

const Button = ({ getPeople, getPlanets, getVehicles }) => {

        return (
            <div>
                <button onClick={getPeople} className="card-category-buttons">people</button>
                <button onClick={getPlanets} className="card-category-buttons">planets</button>
                <button onClick={getVehicles} className="card-category-buttons">vehicles</button>
            </div>
        )
}

export default Button
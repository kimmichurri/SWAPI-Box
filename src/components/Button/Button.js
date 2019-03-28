import React from 'react';

const Button = ({ getPeople, getPlanets, getVehicles }) => {

        return (
            <div>
                <button onClick={getPeople} className="card-category-buttons people">people</button>
                <button onClick={getPlanets} className="card-category-buttons planets">planets</button>
                <button onClick={getVehicles} className="card-category-buttons vehicles">vehicles</button>
            </div>
        )
}

export default Button
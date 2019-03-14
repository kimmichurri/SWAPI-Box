import React from 'react';

const Button = ({ getPeople }) => {

        return (
            <div>
                <button onClick={getPeople} className="card-category-buttons">people</button>
                <button className="card-category-buttons">planets</button>
                <button className="card-category-buttons">vehicles</button>
            </div>
        )
}

export default Button
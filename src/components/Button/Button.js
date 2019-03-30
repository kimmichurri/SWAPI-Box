import React from 'react';

const Button = ({ getPeople, getPlanets, getVehicles }) => {

    //getNewCards(category)
    //if the category does not exist in retrivedData then call the functions below
    //otherwise just filter out the cards with that category and set them to global currentCards

        return (
            <div>
                <button onClick={getPeople} className="card-category-buttons people">people</button>
                <button onClick={getPlanets} className="card-category-buttons planets">planets</button>
                <button onClick={getVehicles} className="card-category-buttons vehicles">vehicles</button>
            </div>
        )
}

//you will have to mapStateToProps here to access the categories in retrievedData in global state

export default Button
import React, { Component } from 'react';

export default class Favorite extends Component {
    constructor() {
        super();
    }
    render() {
        //declare a counter here for favorite and interpolate below
        return (
            <button className="favorite-button">view favorites</button>
        )
    }
}
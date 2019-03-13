import React, { Component } from 'react';

export default class Button extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button className="card-category-buttons">people</button>
                <button className="card-category-buttons">planets</button>
                <button className="card-category-buttons">vehicles</button>
            </div>
        )
    }
}
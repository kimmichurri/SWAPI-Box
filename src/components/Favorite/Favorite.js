import React, { Component } from 'react';

export default class Favorite extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="favorite-button">view favorites {this.props.favorites}</button>
        )
    }
}
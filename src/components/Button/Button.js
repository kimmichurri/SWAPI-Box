import React, { Component } from 'react';

export default class Button extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button>people</button>
                <button>planets</button>
                <button>vehicles</button>
            </div>
        )
    }
}
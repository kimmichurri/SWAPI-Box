import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Favorite extends Component {
    render() {
        return (
            <button className="favorite-button">view favorites {this.props.favorites.length}</button>
        )
    }
}

export const mapStateToProps = (state) => ({
    favorites: state.favorites
})

export default connect(mapStateToProps, null)(Favorite)
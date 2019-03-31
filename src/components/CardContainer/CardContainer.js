import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

class CardContainer extends Component {
    render() {
        const displayCards = this.props.selectedCards.map((card) => (
            <Card key={card.name} card={card} />
        ))
        return (
            <div className="card-container">
                {displayCards}
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    selectedCards: state.currentCards
})

export default connect(mapStateToProps, null)(CardContainer)
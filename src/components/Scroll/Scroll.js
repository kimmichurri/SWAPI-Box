import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scroll extends Component{
    render() {
        return (
            <section className="scroll-container">
                <div className="scroll">
                    <h3 className="scroll-header">{ this.props.openingFilm.title }</h3>
                    <p className="scroll-text"> { this.props.openingFilm.date }</p>
                    <p className="scroll-text"> { this.props.openingFilm.crawl }</p>
                </div>
            </section>
        )
    }
}

export const mapStateToProps = (state) => ({
    openingFilm: state.openingFilm
})

export default connect(mapStateToProps, null)(Scroll)
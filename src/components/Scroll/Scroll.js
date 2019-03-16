import React from 'react';

export default function Scroll({ openingFilm }) {
    return (
        <section className="scroll-container">
            <div className="scroll">
                <h3 className="scroll-header">{ openingFilm.title }</h3>
                <p className="scroll-text"> { openingFilm.date }</p>
                <p className="scroll-text"> { openingFilm.crawl }</p>
            </div>
        </section>
    )
}
import React from 'react';
import classic_loading_icon from '../../assets/classic_loading_icon.png';

export default function LoadingRequest() {
    return (
    <div className="loading-container">
        <img
            className="loading-icon"
            src={classic_loading_icon}
            alt="loading icon, the page is loading"
        />
        <p className="loading-text">Loading...</p>
    </div>
    )
}
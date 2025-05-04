import React from 'react';
import logo from '../assets/bible.png'; // Ensure bible.png exists in this location

const Logo = () => {
    return (
        <img
            src={logo}
            alt="Spirited Text Logo"
            style={{
                width: '100px',
                height: 'auto',
                border: '3px solid #000',    // Black border
                backgroundColor: '#8B4513',    // Brown background
                padding: '10px',
                borderRadius: '5px'
            }}
        />
    );
};

export default Logo;

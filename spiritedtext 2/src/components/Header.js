import React from 'react';
import Logo from './Logo'; // Import Logo component

const Header = () => (
    <header style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', textAlign: 'center' }}>
        <Logo /> {/* Add the Logo component here */}
        <h1>Spirited Text</h1>
    </header>
);

export default Header;

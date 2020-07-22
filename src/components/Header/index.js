import React from 'react';
import { Logo } from 'src/components/Images';
import NavBar from './NavBar';

function Header() {
    return (
        <header className="Header-Container">
            <Logo />
            <NavBar />
        </header>
    );
}

export default Header;
import React from 'react';
//Components
import InformationFooter from './InformationFooter';
import { LogoFooter } from 'src/components/Images';
//Styles
import "./Footer.css";

function Footer(){
    return (
        <footer className="Footer">
            <div className="Footer-Container">
                <LogoFooter />
                <InformationFooter />
            </div>
        </footer>
    );
}

export default Footer;
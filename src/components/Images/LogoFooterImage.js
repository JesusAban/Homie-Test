import React from 'react';
//Components
import footer from 'src/images/footer.png';
//Styles
import './Images.css';

function LogoFooterImage (){
    return (
        <div className="Logo-Footer-Container">
            <img src={ footer } alt="footer" className="Logo" />
        </div>
    );
}

export default LogoFooterImage;
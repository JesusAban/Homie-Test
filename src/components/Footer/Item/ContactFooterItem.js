import React from 'react';
//Components
import FooterItem from './FooterItem';
//Icons
import { Facebook } from 'src/components/Icon';

function ContactFooterItem () {

    return (
        <FooterItem>
            <li>hey@homie.mx</li>
            <li>5045 4546</li>
            <li>
                <Facebook/>
                Escribenos en Facebook 
            </li>
        </FooterItem>
    );
}

export default ContactFooterItem;
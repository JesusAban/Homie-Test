import React from 'react';
//Components
import { 
    ContactItem,
    ServiceItem,
    NoticePrivacyItem,
    TermsConditionsItem
} from './Item';

function InformationFooter() {
    return (
        <>
            <ContactItem />
            <ServiceItem />
            <NoticePrivacyItem />
            <TermsConditionsItem />
        </>
    );
}

export default InformationFooter;
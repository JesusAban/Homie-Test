import React from 'react';
//Components
import Header from 'src/components/Header';
import Container from 'src/views/Container';
import Footer from 'src/components/Footer';
import Department from 'src/views/Department';


function Layout (){
    return (
        <>
            <Header />
            <Container>
                <Department />
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
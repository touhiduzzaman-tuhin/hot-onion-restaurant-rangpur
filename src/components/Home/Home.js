import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Home = () => {
    document.title = 'Red Onion'
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Menu></Menu>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import WelcomeNature from '../WelcomeNature/WelcomeNature';
import OrganicPresenter from '../OrganicPresenter/OrganicPresenter';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header></Header>
            <WelcomeNature></WelcomeNature>
            <OrganicPresenter></OrganicPresenter>
        </div>
    );
};

export default Home;
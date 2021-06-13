import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import WelcomeNature from '../WelcomeNature/WelcomeNature';
import OrganicPresenter from '../OrganicPresenter/OrganicPresenter';
import NewsLatter from '../NewsLatter/NewsLatter';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header></Header>
            <WelcomeNature></WelcomeNature>
            <OrganicPresenter></OrganicPresenter>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import WelcomeNature from '../WelcomeNature/WelcomeNature';
import OrganicPresenter from '../OrganicPresenter/OrganicPresenter';
import NewsLatter from '../NewsLatter/NewsLatter';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header></Header>
            <WelcomeNature></WelcomeNature>
            <OrganicPresenter></OrganicPresenter>
            <NewsLatter></NewsLatter>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;
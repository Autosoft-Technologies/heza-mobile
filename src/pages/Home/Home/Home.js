import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomePricing from './HomePricing/HomePricing';
import HomeServices from './HomeServices/HomeServices';
import Footer from "../../../components/Shared/Footer";
import {Helmet} from "react-helmet";

const Home = () => {

    return (
        <>
            {/*<Helmet>*/}
            {/*    <meta charSet="utf-8" />*/}
            {/*    /!*<title>My Home</title>*!/*/}
            {/*    <meta data-react-helmet="true" name="title"*/}
            {/*          content="Contact us"/>*/}
            {/*    <link rel="canonical" href="https://hezamobile.com/home" />*/}
            {/*</Helmet>*/}

            <HomeHeader/>
            <HomeHeroSection/>
            {/*<HomeAboutArea/>*/}
            <HomeServices/>
            {/*<HomeOurTeam/>*/}
            {/*<HomeFact/>*/}
            {/*<HomePricing/>*/}
            {/*<HomeCta/>*/}
            {/*<HomeBlogs/>*/}
            {/*<HomeFooter/>*/}
            <Footer/>
        </>
    );
};

export default Home;

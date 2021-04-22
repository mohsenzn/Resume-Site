import React from 'react';
import Helmet from '../components/common/Helmet'
import Navbar from '../components/layouts/Navbar'
import Hero from '../components/Section/Hero'
import About from '../components/Section/about'
import Service from '../components/Section/Services'
import Portfolio from '../components/Section/Portfolio'
import Blog from '../components/Section/Blog'
import Contact from '../components/Section/Contact'
import Footer from '../components/layouts/Footer'
import ScrollToUp from '../components/elements/ScrollToup'

const Home = () => {
    return (
        <>
            <div className="active-dark"> 
                <Helmet pageTitle="Portfolio Landing"/>
                <Navbar homeLink="/" logo="symbol-dark" color="color-black"/>
                <Hero/>
                <About/>
                <Service/>
                <Portfolio/>
                <Blog/>
                <Contact/>
                <Footer/>
                <ScrollToUp/>
            </div>
        </>
    );
}

export default Home;

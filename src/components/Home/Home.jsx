import React from 'react';
import CallToAction from '../CallToAction/CallToAction';

import Hero from '../Hero/Hero';
import HomePageGallery from '../HomePageGallery/HomePageGallery';


import OurServices from '../OurServices/OurServices';





const Home = () => {
    return (
        <div>
    
        <Hero></Hero>
        <OurServices></OurServices>
        <HomePageGallery></HomePageGallery>
      
        <CallToAction></CallToAction>
       
        
        </div>
    );
};

export default Home;
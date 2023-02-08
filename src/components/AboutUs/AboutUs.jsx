import React, { useContext } from 'react';
import { MyContext } from '../../App';
import AboutUsDetails from '../AboutUsDetails/AboutUsDetails';
import PageHero from '../PageHero/PageHero';
import Profile from '../Profile/Profile';

const AboutUs = () => {
    const [,,allPageHero] = useContext(MyContext);
   

    return (
        <div>
            <PageHero pageHero={allPageHero[0]}></PageHero>
            <AboutUsDetails></AboutUsDetails>
            <Profile></Profile>
        </div>
    );
};

export default AboutUs;
import React, { useContext } from 'react';
import { MyContext } from '../../App';
import AboutUsDetails from '../AboutUsDetails/AboutUsDetails';
import PageHero from '../PageHero/PageHero';

const AboutUs = () => {
  const [, , allPageHero] = useContext(MyContext);

  return (
    <div>
      <PageHero pageHero={allPageHero[0]}></PageHero>
      <AboutUsDetails></AboutUsDetails>
    </div>
  );
};

export default AboutUs;

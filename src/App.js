import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home/Home';

import Footer from './components/Footer/Footer';
import { createContext } from 'react';
import Contact from './components/Contact/Contact';
import ImageGallery from './components/ImageGallery/ImageGallery';
import AboutUs from './components/AboutUs/AboutUs';
import galleryAllImages from './utilities/image-gallery/imageGallery.json';
import serviceCategory from './utilities/service-category/serviceCategory.json';
import contactInformations from './utilities/contact-information/contactInformation.json';
import allPageHero from './utilities/page-hero/pageHero.json';
import Menubar from './components/Menubar/Menubar';
import stoneGallery from './utilities/home-page-gallery/stoneGallery.json';

import metalGallery from './utilities/home-page-gallery/metalGallery.json';
import pearlGallery from './utilities/home-page-gallery/pearlGallery.json';
import latherGallery from './utilities/home-page-gallery/latherGallery.json';
import shuffle from './utilities/myFunction';



export const MyContext = createContext();

function App() {

  const imageGallery = shuffle(galleryAllImages);



  return (
    <MyContext.Provider
      value={
        [
          serviceCategory,
          contactInformations,
          allPageHero,
          imageGallery,
          stoneGallery,
          metalGallery,
          pearlGallery,
          latherGallery
        ]
      }
    >
      <Router>


        <Menubar></Menubar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </MyContext.Provider>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import { createContext } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Menubar from "./components/Menubar/Menubar";
import contactInformations from "./utilities/contact-information/contactInformation.json";
import stoneGallery from "./utilities/home-page-gallery/stoneGallery.json";
import galleryAllImages from "./utilities/image-gallery/imageGallery.json";
import allPageHero from "./utilities/page-hero/pageHero.json";
import serviceCategory from "./utilities/service-category/serviceCategory.json";

import ScrollToTop from "./components/ScrollToTop";
import latherGallery from "./utilities/home-page-gallery/latherGallery.json";
import metalGallery from "./utilities/home-page-gallery/metalGallery.json";
import pearlGallery from "./utilities/home-page-gallery/pearlGallery.json";
import shuffle from "./utilities/myFunction";

export const MyContext = createContext();

function App() {
  const imageGallery = shuffle(galleryAllImages);

  return (
    <MyContext.Provider
      value={[
        serviceCategory,
        contactInformations,
        allPageHero,
        imageGallery,
        stoneGallery,
        metalGallery,
        pearlGallery,
        latherGallery,
      ]}
    >
      <Router>
        <ScrollToTop/>
        <Menubar></Menubar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </MyContext.Provider>
  );
}

export default App;

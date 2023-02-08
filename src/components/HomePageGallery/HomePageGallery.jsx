import React, { useContext } from 'react';
import { MyContext } from '../../App';
import HomePageGallerySection from '../HomePageGallerySection/HomePageGallerySection';



const HomePageGallery = () => {
    const [,,,,stoneGallery,metalGallery,pearlGallery,latherGallery] = useContext(MyContext);
    
   
    return (
        <div>
           <HomePageGallerySection homePageGallery={stoneGallery}></HomePageGallerySection>
           <HomePageGallerySection homePageGallery={metalGallery}></HomePageGallerySection>
           <HomePageGallerySection homePageGallery={pearlGallery}></HomePageGallerySection>
           <HomePageGallerySection homePageGallery={latherGallery}></HomePageGallerySection>
        </div>
    );
};

export default HomePageGallery;


import React, { useContext } from 'react';
import { MyContext } from '../../App';
import ImageGalleryDetails from '../ImageGalleryDetails/ImageGalleryDetails';
import PageHero from '../PageHero/PageHero';


const ImageGallery = () => {
    const [,,pageHero] = useContext(MyContext);
    return (
        <div>
            <PageHero pageHero={pageHero[2]}></PageHero>
            <ImageGalleryDetails></ImageGalleryDetails>
        </div>
    );
};

export default ImageGallery;
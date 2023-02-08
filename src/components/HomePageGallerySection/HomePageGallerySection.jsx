import React from 'react';
import '../../stylesheet.css';
import shuffle from '../../utilities/myFunction';
import GalleryImage from '../GalleryImage/GalleryImage';




const HomePageGallerySection = (props) => {
   
const homePageGallery = props.homePageGallery[0];
const {title,description,idName,photo} = homePageGallery;
let images = shuffle(photo);
images = images.slice(0,3);

   

 
    return (
        <section id={idName} className="bg-light">
        <div className="container">
            <div className="row justify-content-center text-center section-heading">
                <div className="col-md-8">
                    <h3>{title}</h3>
                    <div className="hline mt-1 mb-3">
                        <hr/>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <div className="row  stone-gallery gallery g-4">
                {
                    images.map((image, index) =><GalleryImage image={image} key={index}></GalleryImage>)
                }

            </div>
            <div className="gallery-button mt-4 text-center">
                <a href="/image-gallery" className="btn btn-brand">SEE OUR ALL WORKS</a>
            </div>
        </div>
    </section>
    );
};

export default HomePageGallerySection;
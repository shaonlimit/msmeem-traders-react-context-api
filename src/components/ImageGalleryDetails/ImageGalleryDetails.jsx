import React, { useContext } from 'react';
import { MyContext } from '../../App';
import '../../stylesheet.css';
import GalleryImage from '../GalleryImage/GalleryImage';



const ImageGalleryDetails = () => {
    const [,,,imageGallery] = useContext(MyContext);
   
 
  
   

    return (
        <section id="imagegallery" className="bg-light">
        <div className="container">
            <div className="row justify-content-center text-center section-heading">
                <div className="col-md-8">
                    <h3>Image gallery</h3>
                    <div className="hline mt-1 mb-3">
                        <hr/>
                    </div>
                    <p>Check out our all samples</p>
                </div>
            </div>
            <div className="row  stone-gallery gallery g-4 ">
                
                    {
                        imageGallery.map((image,index)=><GalleryImage image={image} key={index}></GalleryImage>)
                    }

            </div>
           
        </div>
    </section>
    );
};

export default ImageGalleryDetails;
import React from "react";
import "../../stylesheet.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryImage = (props) => {
 const {img} = props.image;


  return (
    <div className="col-md-4">
      <div className="gallery-image">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href={require(`../../images/image-gallery/${img}`)} target="-blank">
            <img src={require(`../../images/image-gallery/${img}`)} alt="" className="img-fluid" />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default GalleryImage;

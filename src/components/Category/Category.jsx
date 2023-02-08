import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../stylesheet.css';


const Category = (props) => {

    const {img,title,idName} = props.service;

    return (
        <div className="col-md-6 col-lg-3" >
                    
                     
                       <AnchorLink href={`#${idName}`}>
                       <div className="services-content">
                           <img src={require(`../../images/service-category/${img}`)} alt="" className='img-fluid' />
                            <div className="img-content">
                                <h4>{title}</h4>
                            </div>
                        </div>
                       </AnchorLink>
                       
                      
                    
        </div>
                
                
                
    );
};

export default Category;
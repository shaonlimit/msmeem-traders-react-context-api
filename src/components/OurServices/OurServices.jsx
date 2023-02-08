import React, { useContext } from 'react';
import Category from '../Category/Category';
import '../../stylesheet.css';
import { MyContext } from '../../App';



const OurServices = () => {
    
   
  const [serviceCategory] = useContext(MyContext);


    return (
        
    <section id="services">
        <div className="container">
            <div className="row justify-content-center text-center section-heading">
                <div className="col-md-8">
                    <h3>our services</h3>
                    <div className="hline mt-1 mb-3">
                        <hr/>
                    </div>
                    <p>We manufacture all kinds of garments accessories, stone, metalstickers and rivet pearl, lather
                        patch, belt etc.</p>
                </div>
            </div>
            <div className="row services g-4">

            {
                serviceCategory.map((service,index)=><Category service={service} key={index}></Category>)
            }
            </div>
    </div>
    </section>
        
    );
};

export default OurServices;
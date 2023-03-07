import React from 'react';
import babul from '../../images/profile-photo/babul.jpg';
import khokon from '../../images/profile-photo/khokon.jpg';
import Profile from './Profile';

const AboutUsDetails = () => {
  const profileInfo = [
    {
      img: babul,
      name: 'Ashek Elahi (Babul)',
      designation: 'CEO',
      email: 'meemtraders2002@gmail.com',
      phone: '+88 01748-529368',
      fb: 'https://www.facebook.com/msmeemtraders/',
      linkedin: '"https://www.linkedin.com/in/khokon-iqbal-b72335188'
    },
    {
      img: khokon,
      name: 'Iqbal Hossain Khokon',
      designation: 'Marketing Manager',
      email: 'khokoniqbal2002@gmail.com',
      phone: '+88 01675-550814',
      fb: 'https://www.facebook.com/khokon.ahmed.1088',
      linkedin: '"https://www.linkedin.com/in/khokon-iqbal-b72335188'
    }
]
  return (
    <section id='about-us-details' className='bg-light'>
      <div className='container'>
        <div className='row justify-content-center text-center section-heading'>
          <div className='col-md-8'>
            <h3>About Us</h3>
            <div className='hline mt-1 mb-3'>
              <hr />
            </div>
            <p>We are just what we say</p>
          </div>
        </div>
      </div>
      <div className='container' id='about-us'>
        <div className='row'>
          <div className='col-md-12'>
            <p className='about-us-description p-3'>
              We are approaching you with a view to introducing ourselves as one
              of the manufacturer and suppliers of wide range of Garment
              Accessories products, and sincerely hope we can have the chance to
              co-operate with you on the basis of mutual benefit.
              <br /> <br />
              Focusing on Quality and service are our developing roots; we are
              not only concern about prices, but also ensure high quality
              products and warmhearted services to develop mutual benefit on
              cooperation with all clients. We assure you come to us once and
              will never go anywhere else.
              <br />
              <br />
              Don't hesitate to get in touch with me over the phone about our production items, like hot fixed, stone metal stickers, rivet pearl and rivet stone. Our products are metal test pass and the OEKO-TEX standard. We give 10 times wash guarantee. To know about our product's capacity please contact us. You will get a nice support from us.
             
             
            </p>
          </div>
          
        </div>
      </div>
      <div className="container person-details" id='person-details'>
        <div className="row text-center gap-5 justify-content-center">
          
         {
          profileInfo.map((item,index)=> <Profile key={index} profile={item}/>)
         }
             
          
         
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetails;

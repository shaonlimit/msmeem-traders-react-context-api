import React from 'react';
import '../../Contact.css';

const PageHero = (props) => {
  const { title, subTitle } = props.pageHero;
  return (
    <div id='hero' className='d-flex align-items-center'>
      <div className='container text-center hero'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1 className='text-white' style={{ fontSize: '60px' }}>
              {title}
            </h1>
          </div>
          <div className='col-md-6'>
            <p className='text-white mb-4'>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;

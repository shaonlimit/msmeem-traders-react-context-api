import React from 'react';
import '../../stylesheet.css';

const Hero = () => {
    return (
        <div id="hero" className="d-flex align-items-center">
        <div className="container text-center hero">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-white" style={{'fontSize':'60px'}}>m/s meem traders</h1>
                </div>
                <div className="col-md-6">
                    <p className="text-white mb-4">We manufacture all kinds of garments accessories, stone, metal stickers
                        and rivet pearl, lather patch, belt etc.</p>
                    <a href="/contact" className="btn btn-brand">CONTACT</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Contact.css';

const ContactFormMap = () => {
    return (
        <section id="contact-form-map" className=" bg-light">
        <div className="container">
            <div className="row justify-content-center text-center section-heading">
                <div className="col-md-8">
                    <h3>get in touch with us</h3>
                    <div className="hline mt-1">
                        <hr/>
                    </div>
                    
                </div>
            </div>
            <div className="row  g-4 contact-form ">
                <div className="col-md-6 form-input ">
                    <form action="">
                        <div className="row  g-4">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                            <input type="email" className="form-control" placeholder="Your E-mail"/>
                            <textarea name="" id="" cols="65" rows="5" placeholder="Message" className="form-control"></textarea>
                           
                            <Link to='/contact' className="btn btn-brand mt-4 mb-4">SEND MESSAGE</Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 offset-md-1 map">
                    <iframe title="M/S Meem Traders Location" src="https://maps.google.com/maps?q=aburtek&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>

                </div>
            </div>
        </div>
    </section>
    );
};

export default ContactFormMap;
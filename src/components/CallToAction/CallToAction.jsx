import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheet.css';

const CallToAction = () => {
    return (
        <section id="call-to-action">
        <div className="container call-to-action">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center call-to-action-content">
                    <hr/>
                    <h1 className="text-white">We Will Assist You If You Have Any Queries</h1>
                    <hr/>
                    <Link to="/contact" className="btn btn-brand">Contact</Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default CallToAction;
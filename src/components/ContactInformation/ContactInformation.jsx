import React from 'react';
import '../../Contact.css';


const ContactInformation = (props) => {
   const {title,contact1,contact2,icon} = props.contact;
    return (
        
            <div className="col-md-4">
                    <div className="contact-content">
                        <div className="contact-icon mx-auto mb-4">
                            <i className={icon}></i>
                        </div>
                        <h4>{title}</h4>
                        <ul className="list-unstyled mb-0">
                            <li>{contact1}</li>
                            <li>{contact2}</li>
                        </ul>
                    </div>
                </div>
                

        
    );
};

export default ContactInformation;
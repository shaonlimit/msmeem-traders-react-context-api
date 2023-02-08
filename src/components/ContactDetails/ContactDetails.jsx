import React, { useContext } from 'react';
import ContactInformation from '../ContactInformation/ContactInformation';
import '../../Contact.css';
import { MyContext } from '../../App';

const ContactDetails = () => {
    const [,contactInformations] = useContext(MyContext);
    return (
        <section id="contact">
        <div className="container">
            <div className="row justify-content-center text-center section-heading">
                <div className="col-md-8" >
                    <h3>contact details</h3>
                    <div className="hline mt-1">
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="row contact  g-4 text-break text-center justify-content-center" >
               {
                contactInformations.map((contact,index)=><ContactInformation contact={contact} key={index}></ContactInformation>)
               }


            </div>
        </div>
    </section>
    );
};

export default ContactDetails;
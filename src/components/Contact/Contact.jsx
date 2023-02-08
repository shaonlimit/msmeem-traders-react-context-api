import React, { useContext } from 'react';
import { MyContext } from '../../App';
import '../../Contact.css';
import ContactDetails from '../ContactDetails/ContactDetails';
import ContactFormMap from '../ContactFormMap/ContactFormMap';
import PageHero from '../PageHero/PageHero';


const Contact = () => {
    const [,,allPageHero] = useContext(MyContext);
    return (
        <div>
            <PageHero pageHero={allPageHero[1]}></PageHero>
            <ContactDetails></ContactDetails>
            <ContactFormMap></ContactFormMap>
        </div>
    );
};

export default Contact;
import React from 'react'
import './Contact.css'
import LampScreen from "../../assets/images/Lamp/LampScreen-1.png";
import LampBg from "../../assets/images/Lamp/lampBG-1.png";

const Contact = () => {
    return <>

        <div className="lamp">
            <input type="checkbox" id="lamp-toggle" className="visually-hidden" />
            <img src={LampBg} alt="" className='LampBg' />
            <img src={LampScreen} alt="" className='LampScreen' />
            <label htmlFor="lamp-toggle" className='Lamplable'>
                <img src={LampScreen} alt="" className='LampMultiply' />
                <h1 className='contact-heading'>Get in Touch</h1>
                <a href="mailto:priteshsarva9825@gmail.com" className='contact-link'>priteshsarva9825@gmail.com</a>
                <br />
                <a href="tel:+919408386083" className='contact-link bottom-link'>+91 94083 86083</a>
            </label>

        </div>
    </>
}

export default Contact
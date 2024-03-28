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
                <div className="lowerbottom">
                    <a href="mailto:priteshsarva9825@gmail.com" >priteshsarva9825@gmail.com</a>
                    <br />
                    <a href="tel:+919408386083" >+91 94083 86083</a><br/>
                    <a href="https://drive.google.com/file/d/19CWso1s8fBerKVk0v4S-zP0iZp-Bf2Yl/view?usp=sharing" target='blank' className='underline'>View Resume</a>
                </div>
            </label>

        </div>
    </>
}

export default Contact
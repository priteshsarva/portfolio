import React from 'react'
import './Contact.css'
import LampScreen from "../../assets/images/Lamp/LampScreen.png";
import LampBg from "../../assets/images/Lamp/lampBG.png";
import LampMultiply from "../../assets/images/Lamp/LampMultiply.png";

const Contact = () => {
    return <>
        <div className="lamp">
            <img src={LampBg} alt="" />
            <img src={LampScreen} alt="" />
            <img src={LampMultiply} alt="" />
        </div>
    </>
}

export default Contact
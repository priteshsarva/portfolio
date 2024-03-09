import React, { useContext, useEffect } from 'react'
import './TubeLight.css'
import { LightContext } from '../../context/light';

const TubeLightBG = () => {
    const lightAffect = useContext(LightContext)
    var tubelightglare, lightfill;

    useEffect(() => {
        lightfill = document.querySelector('.lightfill')
        tubelightglare = document.querySelector('.tubelightglare')
        tubelightglare.style.opacity = 1;
        lightfill.style.opacity = 1;
        idle()

    },)

    const idle = () => {
        // console.log(lightAffect.lightStatus);
        if (lightAffect.lightStatus === true) {
            tubelightglare.style.opacity = 1;
            lightfill.style.opacity = 1;

        } else {
            tubelightglare.style.opacity = 0;
            lightfill.style.opacity = 0;
        }
    }

    return <>
        <div className="lightfill "><span></span></div>
        <div className="tubelightglare "><span></span><span></span></div>
    </>
}

export default TubeLightBG

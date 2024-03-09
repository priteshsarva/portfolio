import React, { useContext, useEffect } from 'react'
import './TubeLight.css'
import { LightContext } from '../../context/light';

const TubeLight = () => {

    const lightAffect = useContext(LightContext)
   

    useEffect(() => {
        var light = document.querySelector('#light')
        // tubelightglare = document.querySelector('.tubelightglare')
        light.checked = true
        // tubelightglare.style.opacity = 1;
        idle()
    }, [])
   
    const idle = () => {
      var light = document.querySelector('#light')
        let time;
        const resetTimer = () => {
            clearTimeout(time)
            time = setTimeout(lightoff, 5000)
        }
        const lightoff = () => {
            light.checked = false;
            lightAffect.setlightStatus(false)
            // tubelightglare.style.opacity = 0;
            // console.log('lightsoff');
        }
        document.addEventListener('scroll', resetTimer, true);
        document.addEventListener('keypress', resetTimer, true);
        document.addEventListener('click', resetTimer, true);
        document.addEventListener('touchstart', resetTimer, true);
        document.addEventListener('mousedown', resetTimer, true);
        document.addEventListener('mousemove', resetTimer, true);
        document.addEventListener('load', resetTimer, true);
        window.addEventListener('load', resetTimer, true);
    }

    const changeLight = () => {
        var  light = document.querySelector('#light')
        if (light.checked === true) {
            lightAffect.setlightStatus(true)
            // tubelightglare.style.opacity = 1;
            // console.log('false part');
        } else {

            lightAffect.setlightStatus(false)
            // tubelightglare.style.opacity = 0;
            // console.log('true part');
        }
    }






    return (
        <>
            {/* <div className="lightfill "><span></span></div>
            <div className="tubelightglare "><span></span><span></span></div> */}
            <div className="place">
                <label className="container" >
                    <input type="checkbox" id='light' onChange={changeLight} />
                    <div className="tubelight"></div>
                </label>
            </div>
        </>
    )
}

export default TubeLight
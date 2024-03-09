import React, { useContext, useEffect } from 'react'
import './Cursor.css'
import { LightContext } from '../../context/light'

const Cursor = () => {

  const lightAffect = useContext(LightContext)
  var cursorM, cursorS, background
  useEffect(() => {
    cursorM = document.querySelector(".cursor")
    cursorS = document.querySelector(".cursor-light")
    background = document.querySelector(".background-cursor")
    if (lightAffect.lightStatus === true) {
      cursorM.style = `opacity:0`
      cursorS.style = `opacity:0`
      background.style = `opacity:0`
      // console.log(lightAffect.lightStatus);
    }
    cursors()
  },)


  const cursors = () => {

    // console.log('fired');
    document.addEventListener('mousemove', (e) => {

      if (lightAffect.lightStatus === true) {
        cursorM.style = `opacity:0`
        cursorS.style = `opacity:0`
        background.style = `opacity:0`
        // console.log(lightAffect.lightStatus);

      } else if (lightAffect.lightStatus === false) {

        // console.log('condition trigerred');
        cursorM.style = `transform: translate(${e.clientX - 50}px , ${e.clientY - 50}px)`
        cursorS.style = `transform: translate(${e.clientX - 70}px , ${e.clientY - 70}px)`
        background.style = `mask-image: radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent, black, black, black);
          -webkit-mask-image:radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent, black, black, black);`
        // console.log(lightAffect.lightStatus);
      }


    })


  }



  return <>

    <div className="background-cursor"></div>
    <div className="cursor"></div>
    <div className="cursor-light"></div>

  </>

}

export default Cursor
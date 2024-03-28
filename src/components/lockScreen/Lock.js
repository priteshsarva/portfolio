import React from 'react'
import './Lock.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Lock = (props) => {


  useGSAP(() => {
    gsap.to(".lock", {
      duration: 3,
      ease: "power3.out",
      y: '-120vh',
      delay: 5,
    })
  })

  setTimeout(() => {
    props.add(false)
  }, 5000);

  return (
    <>
      <div className="lock">
        <h1>Please use desktop device for better experience</h1>
      </div>
    </>
  )
}

export default Lock

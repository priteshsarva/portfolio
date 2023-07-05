import React, { useEffect } from 'react'
import { gsap, Power4 } from "gsap";

import './ParallaxCSS.css'
import Cloud1 from './elements/Cloud1'
import Cloud2 from './elements/Cloud2'
import Cloud3 from './elements/Cloud3'
import SvgMounte3 from './elements/Mounte3';
import Land from './elements/Land';
import Sun from './elements/Sun';
import RightCactus from './elements/RightCactus'
import LeftRockFront from "./elements/LeftRockFront";
import LeftBigRockBackGrass from "./elements/LeftBigRockBackGrass";
import LeftSmallRockGrass from "./elements/LeftSmallRockGrass";
import RightBackGrass from "./elements/RightBackGrass";
import RightBigCactus from "./elements/RightBigCactus";
import RightFrontRock from "./elements/RightFrontRock";
import RightRockCenterCactus from "./elements/RightRockCenterCactus";
import RightRockCornerCactus from "./elements/RightRockCornerCactus";
import LeftBigRock from "./elements/LeftBigRock";
import LeftSmallRock from "./elements/LeftSmallRock";


const ParallaxPage = () => {

    window.addEventListener("load", (e) => {
        let clientY = 0, clientX = 0
        let parallax_el = document.querySelectorAll(".parallax")
        console.log(parallax_el);

        var tl = gsap.timeline();

        tl.fromTo(parallax_el[0],
            { scale: 250, zIndex: 99 },
            { duration: 3, scale: 1, zIndex: 0, ease: Power4.easeOut , delay: 1 })
            .fromTo(parallax_el[1],
                { scale: 100, opacity: 0, x: 50000 },
                { duration: 2, opacity: 1, x: 0, scale: 1, ease: Power4.easeOut }, "1.5")
            .fromTo(parallax_el[2],
                { scale: 100, opacity: 0, x: -50000 },
                { duration: 2, opacity: 1, x: 0, scale: 1, ease: Power4.easeOut }, "1.5")
            .fromTo(parallax_el[3],
                { scale: 100, opacity: 0, y: +50000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.5")
            .fromTo(parallax_el[4],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.5")
            .fromTo(parallax_el[5],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[6],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[7],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[8],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[9],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[10],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[11],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[12],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[13],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[14],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[15],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")
            .fromTo(parallax_el[16],
                { scale: 10, opacity: 0, y: +5000 },
                { duration: 2, opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, "1.7")


        window.addEventListener("mousemove", (e) => {
            if (tl.isActive()) {
                return
            }
            clientY = e.clientY - window.innerHeight / 2
            clientX = e.clientX - window.innerWidth / 2
            parallax_el.forEach((el) => {


                el.style.transform = `translateX(calc(-50% + ${clientX * el.dataset.distance / 2}px)) translateY(calc(-50% + ${clientY * el.dataset.distance / 2}px))`

                el.style.transform = `translateX(calc(-50% + ${clientX * el.dataset.distance / 2}px)) translateY(calc(-50% + ${clientY * el.dataset.distance / 2}px))`
            })
        })

    })



    return (
        <>
            <div>
                <div className="background">
                    <Sun data-distance="0.001" />
                    <Cloud1 data-distance="0.01" />
                    <Cloud2 data-distance="0.015" />
                    <Cloud3 data-distance="0.017" />
                    <SvgMounte3 data-distance="0.1813" />
                    <Land data-distance="0.1684" />
                    <RightCactus data-distance="0.1426" />
                    <RightBigCactus data-distance="0.1297" />
                    <RightBackGrass data-distance="0.1168" />
                    <RightFrontRock data-distance="0.1039" />
                    <RightRockCornerCactus data-distance="0.091" />
                    <RightRockCenterCactus data-distance="0.0781" />
                    <LeftRockFront data-distance="0.0652" />
                    <LeftSmallRockGrass data-distance="0.0523" />
                    <LeftSmallRock data-distance="0.0394" />
                    <LeftBigRockBackGrass data-distance="0.0265" />
                    <LeftBigRock data-distance="0.0136" />
                </div>
            </div>
        </>
    )
}

export default ParallaxPage
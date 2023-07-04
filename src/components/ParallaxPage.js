import React from 'react'
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
        console.log(e);
        let parallax_el = document.querySelectorAll(".parallax")
        console.log(parallax_el);
        let clientY = 0, clientX = 0
        window.addEventListener("mousemove", (e) => {
            clientY = e.clientY - window.innerHeight / 2
            clientX = e.clientX - window.innerWidth / 2
             console.log(clientX,clientY);
            parallax_el.forEach((el) => {
                el.style.transform = `translateX(-50% + ${clientX}px) translateY(-50% + ${clientY}px)`
                // console.log(`translateX(-50% + ${clientX}px) translateY(-50% + ${clientY}px)`);
            })
        })

    })



    return (
        <>
            <div>
                <div className="background">
                    <Cloud1 />
                    <Cloud2 />
                    <Cloud3 />
                    <SvgMounte3 />
                    <Land />
                    <Sun />
                    <RightCactus />
                    <RightBigCactus />
                    <RightBackGrass />
                    <RightFrontRock />
                    <RightRockCornerCactus />
                    <RightRockCenterCactus />
                    <LeftRockFront />
                    <LeftSmallRockGrass />
                    <LeftSmallRock />
                    <LeftBigRockBackGrass />
                    <LeftBigRock />

                </div>
            </div>
        </>
    )
}

export default ParallaxPage
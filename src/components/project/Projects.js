import React from 'react'

import arrows from "../../assets/images/arrows.png"
import './Projects.css'
import SiteCard from '../siteCard/SiteCard'
const Projects = () => {
    return <>
        <div className="projects">
            
                <h1 className='small-display'><span>Some of my Projets</span></h1>
           
            <div className="middle">
                <div className="center">
                    <div className="center-top">
                        <img src={arrows} alt="" />
                        <img src={arrows} alt="" /></div>
                    <h1 className='big-display'>Some<br />of<br />my<br />Projets</h1>
                    <div className="center-bottom">
                        <img src={arrows} alt="" />
                        <img src={arrows} alt="" />
                    </div>
                </div>
            </div>
            <div className="top">
                <SiteCard link='http://timeskeepers.in/' title="timeskeepers" />
                <SiteCard link='https://solestyle1.netlify.app/' title="solestyle" />
            </div>
            <div className="bottom">
                <SiteCard link='https://aquawatch1.netlify.app/' title="aquawatch" />
                <SiteCard link='https://www.kicksmania.co.in/' title="kicksmania" />
            </div>

        </div>
    </>
}

export default Projects
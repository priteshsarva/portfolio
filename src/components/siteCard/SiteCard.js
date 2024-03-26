import React from 'react'
import './SiteCard.css'
import test from "../../assets/images/test.png"

const SiteCard = (props) => {
    return <>

        <a href={props.link} target='blank'>
            <div className="site-card" >
                {/* <img src={test} alt="" /> */}
                <iframe
                    src={props.link}
                ></iframe>
                <h2>{props.title}</h2>
            </div>
        </a>
    </>
}

export default SiteCard
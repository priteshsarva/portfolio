import React from 'react'
import './SiteCard.css'
import test from "../../assets/images/test.png"

const SiteCard = () => {
    return <>
        <div className="site-card">
            <img src={test} alt="" />
            <h2>Test Website</h2>
        </div>
    </>
}

export default SiteCard
import React, { useState } from 'react'

const Cloud3 = () => {
    const [cls1, setCls1] = useState({
        isolation: 'isolate',
    })
    const [cls2, setCls2] = useState({
        fill: '#e8e8fe',
        mixBlendMode: 'soft-light'
    })

    return (
        <div className='parallax Cloud3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690.81 202.13">
                {/* <defs><style>.cls-1{isolation:isolate;}.cls-2{fill:#e8e8fe;mix-blend-mode:soft-light;}</style></defs> */}
                <g classname="cls-1"  style={cls1}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Cloud3">
                    <path classname="cls-2"  style={cls2} d="M0,150.84l99.19-24.55S58.2-16.21,168.36,1.53C191.1,5.14,242.65,19.5,285,97.41c0,0-1.72-90.75,104.36-24.55,0,0-19.75-51.43,33.71-64.91,20.07-5.14,60.45,21.14,75.41,38.76,9.17,10.68,16.91,23.87,16.21,37.71,0,0,32.82-84.17,157,50.54,108,107.4-275.85,53.79-275.85,53.79Z" />
                    <path classname="cls-2"  style={cls2} d="M386,130.06s41.95-46.21,82.6-35.14C509.8,106,593.92,161.83,593.92,161.83Z" />
                    <path classname="cls-2"  style={cls2} d="M300.25,68.76S298,49.83,322.08,50.15s60.37,13.16,73,32.09c12.85,18.94-38.44,33.38-64.65,31.13S300.25,68.76,300.25,68.76Z" />
                    <path classname="cls-2"  style={cls2} d="M109.18,41.57s4.1-37.85,31.4-41S230.7,8.68,253.65,66.81C277.67,124.94,102.83,74,109.18,41.57Z" />
                    <path classname="cls-2"  style={cls2} d="M515.33,93s7.8-37.06,44.74-32.25c37.18,4.81,70.87,33.22,87.35,55.36C664.11,138.25,514.9,133,515.33,93Z" />
                    <path classname="cls-2"  style={cls2} d="M391.88,46.29s4-46.46,47.59-33.91c44.3,12.55,64.26,40.14,62.34,60.53C499.64,93.29,404.37,94.86,391.88,46.29Z" /></g></g></g></g></svg>
        </div>
    )
}

export default Cloud3
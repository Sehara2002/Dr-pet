import React from 'react'
import './css/CSSAboutbnr.css'
import about2 from "../assets/Images/about2.png"
import about3 from "../assets/Images/about3.png"
import about1 from "../assets/Images/about1.png"



function Aboutbanner() {
    return (<div>
        <div className='bannertext1'>It's All</div>
        <div className='bannertext2'>About</div>
        <div className='bannertext3'>Us</div>
        <img className='imgleft' src={about3}/>
        <img className='imgright' src={about2}/>
        <img className='imgmiddle' src={about1}/>
       


    </div>

    )
}

export default Aboutbanner
import React from 'react'
import "./SCSS/servicebanner.scss"
import sb1 from "../assets/Images/sb1.png"
import sb3 from "../assets/Images/sb3.png"


function Servicebanner() {
    return (
        <div className="container-fluid banner">
            <div>
                <h1 className="banner-head-01">Lovely</h1>
                <h1 className="banner-head-02">Services</h1>
                <img src={sb1} className="banner-head-img-01"/>
                <img src={sb3} className="banner-head-img-03"/>
                <img src={sb1} className="banner-head-img-02"/>
            </div>
            <p className="banner-desc">At Dr.Pet, we believe in treating your pets with the same love and care as we do our own. Our approach is personal and compassionate, ensuring your pet receives the best possible care every step of the way. We understand the special bond you share with your furry family members, and our dedicated team is here to support that bond through every stage of their life.</p>
            <p className="banner-desc">From routine check-ups to specialized treatments, we work closely with you to create a tailored healthcare plan that suits your pet’s unique needs. Trust, transparency, and partnership are at the core of our philosophy. Experience the difference that personalized, compassionate veterinary care can make for you and your pet at Dr Pet. For more information or to schedule an appointment, contact us today!</p>
        </div>
    )
}

export default Servicebanner
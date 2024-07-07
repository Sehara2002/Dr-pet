import React from 'react'
import "./CSS/servicecards.css"
import card1 from "../assets/Images/card1.jpg"
import card2 from "../assets/Images/card2.jpg"
import card3 from "../assets/Images/card3.jpg"
import card4 from "../assets/Images/card4.jpg"
import card5 from "../assets/Images/card5.jpg"
import card6 from "../assets/Images/card6.jpg"

function Servicecards() {
    return (
      <div className="Cs">
        <div className="cards">
          <div className="card card-1">
            <img src={card1}/>
            <p>Wellness & Preventative Care</p>
          </div>
          <div className="card card-2">
            <img src={card2}/>
            <p>Dental Care</p>
          </div>
          <div className="card card-3">
            <img src={card3}/>
            <p>Puppy & Kitten Care</p>
          </div>
          <div className="card card-4">
            <img src={card4}/>
            <p>Vaccinations</p>
          </div>
          <div className="card card-5">
            <img src={card5}/>
            <p>Surgery</p>
          </div>
          <div className="card card-6">
            <img src={card6}/>
            <p>Diagnostics</p>
          </div>
        </div>
      </div>
    )
}

export default Servicecards

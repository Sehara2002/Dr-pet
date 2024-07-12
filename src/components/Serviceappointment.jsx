import React from 'react'
import "./CSS/serviceappointment.css"
import sa1 from "../assets/Images/sa1.png"

function Serviceappointment(){
    return(
        <div className='app-main'>
            <div className='app-content'>
                <img src={sa1} className="app-c-img"/>
                <div className="app-c-desc">
                    <h3 className="app-c-desc-option">Register New Pet</h3>
                    <h3 className="app-c-desc-option">Make an Appointment</h3>
                    <h3 className="app-c-desc-option">Contact Our Team</h3>
                </div>
            </div>
        </div>
    )
}

export default Serviceappointment
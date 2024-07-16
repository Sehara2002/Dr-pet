import React from 'react'
import "./SCSS/serviceappointment.scss"
import sa1 from "../assets/Images/sa1.png"
import { Link } from "react-router-dom";

function Serviceappointment(){
    return(
        <div className='app-main'>
            <div className='app-content'>
                <img src={sa1} className="app-c-img"/>
                <div className="app-c-desc">
                    <Link className="app-c-desc-option" to="/">
                        <span className='box'>Register New Pet</span>
                    </Link>
                    <Link className="app-c-desc-option" to="/appointment">
                        <span className='box'>New Appointment</span>
                    </Link>
                    <Link className="app-c-desc-option" to="/contact">
                        <span className='box'>Contact Our Team</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Serviceappointment
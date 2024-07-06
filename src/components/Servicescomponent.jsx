import React from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./SCSS/servicescomponent.scss";
function Servicescomponent() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="block-container">
                        <div className="service-container">
                            24 Hours Emergency Services
                        </div>
                        <div className="line-container"></div>
                        <div className="service-container">
                            Friendly Staff
                        </div>
                        <div className="line-container"></div>
                        <div className="service-container">
                            Well Experienced Doctor
                        </div>
                        <div className="line-container"></div>
                        <div className="service-container">
                            Online Channeling
                        </div>
                        <div className="line-container"></div>
                        <div className="service-container">
                            Dental Services
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicescomponent
import React from 'react'
import "./SCSS/banner.scss"
import backFoot from "../assets/Images/paw.png"
import dog2 from "../assets/Images/dog2.png"
import clinic from "../assets/Images/logo2.png"
function Homebanner() {
    return (
        <div>
            <div className="container-fluid banner-section">
                <img src={backFoot} alt="" className="backround-image"/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="text-boxes-main">
                                        <div className="cap-text text-end">
                                            C
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-boxes">
                                        <div className="line-text">ONNECT</div>
                                        <div className="line-text">ARE</div>
                                        <div className="line-text">URE</div>
                                        <div className="line-text italictext text-center">With</div>
                                        <div className="banner-container-image">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <img src={clinic} alt="" className="clinic-image" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className='clinic-text text-start'>Friendly Clinic</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={dog2} alt="" className="banner-image"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homebanner
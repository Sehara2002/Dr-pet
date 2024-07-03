import React from 'react'
import "./SCSS/banner.scss"
import backFoot from "../assets/Images/paw.png"
function Homebanner() {
    return (
        <div className="banner-div">
            <img src={backFoot} alt="" className="backfootImage" />
            <div className="row">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <div>C</div>
                        </div>
                        <div className="col-sm-6">
                            <div className="phrases"></div>
                            <div className="phrases"></div>
                            <div className="phrases"></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">

                </div>

            </div>
        </div>
    )
}

export default Homebanner
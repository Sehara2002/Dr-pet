
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import phone from "../assets/Images/phone.png";
import leftLogo from "../assets/Images/logo.png";
import rightLogo from "../assets/Images/login.png";

import "../components/SCSS/navbar.scss";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar() {


    const [navState, setNavState] = useState();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="no">
                    <div className="phone-logo">
                        <img src={phone} alt="" />
                    </div>
                    <p className="phoneno">
                        777 344 882 / 11 3 523 675
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="navbar-content">
                    <div className="row">
                        <div className="bounds upper-bound"></div>
                        <div className="col-sm-2 logo">
                            <img src={leftLogo} alt="" />
                        </div>
                        <div className="col-sm-7 navigation-bar">
                            <ul className="navbar-list" >
                                <li className="nav-item"><p className="nav-link-left">Take Me</p><p className="nav-link-right">Home</p></li>
                                <li className="nav-item"><p className="nav-link-left">Its all</p><p className="nav-link-right">About</p></li>
                                <li className="nav-item"><p className="nav-link-left">Lovely</p><p className="nav-link-right"> Service</p></li>
                                <li className="nav-item"><p className="nav-link-left">Make</p><p className="nav-link-right">Contact</p></li>
                                <li className="nav-item"><p className="nav-link-left">Tasty</p><p className="nav-link-right">Treats</p></li>
                                <li className="nav-item"><p className="nav-link-left">Make Your</p><p className="nav-link-right">Appointment</p></li>
                                <li className="nav-item"><p className="nav-link-left">Meet Our</p><p className="nav-link-right">Doctors</p></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 right-logo">
                            <FaUserCircle className="user-logo" />
                            <img src={rightLogo} alt="" className="right-logo-img"/>
                        </div>
                        <div className="bounds lower-bound"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
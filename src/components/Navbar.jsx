
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import phone from "../assets/Images/phone.png";
import leftLogo from "../assets/Images/logo.png";
import "../components/SCSS/navbar.scss";
import { FaUser, FaUserCircle } from "react-icons/fa";

function Navbar() {
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
                        <div className="col-sm-3 logo">
                            <img src={leftLogo} alt="" />
                        </div>
                        <div className="col-sm-6 navigation-bar"></div>
                        <div className="col-sm-3 right-logo">
                            <FaUserCircle />
                        </div>
                        <div className="bounds lower-bound"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
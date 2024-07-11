import "./SCSS/facilities.scss"
import eclipse from "../assets/Images/Ellipse.png"
import rabbit from "../assets/Images/rabbit.png"

function Facillitiescomponent() {
    return (
        <div className="facility-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={eclipse} alt="" className="round1" />
                        <img src={rabbit} alt="" className="rabbit-image" />
                    </div>
                    <div className="col-sm-6">
                        <div className="container">
                            <div className="facility-container-title">
                            Best Care Equipped With
                            </div>

                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Facillitiescomponent
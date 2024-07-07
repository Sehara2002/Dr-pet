import "./SCSS/aboutuscomponent.scss"
import dogImage from "../assets/Images/background2.png"
function Aboutuscomponent() {
  return (
    <div className="aboutus-component">
      <img src={dogImage} alt="" className="about-image"/>
      <div className="container-fluid about-section">
        <p className="heading-text">Hello.....!</p>
        <p className="heading-text2">
        We Are Sri Lanka's Foremost Full-Service Veterinary Hospital
        </p>
        <p className="description-text">
        Founded in 1996 by three leading veterinarians –Dr. Nalinika Obeysekare,Dr. Janaki Collure and Dr. Vipuli Kulasekera – Pet Vet Clinic boasts of an enviable legacy of superlative care, founded on our unique multi-doctor model – and a sheer love for animals. We strive to continually upgrade our knowledge base and broaden our range of services for you and your pet.
        </p>
      </div>
      <div className="container-fluid service-summary">
        <div className="container summary-container">
          
        </div>
      </div>
      <div className="container-fluid service-section">

      </div>
    </div>
  )
}

export default Aboutuscomponent
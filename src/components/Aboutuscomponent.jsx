import "./SCSS/aboutuscomponent.scss"
import dogImage from "../assets/Images/background2.png"
import card1 from "../assets/Images/cardimage1.png"
import card2 from "../assets/Images/cardimage2.png"
import card3 from "../assets/Images/cardimage3.png"
import backFoot from "../assets/Images/paw.png"
function Aboutuscomponent() {
  return (
    <div className="aboutus-component">
      <img src={dogImage} alt="" className="about-image" />
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
          <div className="row">
            <div className="col-sm-6">
              <p className="summary1">365</p>
            </div>
            <div className="col-sm-6">
              <p className="summary2">24hr</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="summary2 row2">Weekdays & Weekends</p>
            </div>
            <div className="col-sm-6">
              <p className="summary1 row2">Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid service-section justify-content-center">
        <div className="title">
          Best Care For Your Best Friend
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="card-container text-center">
              <div class="card">
                <img src={card1} alt="" className="card-image" />
                <div class="card-body">
                  <h3 class="card-title">OPD</h3>
                  <p class="card-text text1">Our OPD is functioning from 8.00am to 8.00pm to give you the best veterinary careand friendly service.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card-container text-center">
              <div class="card">
                <img src={card2} alt="" className="card-image" />
                <div class="card-body">
                  <h3 class="card-title">SURGERY</h3>
                  <p class="card-text text2">Our surgery theater is fully equipped and capable of performing variety of surgeries for your canine and feline friends.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card-container text-center">
              <div class="card">
                <img src={card3} alt="" className="card-image" />
                <div class="card-body">
                  <h3 class="card-title">MOBILE VETERINARY SERVICE</h3>
                  <p class="card-text">Are you finding it difficult to take your pet to the vet? Now you can get your pets treatments and vaccination done at home from our professional team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Aboutuscomponent
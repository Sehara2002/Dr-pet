import React from 'react'
import "../../components/SCSS/services.scss"
import Navbar from '../../components/Navbar'
import Servicebanner from "../../components/Servicebanner"
import Servicecards from '../../components/Servicecards'
import Serviceappointment from '../../components/Serviceappointment'

function Servicespage() {
  return (
    <div className="servicespage-maincontainer">
         <Navbar/>
         <Servicebanner/>
         <Servicecards/>
         <Serviceappointment/>
    </div>
  )
}

export default Servicespage


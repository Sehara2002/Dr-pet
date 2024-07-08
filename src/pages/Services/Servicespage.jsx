import React from 'react'
import "../../components/CSS/services.css"
import Navbar from '../../components/Navbar'
import Servicebanner from "../../components/Servicebanner"
import Servicecards from '../../components/Servicecards'

function Servicespage() {
  return (
    <div className="servicespage-maincontainer">
         <Navbar/>
         <Servicebanner/>
         <Servicecards/>
    </div>
  )
}

export default Servicespage


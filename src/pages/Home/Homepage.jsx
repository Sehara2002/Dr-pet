import React from 'react'
import Navbar from '../../components/Navbar'
import "../../components/SCSS/style-common.scss"
import Homebanner from '../../components/Homebanner'
import Servicescomponent from '../../components/Servicescomponent'

function Homepage() {
  return (
    <div className="homepage-maincontainer">
         <Navbar/>
         <Homebanner/>
         <Servicescomponent/>
    </div>
  )
}

export default Homepage 
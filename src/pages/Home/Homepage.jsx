import React from 'react'
import Navbar from '../../components/Navbar'
import "../../components/SCSS/style-common.scss"
import Homebanner from '../../components/Homebanner'
import Servicescomponent from '../../components/Servicescomponent'
import Aboutuscomponent from '../../components/Aboutuscomponent'
import Facillitiescomponent from '../../components/Facillitiescomponent'


function Homepage() {
  return (
    <div className="homepage-maincontainer">
         <Navbar/>
         <Homebanner/>
         <Servicescomponent/>
         <Aboutuscomponent/>
         <Facillitiescomponent/>
    </div>
  )
}

export default Homepage 
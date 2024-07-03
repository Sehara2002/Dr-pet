import React from 'react'
import Navbar from '../../components/Navbar'
import "../../components/SCSS/style-common.scss"
import Homebanner from '../../components/Homebanner'

function Homepage() {
  return (
    <div clssName="homepage-maincontainer">
         <Navbar/>
         <Homebanner/>
    </div>
  )
}

export default Homepage
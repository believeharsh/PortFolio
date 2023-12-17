// import React from 'react'

import { Outlet } from "react-router"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"



function Layout() {
  return (
      <>
        <Navigation/>
        <Outlet/>
        <Footer/>
     
  

      </>
  )
}

export default Layout

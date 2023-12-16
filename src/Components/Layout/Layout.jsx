// import React from 'react'

import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import Fotter from "../Fotter"


function Layout() {
  return (
      <>
        <Navigation/>
        <Outlet/>
        <Fotter/>
  

      </>
  )
}

export default Layout

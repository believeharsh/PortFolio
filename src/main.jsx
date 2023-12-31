import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
// import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import MainContainer from './Components/MainContainer/MainContainer.jsx'
import Mainleft from './Components/Mainleft/Mainleft.jsx'

// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<MainContainer/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/left' element={<Mainleft/>}/>
 
    </Route>

  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={Router}/>

  </React.StrictMode>,
)

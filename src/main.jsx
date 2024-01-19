import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import MainCenter from './Components/MainCenter/MainCenter.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'

// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<MainCenter/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/projects' element={<Projects/>}/>
 
    </Route>

  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={Router}/>

  </React.StrictMode>
)

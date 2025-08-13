import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import AddUser from './pages/addUser'
import ViewUser from './pages/viewUsers'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import DynamicRoute from './pages/dynamicRouteDemo'
import HookDemo1 from './pages/hookDemo1'
import HookDemo2 from './pages/hookDemo2'

function App() {


  
  return (
    <>

    <Routes>

      <Route path='/' element={<Login />} / >


{/*       
      <Route path='/dash' element={<Dashboard />} / >

      <Route path='/about' element={<About />} / >
      <Route path='/add' element={<AddUser />} / >
      <Route path='/view' element={<ViewUser />} / > */}


      {/* parent and child route */}
      <Route path='/dash' element={<Dashboard />}  >
      
        <Route path='home' element={<Home />}  />
        <Route path='about' element={<About />}  />
        <Route path='add' element={<AddUser />}  />
        <Route path='view' element={<ViewUser />}  />

        
        <Route path='hook1' element={<HookDemo1 />}  />
        <Route path='hook2' element={<HookDemo2 />}  />
      </Route>

      {/* Dynamic route */}
      <Route path='/dynamic/:nm' element={ <DynamicRoute/> }></Route>


    </Routes>
      
    </>
  )
}

export default App

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"
function Layout() {
  return (
    <div className='layout'>
        <Header />
        <div className='outlet'>
             <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout

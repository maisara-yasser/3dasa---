// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
    <div className='min-h-screen flex flex-col  bg-slate-50'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

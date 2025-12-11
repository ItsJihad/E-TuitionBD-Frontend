import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router'

function DashboardLayout( ) {
  return (
    <div className='flex font-[montserrat  '>
      <Sidebar outlet={<Outlet/>}></Sidebar>
      
    </div>
  )
}

export default DashboardLayout

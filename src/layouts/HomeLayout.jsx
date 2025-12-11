import React from 'react'
import { Outlet } from 'react-router'

function HomeLayout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default HomeLayout

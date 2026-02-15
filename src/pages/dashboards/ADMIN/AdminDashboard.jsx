import React from 'react'
import { Outlet } from 'react-router'

function AdminDashboard() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminDashboard

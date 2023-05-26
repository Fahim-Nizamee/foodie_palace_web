import React from 'react'
import AdminNavbar from '../admin-components/AdminNav'
import './AdminHome.css'

export default function AdminHome() {
  return (
    <div>
        <AdminNavbar/>
        <div className='promHome'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Admin Dashboard</p>
        </div>
    </div>
  )
}

import React from 'react'
import './AdminNav.css'
import { Link, useNavigate } from 'react-router-dom'
import '../img/menu-btn.png'
import Menu from '../admin-pages/Menu'


export default function Navbar() {
  let navigate = useNavigate()
  
  const logout = () => {

    localStorage.removeItem("AdminAuthToken")
    localStorage.removeItem("AdminUsername")
    localStorage.removeItem("AdminStatus")
    navigate('/admin')
  }

  const username = localStorage.getItem("AdminUsername")
  const status = localStorage.getItem("AdminStatus")
  const showAlert = () => {
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle('mobile-menu')
  }


  return (
    <div>
      {
        (localStorage.getItem('AdminAuthToken'))?
        <div className="navbar shadow">
                  <Link to='/admin-home' className="logo">Foodie Palace</Link>
        <div className="nav-links">
          <ul>
            {/* <li className="active"><Link >Home</Link></li> */}
            <li><Link to='/food-add' >Add Food</Link></li>
            {
              (localStorage.getItem('AdminStatus')==='Owner')?
              <li><Link to='/admin-list'>Staff list</Link></li>
              : <div/>
            }
            {/* <li><Link to='/admin-list'>Staff list</Link></li> */}
            {/* <li><Link >Food List</Link></li> */}
            <li><Link to={'/admin-home'}><i className='fa fa-home'></i></Link></li>
            <li><div className="dropdown">
                  <a className='user' href='#'><i className='fa-solid fa-user'></i> <span>{username}</span></a>
                  <div className="dropdown-content shadow">
                    <a onClick={logout}>Logout</a>
                  </div>
                </div></li>
          </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='menu-btn bi bi-list' fill="currentColor" onClick={showAlert} viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      :navigate('/admin')
      }
      
    </div>
  )
}
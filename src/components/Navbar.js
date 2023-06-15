import React from 'react'
import './Navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../img/menu-btn.png'


export default function Navbar() {
  let navigate = useNavigate()
  // const verify = () => {
  //   fetch('http://localhost:5000/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       token: localStorage.getItem("authToken"),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
        
        
  //       if (data.data === 'exp') {

  //         localStorage.removeItem("authToken")
  //         localStorage.removeItem("username")
  //         // navigate('/login')
  //       }
  //     })
  // }
  // verify()
  const logout = () => {

    localStorage.removeItem("authToken")
    localStorage.removeItem("username")
    navigate('/login')
  }

  const username = localStorage.getItem("username")
  const showAlert = () => {
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle('mobile-menu')
  }
  

  return (
    <div>
      <div className="navbar shadow">
        <Link to="#" className="logo">Foodie Palace</Link>
        <div className="nav-links">
          <ul>
            <li className="active"><Link >Home</Link></li>
            <li><Link >Menu</Link></li>
            <li><Link >About</Link></li>
            <li><Link >Contact</Link></li>
            {

              (localStorage.getItem("authToken")) ?
                <li><div className="dropdown">
                  <a className='user' href='#'><i className='fa-solid fa-user'></i> <span>{username}</span></a>
                  <div className="dropdown-content shadow">
                    <a onClick={logout}>Logout</a>
                  </div>
                </div></li>
                : <li><Link to={'/login'}>Sign in</Link></li>
            }


            {/* <li><select name="" id="">
              <option value="" ><i classNameName='fa-solid fa-user'> </i>Username</option>
              <option value="">logout</option>
              </select></li> */}
            {/* <li><Link > Contact</Link></li> */}
          </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='menu-btn bi bi-list' fill="currentColor" onClick={showAlert} viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
        {/* <img src={btn} onClick={showAlert} alt="menu" className="menu-btn" /> */}
      </div>
    </div>
  )
}
{/* <i classNameName='fa-solid fa-user'></i> */ }
import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <div><Navbar /> </div>
      <div className='body' id='home'>
        <div className='tableOfContent'>
          <h3 class="text-center">Table of Contents</h3>
          <hr />
          <ul>
            <li>
              <a href="#pop">Popular</a>
            </li>
            <li>
              <a href="">Set Menu</a>
            </li>
            <li>
              <a href="">Combo Meal</a>
            </li>
            <li>
              <a href="">Set Menu</a>
            </li>
            <li>
              <a href="">Rice</a>
            </li>
            <li>
              <a href="">Burger</a>
            </li>
            <li>
              <a href="">Chiken</a>
            </li>
          </ul>
        </div>
        <div className='promHome'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Always here to provide Food</p>
        </div>
        <div className='sr '>
          <input className='search shadow' type="search" placeholder='search' />
        </div>
        <div className='popular' id='pop'>
          <h2><i class="fa-solid fa-fire-flame-curved"></i> Popular</h2>
        </div>
        <div className='popular'>
          <h2>Set Menu</h2>
        </div>
        <div className='popular'>
          <h2>Combo Meal</h2>
        </div>
        <div className='popular'>
          <h2>Set Menu</h2>
        </div>
        <div className='popular'>
          <h2>Rice</h2>
        </div>
        <div className='popular'>
          <h2>Burger</h2>
        </div>
        <div className='popular'>
          <h2>Chicken</h2>
        </div>

        <div><Footer /></div>
      </div>

    </div>
  )
}

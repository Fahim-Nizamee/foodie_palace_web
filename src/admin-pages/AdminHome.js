import './Menu.css'
import Navbar from '../admin-components/AdminNav'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AdminHome() {

const [foodItem, setFoodItem] = useState([])

const load = async () => {
    axios.get('https://foodie-palace.onrender.com/food-data').then(response => {
        setFoodItem(response.data[0])
        // console.log(response.data[0])
    })
}
useEffect(() => {
    load()
}, [])

  return (
    <div>
        <Navbar/>
        <div className='promHome'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Admin Dashboard</p>
        </div>
        <div className='full-menu'>

                <div className='list shadow'>
                    <h2 className='text-center'>Food List</h2>
                    {
                        foodItem !== [] ? foodItem.map((data) => {
                            return (
                                <div className='single-item shadow'>
                                    <h3>{data.foodname}</h3> 
                                    <Link to={`/edit/${data._id}`}><a className='fa fa-edit'></a></Link>
                                </div>

                            )

                        }) : ""
                    }

                </div>
            </div>
    </div>
  )
}

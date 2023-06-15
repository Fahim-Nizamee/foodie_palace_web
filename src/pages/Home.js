import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import axios from 'axios'
export default function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const [search, setSearch] = useState('')

  const load = async () => {
    axios.get('http://localhost:5000/food-data').then(response => {
      setFoodItem(response.data[0])
      setFoodCat(response.data[1])

      // console.log(response.data[0])
    })
  }
  useEffect(() => {
    load()
  }, [])
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
            {
              foodCat !== [] ? foodCat.map((data) => {
                return (
                  <li>
                    <a   href={`#${data.category}`}>{data.category}</a>
                  </li>
              )
              }):""
            }
          </ul>
        </div>
        <div className='promHome'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Always here to provide Food</p>
        </div>
        <div className='sr '>
          <input className='search shadow' type="search" placeholder='search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
        </div>
        <div className='popular' id='pop'>
          <h2><i class="fa-solid fa-fire-flame-curved"></i> Popular</h2>

        </div>
        <div className='popular'>
          {
            foodCat !== [] ? foodCat.map((data) => {
              return (
                <div>
                  <h2 id={data.category} key={data._id}> {data.category} </h2>
                  <br />
                  <div className='items'>
                    {
                      foodItem !== [] ? foodItem.filter((item) => (item.category === data.category) && (item.foodname.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                        return (
                          <div key={filterItems._id}>
                            <Card foodname={filterItems.foodname} image={filterItems.image} price={filterItems.price} stock={filterItems.stock} food_id={filterItems._id} ></Card>
                          </div>
                        )
                      }) : ""
                    }
                  </div>
                  <br />


                </div>
              )
            }) : ""
          }

        </div>

        <br />
        <div><Footer /></div>
      </div>

    </div>
  )
}


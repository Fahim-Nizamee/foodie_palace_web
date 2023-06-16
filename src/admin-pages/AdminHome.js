import './Menu.css'
import Navbar from '../admin-components/AdminNav'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  const [food, setFood] = useState({
    foodname: "",
    price: "",
    stock: "",
    category: "",
    image: ""
})
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

// const upload = () => {
//     const { foodname, price, stock, category, image } = food

//     if (foodname && price && stock && category && image) {
//         console.log(food)
//         axios.post('https://foodie-palace.onrender.com/new-food',food).then(res=>{
//             if (res.data === 'added') {
//                 alert('Successfully Added')
//                 window.location.reload(false);
//             }
//             else {
//                 alert('failed')
//             }
//         })
//     }
// }

const onChange = (event) => {
    setFood({ ...food, [event.target.name]: event.target.value })
}
  return (
    <div>
        <Navbar/>
        <div className='promHome'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Admin Dashboard</p>
        </div>
        <div className='full-menu'>

                {/* <div className='menusec'>
                    <div className='menu shadow'>
                        <h1>Add new Food</h1>
                        <input className='form-control' type='name' name="foodname" placeholder='Food Name' value={food.foodname} onChange={onChange} required />
                        <input className='form-control' type='price' name="price" placeholder='Price' value={food.price} onChange={onChange} required />
                        <select className='form-control' type='select' required onChange={onChange} name='stock' value={food.stock}>
                            <option >Select stock status</option>
                            <option value="Aavailable">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                        <select className='form-control' type='select' required onChange={onChange} name='category' value={food.category} >
                            <option >Select Category</option>
                            <option vlaue='Rice' >Rice</option>
                            <option vlaue='Burger'>Burger</option>
                            <option vlaue='Curry'>Curry</option>
                            <option vlaue='Set Menu'>Set Menu</option>
                            <option vlaue='Combo Meal'>Combo Meal</option>
                        </select>
                        <input className='form-control' type='text' name="image" placeholder='Image Link' value={food.image} onChange={onChange} required />
                        <button className='btn shadow' onClick={upload} >ADD</button>

                    </div>
                </div> */}
                <div className='list shadow'>
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

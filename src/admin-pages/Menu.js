import './Menu.css'
import Navbar from '../admin-components/AdminNav'
import React, { useState } from 'react'
import axios from 'axios'

export default function Menu() {
    const [food, setFood] = useState({
        foodname: "",
        price: "",
        stock: "",
        category: "",
        image: ""
    })

    const upload = () => {
        const { foodname, price, stock, category, image } = food
        
        if (foodname && price && stock && category && image) {
            console.log(food)
            axios.post('http://backend.wikivast.com/new-food', food).then(response => {
                if (response.data === 'added') {
                    alert('Successfully added')
                    window.location.reload(false)
                }
                else {
                    alert("failed")
                }
            })
        }
    }
    // const convert = (e) => {
    //     food.image = e.target.value
        
    // }
    const onChange = (event) => {
        setFood({ ...food, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <Navbar />
            <div className='menusec'>
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
            </div>
        </div>
    )
}

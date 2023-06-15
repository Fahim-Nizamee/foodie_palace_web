import React, { useEffect, useState } from 'react'
import './Edit.css'
import Navbar from '../admin-components/AdminNav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Edit(props) {

  const { pid } = useParams()
  let navigate = useNavigate()

  console.log(pid)
  const [food, setFood] = useState([])
  const load = async () => {
    axios.get(`http://localhost:5000/food/${pid}`).then(response => {
      setFood(response.data)
      console.log(response.data)

    })
  }
  useEffect(() => {
    load()
  }, [])
  const submitFoodname = (e) => {
    const updatedFoodname = e.target.value
    const updatedFood = {
      foodname: updatedFoodname,
      price: food.price,
      stock: food.stock,
      category: food.category,
      image: food.image,
    }
    setFood(updatedFood)
  }
  const submitPrice = (e) => {
    const updatedPrice = e.target.value
    const updatedFood = {
      foodname: food.foodname,
      price: updatedPrice,
      stock: food.stock,
      category: food.category,
      image: food.image,
    }
    setFood(updatedFood)
  }
  const submitStock = (e) => {
    const updatedStock = e.target.value
    const updatedFood = {
      foodname: food.foodname,
      price: food.price,
      stock: updatedStock,
      category: food.category,
      image: food.image,
    }
    setFood(updatedFood)
  }
  const submitCategory = (e) => {
    const updatedCategory = e.target.value
    const updatedFood = {
      foodname: food.foodname,
      price: food.price,
      stock: food.stock,
      category: updatedCategory,
      image: food.image,
    }
    setFood(updatedFood)
  }
  const submitImage = (e) => {
    const updatedImage = e.target.value
    const updatedFood = {
      foodname: food.foodname,
      price: food.price,
      stock: food.stock,
      category: food.category,
      image: updatedImage,
    }
    setFood(updatedFood)
  }
  console.log(food)

  const update = () => {
    const { foodname, price, stock, category, image } = food
    if (foodname && price && stock && category && image) {
      axios.put(`http://localhost:5000/update-food/${pid}`, food).then(response => {
        console.log(response.data)
        window.location.reload(false);
      })
    } else {
      alert('Invalid Entry')
    }

  }
  const Delete = () => {
    const { foodname, price, stock, category, image } = food
    if (foodname && price && stock && category && image) {
      axios.delete(`http://localhost:5000/delete-food/${pid}`).then(response => {
        if(response.data === 'success')
        {
          alert("Successfully Deleted")
          navigate('/admin-home')
          window.location.reload(false);
        }
        else{
          alert('failed')
        }

        
      })
    } else {
      alert('Invalid Entry')
    }

  }
  return (
    <div>
      <Navbar />
      <div className='menuSec'>
        <div className='Menu shadow'>
          <h1>Update Food</h1>
          <input className='form-control' type='name' name="foodname" placeholder='Food Name' value={food.foodname} onChange={submitFoodname} required />
          <input className='form-control' type='number' name="price" placeholder='Price' value={food.price} onChange={submitPrice} required />
          <select className='form-control' type='select' required name='stock' value={food.stock} onChange={submitStock}>
            <option >Select stock status</option>
            <option value="Aavailable">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <select className='form-control' type='select' required name='category' value={food.category} onChange={submitCategory} >
            <option >Select Category</option>
            <option vlaue='Rice' >Rice</option>
            <option vlaue='Burger'>Burger</option>
            <option vlaue='Curry'>Curry</option>
            <option vlaue='Set Menu'>Set Menu</option>
            <option vlaue='Combo Meal'>Combo Meal</option>
          </select>
          <input className='form-control' type='text' name="image" placeholder='Image Link' value={food.image} required onChange={submitImage} />
          <div className='button'>
            <button className='btn shadow' onClick={update} >Update</button>
            <button className='btn shadow' onClick={Delete} >Delete</button>
          </div>


        </div>
      </div>
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

    </div>
  )
}

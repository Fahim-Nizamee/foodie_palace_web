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
    axios.get(`https://foodie-palace.onrender.com/food/${pid}`).then(response => {
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
      axios.put(`https://foodie-palace.onrender.com/update-food/${pid}`, food).then(response => {
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
      axios.delete(`https://foodie-palace.onrender.com/delete-food/${pid}`).then(response => {
        if (response.data === 'success') {
          alert("Successfully Deleted")
          navigate('/admin-home')
          window.location.reload(false);
        }
        else {
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
      <div className='full-menu'>
        <div class="product-card shadow">
          <div className='ggs'>
            <div class="product-card-img shadow">
              <img src={food.image} alt="" />
            </div>
            <div>
              <h2>{food.foodname}</h2>
              <p><strong>Price :</strong> $ {food.price} </p>
            </div>
            {/* <div>
            <h2>{props.foodname.length > 18 ? props.foodname.substring(0, 10) : props.foodname}</h2>
            <p><strong>Price :</strong> $ {props.price} </p>
          </div> */}
          </div>
          <br />
          <div class="product-card-buttons">

            <button class=" btn btn-outline-dark shadow btns" id="add"
            >Add to Cart</button>
          </div>
        </div>
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
              <option vlaue='Pizza'>Pizza</option>
              <option vlaue='Appetizer'>Appetizer</option>
              <option vlaue='Combo Meal'>Combo Meal</option>
            </select>
            <input className='form-control' type='text' name="image" placeholder='Image Link' value={food.image} required onChange={submitImage} />
            <div className='button'>
              <button className='btn shadow' onClick={update} >Update</button>
              <button className='btn shadow' onClick={Delete} >Delete</button>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

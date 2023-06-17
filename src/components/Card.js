import React from 'react'
import './Card.css'
import { useCart, useDispatchCart } from './ContextReducer'

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart()
  const handleAddToCart =async ()=>{
    // console.log("Clicked")
    await dispatch({type:"ADD",id:props.foodItem._id,foodname:props.foodItem.foodname,price:props.foodItem.price,image:props.foodItem.image})
    console.log(data)
  }
  return (
    <div>
      <div class="product-card shadow">
        <div className='ggs'>
          <div class="product-card-img shadow">
            <img src={props.foodItem.image} alt="" />
          </div>
          <div>
            <h2>{props.foodItem.foodname.length > 18 ? props.foodItem.foodname.substring(0, 16) : props.foodItem.foodname}</h2>
            <p><strong>Price :</strong> $ {props.foodItem.price} </p>
          </div>
        </div>
        <br />
        <div class="product-card-buttons">

          <button class=" btn btn-outline-dark shadow btns" id="add"
            onClick={handleAddToCart}>Add to Cart</button>
          {/* <button class=" btn btn-outline-warning shadow btns" id="remove" href="#!" value="${ID}"
            onclick="remove(this)">Remove</button> */}
        </div>
      </div>
    </div>
  )
}

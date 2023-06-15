import React from 'react'
import './Card.css'

export default function Card(props) {

  return (
    <div>
      <div class="product-card shadow">
        <div className='ggs'>
          <div class="product-card-img shadow">
            <img src={props.image} alt="" />
          </div>
          <div>
            <h2>{props.foodname.length > 18 ? props.foodname.substring(0, 16) : props.foodname}</h2>
            <p><strong>Price :</strong> $ {props.price} </p>
          </div>
          {/* <div>
            <h2>{props.foodname.length > 18 ? props.foodname.substring(0, 10) : props.foodname}</h2>
            <p><strong>Price :</strong> $ {props.price} </p>
          </div> */}
        </div>
        <br />
        <div class="product-card-buttons">

          <button class=" btn btn-outline-primary shadow btns" id="add" href="#!" value="${ID}"
            onclick="add(this)">Add</button>
          <button class=" btn btn-outline-warning shadow btns" id="remove" href="#!" value="${ID}"
            onclick="remove(this)">Remove</button>
        </div>
      </div>
    </div>
  )
}

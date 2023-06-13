import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div>
      <div class="product-card shadow">
        <div class="product-card-img shadow">
            <img src='https://pixabay.com/get/gad8ef9c2c7b5e09962aac2dad0de848182c21513386fc0f2618a2d11b165bd26fc0df73bcb6f0b11d10935be2da47d536593bc7d5277725f7abcfd969a3f433d3f0314f63678bed56b56b1a5eb849a1a_1280.jpg' alt=""/>
        </div>
        <br />
        <hr/>
        <h4></h4>
        <div class="product-card-description">
            <p></p>
        </div>
        <br />
        <p><strong>Price :</strong> $  </p>
        <br />
        <div class="product-card-buttons">

            <button class=" btn btn-outline-primary shadow" id="add" href="#!" value="${ID}"
                onclick="add(this)">Add</button>
            <button class=" btn btn-outline-warning shadow" id="remove" href="#!" value="${ID}"
                onclick="remove(this)">Remove</button>
        </div>
    </div>
    </div>
  )
}

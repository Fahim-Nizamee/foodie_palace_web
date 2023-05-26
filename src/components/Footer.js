import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className='d1 '>
          <p><h2>Foodie Palace- </h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi adipisci aperiam, tempore iste voluptates distinctio natus, similique odit unde error iure, voluptatem dolorum voluptatum dicta quos aliquam repellat amet!</p>
        </div>
        <div className='d2 text-center'>

            <a href="#!"><i className="fa fa-facebook" style={{ fontSize: '25px' }}></i> facebook.com/foodie-palace</a>
          <br />
          <a href="#!"><i className="fa fa-instagram" style={{ fontSize: '25px' }}></i> @foodie_palace</a>
          <br />
          <a href="#!"><i className="fa fa-twitter" style={{ fontSize: '25px' }}></i> _foodie_palace</a>
          <br />
          <a href="#!"><i className="fa fa-whatsapp" style={{ fontSize: '25px' }}></i> +880 1882-555559</a>
          <br />
          <a href="#!"><i className="fa fa-envelope" style={{ fontSize: '25px' }}></i> foodie_palace@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

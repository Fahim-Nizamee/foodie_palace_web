import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    address: "",
    email: "",
    password: ""
  })
  let navigate = useNavigate()
  const register = () => {
    const { username, address, email, password } = user
    if (username && address && email && password) {
      axios.post('https://foodie-palace.onrender.com/signup', user).then(response => {
        if (response.data === 'Successfully registered') {
          alert('Successfully registered')
          navigate('/login')
        }
        else {
          alert("This email already registerd")
        }
      })
    }
    else {
      alert("invalid")
    }

  }
  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div>
        <div className='main'>
          <div className='prom'>
            <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
            <p>Always here to provide Food</p>
          </div>
          <div className='signup shadow'>
            <h1>Signup  </h1>
            <input className='form-control i2' type='text' name="username" placeholder='Username' value={user.username} onChange={onChange} />
            <input className='form-control' type='text' name="address" placeholder='Address' value={user.address} onChange={onChange} />
            <input className='form-control' type='email' name="email" placeholder='E-mail' value={user.email} onChange={onChange} />
            <input className='form-control' type='password' name="password" placeholder='Password' value={user.password} onChange={onChange} />
            <button className='btn shadow' onClick={register}>Continue</button>
            <Link to='/login'>Already have an account? Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

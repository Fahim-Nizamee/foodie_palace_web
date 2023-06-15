import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Admin.css'
import axios from 'axios'


export default function Login() {
  let navigate = useNavigate()
  const [user, setuser] = useState({ email: "", password: "" })
  const login = () => {
    const { email, password } = user
    if (email && password) {
      axios.post('http://localhost:5000/admin-login', user).then(response => {
        if (response.data.message === 'success') {
          localStorage.setItem("AdminAuthToken",response.data.authToken)
          localStorage.setItem("AdminUsername",response.data.username)
          console.log(localStorage.getItem("AdminAuthToken"))
          
          
          navigate('/admin-home')
        }
        else if(response.data === 'wrong pass') {
          alert("Invalid Password")
        }
        else if(response.data === 'wrong mail'){
          alert("Invalid Email")
        }
      })
    }
    else {
      alert("invalid")
    }

  }
  const onChange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className='main'>
        <div className='prom'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Always here to provide Food</p>
        </div>
        <div className='login shadow'>
        <h1>Admin Login</h1>
          <div className='cls'>
            <input className='form-control' type='email' name="email" placeholder='E-mail' value={user.email} onChange={onChange} />
            <input className='form-control' type='password' name="password" placeholder='Password' value={user.password} onChange={onChange} />
            <button className='btn shadow' onClick={login} style={{ backgroundColor: 'rgb(227, 92, 19)', color: 'white' }} type='submit'>Sign in</button>
          </div>
          {/* <div>
            <p>Don't have an account? <Link to='/SignUp'>Sign up and get started!</Link> </p>
          </div> */}

        </div>


      </div>
    </div>
  )
}

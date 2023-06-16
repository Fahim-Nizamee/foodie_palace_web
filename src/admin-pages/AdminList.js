import React, { useState } from 'react'
import AdminNav from '../admin-components/AdminNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AdminList() {


  const [user, setUser] = useState({
    username: "",
    address: "",
    email: "",
    password: "",
    status:""
  })
  let navigate = useNavigate()
  const register = () => {
    const { username, address, email, password, status } = user
    if (username && address && email && password && status) {
      axios.post('https://foodie-palace.onrender.com/admin-signup', user).then(response => {
        if (response.data === 'Successfully registered') {
          alert('Successfully registered')
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
      <AdminNav/>
      <div className='full-menu'>
        <div className='signup shadow'>
            <h1>Add Admin</h1>
            <input className='form-control i2' type='text' name="username" placeholder='Username' value={user.username} onChange={onChange} />
            <input className='form-control' type='text' name="address" placeholder='Address' value={user.address} onChange={onChange} />
            <select className='form-control' type='select' required name='status' value={user.status} onChange={onChange} >
              <option >Select Status</option>
              <option vlaue='Rice' >Staff</option>
              <option vlaue='Burger'>Owner</option>
            </select>
            <input className='form-control' type='email' name="email" placeholder='E-mail' value={user.email} onChange={onChange} />
            <input className='form-control' type='password' name="password" placeholder='Password' value={user.password} onChange={onChange} />
            <button className='btn shadow' onClick={register}>Continue</button>
          </div>

      </div>
    </div>
  )
}

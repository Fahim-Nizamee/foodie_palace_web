import React, { useEffect, useState } from 'react'
import './Edit.css'
import Navbar from '../admin-components/AdminNav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditAdmin(props) {

    const { pid } = useParams()
    let navigate = useNavigate()

    console.log(pid)
    const [admin, setAdmin] = useState([])
    const load = async () => {
        axios.get(`https://foodie-palace.onrender.com/admin-edit/${pid}`).then(response => {
            setAdmin(response.data)
            console.log(response.data)

        })
    }
    useEffect(() => {
        load()
    }, [])
    // const submitUsername = (e) => {
    //     const updatedUsername = e.target.value
    //     const updatedAdmin = {
    //         username: updatedUsername,
    //         address: admin.address,
    //         email: admin.email,
    //         password: admin.password,
    //         status: admin.status,
    //     }
    //     setAdmin(updatedAdmin)
    // }
    // const submitStatus = (e) => {
    //     const updatedStatus = e.target.value
    //     const updatedAdmin = {
    //         username: admin.username,
    //         address: admin.address,
    //         email: admin.email,
    //         password: admin.password,
    //         status: updatedStatus,
    //     }
    //     setAdmin(updatedAdmin)
    // }
    // const submitAddress = (e) => {
    //     const updatedAddress = e.target.value
    //     const updatedAdmin = {
    //         username: admin.username,
    //         address: updatedAddress,
    //         email: admin.email,
    //         password: admin.password,
    //         status: admin.status,
    //     }
    //     setAdmin(updatedAdmin)
    // }
 
    console.log(admin)

    // const update = () => {
    //     const { username, address, status } = admin
    //     if (username && status && address ) {
    //         console.log(admin)
    //         axios.put(`http://localhost:5000/update/${pid}`, admin).then(response => {
    //             console.log(response.data)
    //             window.location.reload(false);
    //         })
    //     } else {
    //         alert('Invalid Entry')
    //     }

    // }
    const Delete = () => {
        const { foodname, price, stock, category, image } = admin
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
                
                    <div className='admin-signup shadow'>
                        <h1>Update Admin Info</h1>
                            <label className='form-control i2 text-center' type='text' name="username" placeholder='Username'  >{admin.username}</label>
                            <label className='form-control text-center' type='text' name="address" placeholder='Address'  >{admin.address}</label>
                            <label className='form-control text-center' type='select' required name='status'   >{admin.status}
                            </label>
                            <label className='form-control text-center' type='email' name="email" placeholder='E-mail'   >{admin.email}</label>
                            <button className='btn shadow' onClick={Delete} >Delete</button>
                        


                   
                </div>
            </div>
        </div>
    )
}

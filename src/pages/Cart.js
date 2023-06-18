import React from 'react'
import './Cart.css'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    let navigate = useNavigate()
    let data= useCart();
    let dispatch = useDispatchCart();
    if(data.length===0)
    {
        return(
            <div>
                <div className='warning text-center'>The cart is empty!</div>
            </div>
        )
    }
    const order =()=>{
        if(!localStorage.getItem("authToken"))
        {
            alert("You are not Logged in. Please Log in First")
            navigate('/login')
        }
        else{
            alert("Your Food on the way")
        }
    } 
    let totalPrice = data.reduce((total,foods)=>total + parseInt(foods.price),0)
  return (
    <div className='carts'>
        <h2 className='text-center'>Cart</h2>
        <div className='list2 shadow'>
            {data.map((food,index)=>(
                <div className='single-item2 shadow'>
                <h3 className='dds1'>{food.foodname}</h3>
                <p className='dds2'>$ {food.price}</p>
                <a className='fa fa-trash dds2' onClick={()=>{dispatch({type:"REMOVE",index:index})}}></a>
                </div>
            ))}
        </div>
        <h2>Total price: ${totalPrice}</h2>
        <button className='btn btn-outline-dark' onClick={order} >Order Now</button> 
      
    </div>
  )
}

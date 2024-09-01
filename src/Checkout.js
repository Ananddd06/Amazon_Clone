import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import Checkoutproduct from './Checkoutproduct'
import { useStateValue } from './Stateprovider'

function Checkout() {
  const[{basket,user},dispatch]=useStateValue(); 
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout_add' src='https://f.media-amazon.com/images/G/31/img24/Consumables/Janmashtami/Ingress_1500x200.png'/>
          <div>
            <h3>Hell, {user?.email}</h3>
            <h2 className='checkout_title'>
                Your Shopping Cart 
            </h2>
            {basket.map(item=>(
              <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
              ))}
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
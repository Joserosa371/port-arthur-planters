
import React, { useEffect, useState } from 'react'
import { Cart } from '../cart'

export default function CartPage(){
  const [items, setItems] = useState(Cart.get())
  useEffect(()=>{
    const onStorage = ()=> setItems(Cart.get())
    window.addEventListener('storage', onStorage)
    return ()=> window.removeEventListener('storage', onStorage)
  },[])
  const updateQty = (id, delta)=>{
    const arr = Cart.get().map(i=> i.id===id ? {...i, qty: Math.max(1,(i.qty||1)+delta)} : i)
    Cart.save(arr); setItems(arr)
  }
  return (
    <div className="container">
      <h1>Your Cart</h1>
      {items.length===0 ? <p>Cart is empty.</p> : (
        <div className="grid">
          {items.map(i=>(
            <div className="card" key={i.id}><div className="body">
              <div className="flex">
                <strong style={{fontSize:18}}>{i.name}</strong>
                <span className="right price">${i.price}</span>
              </div>
              <div className="qty" style={{marginTop:8}}>
                <button onClick={()=>updateQty(i.id,-1)}>-</button>
                <span>{i.qty}</span>
                <button onClick={()=>updateQty(i.id,1)}>+</button>
                <button className="btn secondary" onClick={()=>{ Cart.remove(i.id); setItems(Cart.get()) }}>Remove</button>
              </div>
            </div></div>
          ))}
          <div className="card"><div className="body">
            <div className="flex"><strong>Total</strong><span className="right price">${Cart.total().toFixed(2)}</span></div>
            <a className="btn" href="/contact?subject=Order%20Request">Request Invoice</a>
          </div></div>
        </div>
      )}
    </div>
  )
}

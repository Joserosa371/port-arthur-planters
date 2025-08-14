
import React, { useEffect, useState } from 'react'
import data from '../data/products.json'
import { Cart } from '../cart'

export default function Shop(){
  const [q, setQ] = useState('')
  const [material, setMaterial] = useState('')
  const [items, setItems] = useState(data)

  useEffect(()=>{
    const filtered = data.filter(p =>
      (!q || p.name.toLowerCase().includes(q.toLowerCase())) &&
      (!material || p.material===material)
    )
    setItems(filtered)
  }, [q, material])

  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="card body" style={{margin:'12px 0'}}>
        <div className="grid grid-3">
          <div><label>Search</label><input value={q} onChange={e=>setQ(e.target.value)} placeholder="cedar, composite..."/></div>
          <div><label>Material</label>
            <select value={material} onChange={e=>setMaterial(e.target.value)}>
              <option value="">All</option>
              <option>Cedar</option>
              <option>Redwood</option>
              <option>Composite</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-3">
        {items.map(p=> (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="body">
              <div className="badge">{p.material}</div>
              <h3>{p.name}</h3>
              <div className="price">${p.price}</div>
              <button className="btn" onClick={()=>{ Cart.add(p); alert('Added to cart') }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

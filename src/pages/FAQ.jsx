
import React from 'react'
import faqs from '../data/faqs.json'

export default function FAQ(){
  return (
    <div className="container">
      <h1>FAQ</h1>
      <div className="grid">
        {faqs.map((f,i)=>(
          <div className="card" key={i}><div className="body"><h3>{f.q}</h3><p>{f.a}</p></div></div>
        ))}
      </div>
    </div>
  )
}

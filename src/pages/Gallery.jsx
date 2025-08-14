
import React from 'react'

const imgs = ['/src/assets/hero1.svg','/src/assets/hero2.svg','/src/assets/hero3.svg']

export default function Gallery(){
  return (
    <div className="container">
      <h1>Gallery</h1>
      <div className="grid grid-3">
        {imgs.map((src,i)=> (
          <div className="card" key={i}>
            <img src={src} alt={"Planter "+(i+1)} />
          </div>
        ))}
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ✅ IMPORT YOUR PLANTER IMAGE (this fixes it)
import planter1 from '../assets/planter1.png'

// ❗ FIX YOUR SLIDES TOO — these MUST be imported
import hero1 from '../assets/hero1.svg'
import hero2 from '../assets/hero2.svg'
import hero3 from '../assets/hero3.svg'

const slides = [
  { src: hero1, caption: 'Premium Cedar Raised Beds' },
  { src: hero2, caption: 'Built in Port Arthur, Texas' },
  { src: hero3, caption: 'Custom Sizes • Composite Options' }
]

export default function Home() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % slides.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="container">

      {/* ✅ YOUR PLANTER IMAGE WILL SHOW NOW */}
      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <img
          src={planter1}
          alt="Tall cedar planter box"
          style={{ maxWidth: '400px', width: '100%', borderRadius: '8px' }}
        />
        <p style={{ marginTop: 8 }}>
          Premium cedar planter available in custom sizes.
        </p>
      </div>

      <section className="hero card" aria-label="Slideshow">
        <div className="hero-slide">
          <img src={slides[idx].src} alt={slides[idx].caption} />
          <div className="hero-caption">{slides[idx].caption}</div>
        </div>
      </section>

      <section style={{ marginTop: 16 }} className="grid grid-3">
        <div className="card">
          <div className="body">
            <h3>Durable Materials</h3>
            <p>Cedar, redwood, and composite that last season after season.</p>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <h3>Built Local</h3>
            <p>Handmade in Port Arthur, TX and delivered nearby.</p>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <h3>Custom Sizes</h3>
            <p>Pick your length, width, and height — we’ll build it right.</p>
          </div>
        </div>
      </section>

      <div style={{ margin: '16px 0' }} className="flex">
        <Link className="btn" to="/shop">Shop Planters</Link>
        <Link className="btn secondary" to="/customize">Customize Yours</Link>
      </div>

    </div>
  )
}

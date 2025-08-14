
import React, { useState } from 'react'

export default function OrderTracking(){
  const [code, setCode] = useState('')
  const [status, setStatus] = useState(null)
  const lookup = () => {
    if(!code) return
    const map = { 'PAP-1001': 'Cutting lumber', 'PAP-1002':'Assembling box', 'PAP-1003':'Out for delivery' }
    setStatus(map[code] || 'Not found. Please contact us.')
  }
  return (
    <div className="container">
      <h1>Order Tracking</h1>
      <div className="form">
        <label>Order Code</label>
        <input value={code} onChange={e=>setCode(e.target.value)} placeholder="e.g., PAP-1002" />
        <button className="btn" style={{marginTop:10}} onClick={lookup}>Check Status</button>
        {status && <p style={{marginTop:10}}><strong>Status:</strong> {status}</p>}
      </div>
    </div>
  )
}

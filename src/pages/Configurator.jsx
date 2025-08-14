
import React, { useState } from 'react'
import jsPDF from 'jspdf'

export default function Configurator(){
  const [length, setLength] = useState(48)
  const [width, setWidth] = useState(24)
  const [height, setHeight] = useState(24)
  const [material, setMaterial] = useState('Cedar')
  const [color, setColor] = useState('Natural')

  const savePDF = () => {
    const doc = new jsPDF()
    doc.text('Custom Planter Config', 14, 18)
    doc.text(`Size: ${length}x${width}x${height}`, 14, 30)
    doc.text(`Material: ${material}`, 14, 38)
    doc.text(`Color: ${color}`, 14, 46)
    doc.save('planter-config.pdf')
  }

  return (
    <div className="container">
      <h1>Customize Your Planter</h1>
      <div className="form">
        <div className="grid grid-3">
          <div><label>Length (in)</label><input type="number" value={length} onChange={e=>setLength(+e.target.value)} /></div>
          <div><label>Width (in)</label><input type="number" value={width} onChange={e=>setWidth(+e.target.value)} /></div>
          <div><label>Height (in)</label><input type="number" value={height} onChange={e=>setHeight(+e.target.value)} /></div>
          <div><label>Material</label>
            <select value={material} onChange={e=>setMaterial(e.target.value)}>
              <option>Cedar</option><option>Redwood</option><option>Composite</option>
            </select></div>
          <div><label>Color</label>
            <select value={color} onChange={e=>setColor(e.target.value)}>
              <option>Natural</option><option>Charcoal</option><option>White</option>
            </select></div>
        </div>
        <div className="flex" style={{marginTop:12}}>
          <button className="btn" onClick={savePDF}>Save PDF</button>
          <a className="btn secondary" href="/contact?subject=Quote%20Request">Request a Quote</a>
        </div>
      </div>
    </div>
  )
}

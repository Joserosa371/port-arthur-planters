
import React, { useEffect, useState } from 'react'

export default function Admin(){
  const [ok, setOk] = useState(false)
  const [content, setContent] = useState(localStorage.getItem('pap_announcement') || 'Free local delivery this month!')

  useEffect(()=>{
    const pass = prompt('Enter admin password')
    if(pass === import.meta.env.VITE_ADMIN_PASS){ setOk(true) } else { alert('Wrong password'); window.location.href='/' }
  },[])

  if(!ok) return null
  return (
    <div className="container">
      <h1>Admin</h1>
      <label>Homepage Announcement</label>
      <input value={content} onChange={e=>setContent(e.target.value)}/>
      <div style={{marginTop:10}}>
        <button className="btn" onClick={()=>{ localStorage.setItem('pap_announcement', content); alert('Saved!') }}>Save</button>
      </div>
    </div>
  )
}

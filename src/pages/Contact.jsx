
import React from 'react'

export default function Contact(){
  const formspree = import.meta.env.VITE_FORMSPREE || ''
  const phone = import.meta.env.VITE_PHONE || '8507438960'
  const email = import.meta.env.VITE_EMAIL || 'joserosa@portarthurplanters.com'
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="grid grid-2">
        <form className="form" action={formspree} method="POST">
          <input type="hidden" name="_subject" value="New Inquiry - Port Arthur Planter Provisions" />
          <label>Name</label><input name="name" required />
          <label>Email</label><input type="email" name="email" required />
          <label>Phone</label><input name="phone" />
          <label>Message</label><textarea name="message" rows="5" required />
          <button className="btn" type="submit">Send</button>
        </form>
        <div className="card"><div className="body">
          <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
          <div className="notice">We typically reply within 24 hours.</div>
        </div></div>
      </div>
    </div>
  )
}

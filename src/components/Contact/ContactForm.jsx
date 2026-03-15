import { useState } from 'react'
import { sendEmail } from '../../utils/emailService'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('err-empty'); return
    }
    setStatus('loading')
    try {
      await sendEmail(form)
      setStatus('ok')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('err')
    }
  }

  return (
    <div className="cform">
      <div className="cform-title">Send Me a Message</div>
      <div className="cform-sub">Sends an email directly to my inbox via EmailJS.</div>

      <div className="ff">
        <label className="fl">Full Name <span>*</span></label>
        <input className="fi" name="name" value={form.name} onChange={handle} placeholder="Your full name" />
      </div>
      <div className="ff">
        <label className="fl">Email <span>*</span></label>
        <input className="fi" name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
      </div>
      <div className="ff">
        <label className="fl">Message <span>*</span></label>
        <textarea className="ft" name="message" value={form.message} onChange={handle} placeholder="Hey Dhruv, I wanted to reach out about..." />
      </div>

      <button
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        onClick={submit}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message ↗'}
      </button>

      {status === 'ok'        && <div className="form-ok">&#x2705; Sent! I&apos;ll reply soon.</div>}
      {status === 'err'       && <div className="form-err">&#x274C; Something went wrong. Please try again.</div>}
      {status === 'err-empty' && <div className="form-err">&#x26A0; Please fill in all fields.</div>}
    </div>
  )
}
import { useState } from 'react'
import Reveal from './Reveal'

const DEFAULT_NOTE = '14-day Pro trial · Cancel anytime · SOC 2 compliant'

export default function CtaFinal() {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState(DEFAULT_NOTE)
  const [success, setSuccess] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    if (!valid) {
      setNote('Please enter a valid work email.')
      setSuccess(false)
      return
    }
    setNote(`🎉 You're in! Check ${value} to set up your workspace.`)
    setSuccess(true)
    setEmail('')
  }

  return (
    <section className="cta-final" id="cta">
      <div className="container">
        <Reveal className="cta-card">
          <h2>Give your team an <span className="grad-text">AI teammate</span> today.</h2>
          <p>Join 12,000+ teams using Nimbus to find answers faster and automate the
            work that drains their week. Free to start — no card required.</p>
          <form className="cta-form" id="ctaForm" noValidate onSubmit={onSubmit}>
            <input
              type="email"
              id="ctaEmail"
              placeholder="you@company.com"
              aria-label="Work email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn--primary btn--lg">Get started</button>
          </form>
          <p className={`cta-note${success ? ' success' : ''}`} id="ctaNote">{note}</p>
        </Reveal>
      </div>
    </section>
  )
}

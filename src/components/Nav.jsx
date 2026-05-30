import { useState } from 'react'
import useScrolled from '../hooks/useScrolled'
import BrandMark from './BrandMark'

export default function Nav() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="#top" className="brand" aria-label="Nimbus home" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            <BrandMark size={28} />
          </span>
          <span className="brand__name">Nimbus</span>
        </a>

        <nav
          className={`nav__links${open ? ' open' : ''}`}
          id="navLinks"
          aria-label="Primary"
        >
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how" onClick={closeMenu}>How it works</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>

        <div className="nav__actions">
          <a href="#" className="btn btn--ghost">Sign in</a>
          <a href="#cta" className="btn btn--primary">Get started</a>
        </div>

        <button
          className="nav__toggle"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

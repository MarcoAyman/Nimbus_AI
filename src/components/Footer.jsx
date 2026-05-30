import BrandMark from './BrandMark'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand">
            <span className="brand__mark">
              <BrandMark size={26} />
            </span>
            <span className="brand__name">Nimbus</span>
          </a>
          <p>The AI workspace that works with you.</p>
          <div className="socials">
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">⌨</a>
          </div>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Integrations</a>
            <a href="#">Changelog</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#">Docs</a>
            <a href="#">API</a>
            <a href="#">Community</a>
            <a href="#">Status</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">DPA</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© <span id="year">{year}</span> Nimbus Labs, Inc. All rights reserved.</span>
        <span>Made with ☕ in San Francisco</span>
      </div>
    </footer>
  )
}

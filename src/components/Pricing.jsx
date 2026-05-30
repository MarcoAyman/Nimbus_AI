import Reveal from './Reveal'

export default function Pricing() {
  return (
    <section className="section section--alt" id="pricing">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Simple, honest pricing</span>
          <h2>Start free. Scale when you're ready.</h2>
          <p>Every plan includes unlimited members, SSO, and our full integration
            library. No per-seat surprises.</p>
        </Reveal>

        <div className="pricing">
          <Reveal as="article" className="price">
            <h3>Starter</h3>
            <p className="price__desc">For individuals and small teams getting started.</p>
            <div className="price__amount"><span>$0</span>/mo</div>
            <a href="#cta" className="btn btn--ghost btn--block">Get started</a>
            <ul className="price__list">
              <li>Up to 5 members</li>
              <li>3 connected tools</li>
              <li>500 AI actions / month</li>
              <li>Community support</li>
            </ul>
          </Reveal>

          <Reveal as="article" className="price price--featured" delay={0.06}>
            <span className="price__badge">Most popular</span>
            <h3>Pro</h3>
            <p className="price__desc">For growing teams that live in their workspace.</p>
            <div className="price__amount"><span>$24</span>/user/mo</div>
            <a href="#cta" className="btn btn--primary btn--block">Start 14-day trial</a>
            <ul className="price__list">
              <li>Unlimited members</li>
              <li>Unlimited integrations</li>
              <li>10,000 AI actions / month</li>
              <li>Custom agents & workflows</li>
              <li>Priority support</li>
            </ul>
          </Reveal>

          <Reveal as="article" className="price" delay={0.12}>
            <h3>Enterprise</h3>
            <p className="price__desc">For organizations with scale and compliance needs.</p>
            <div className="price__amount"><span>Custom</span></div>
            <a href="#cta" className="btn btn--ghost btn--block">Talk to sales</a>
            <ul className="price__list">
              <li>Everything in Pro</li>
              <li>SAML SSO & SCIM</li>
              <li>Dedicated deployment</li>
              <li>SOC 2 & DPA</li>
              <li>99.9% uptime SLA</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

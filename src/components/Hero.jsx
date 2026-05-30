import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <Reveal as="a" href="#cta" className="pill">
          <span className="pill__dot"></span>
          New · Nimbus Agents now in public beta
          <span className="pill__arrow">→</span>
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={0.06}>
          The AI workspace that{' '}
          <span className="grad-text">works with you</span>
        </Reveal>

        <Reveal as="p" className="hero__sub" delay={0.12}>
          Nimbus connects your tools, automates the busywork, and turns scattered
          company knowledge into instant answers — so your team spends time building,
          not searching.
        </Reveal>

        <Reveal className="hero__cta" delay={0.18}>
          <a href="#cta" className="btn btn--primary btn--lg">Start free — no card needed</a>
          <a href="#how" className="btn btn--ghost btn--lg">
            <span className="play" aria-hidden="true">▶</span> See how it works
          </a>
        </Reveal>

        <Reveal className="hero__trust" delay={0.24}>
          <span>Trusted by fast-moving teams at</span>
          <div className="logos">
            <span className="logo-word">Northwind</span>
            <span className="logo-word">Vertex</span>
            <span className="logo-word">Lumio</span>
            <span className="logo-word">Cobalt</span>
            <span className="logo-word">Hatchet</span>
          </div>
        </Reveal>

        {/* App mockup */}
        <Reveal className="mockup" delay={0.3} aria-hidden="true">
          <div className="mockup__bar">
            <span className="dot dot--r"></span>
            <span className="dot dot--y"></span>
            <span className="dot dot--g"></span>
            <div className="mockup__url">app.nimbus.ai</div>
          </div>
          <div className="mockup__body">
            <aside className="mockup__side">
              <div className="side-brand">
                <span className="side-brand__mark"></span> Nimbus
              </div>
              <div className="side-item side-item--active">⌂ Home</div>
              <div className="side-item">⚡ Agents</div>
              <div className="side-item">🗂 Knowledge</div>
              <div className="side-item">📊 Insights</div>
              <div className="side-item">⚙ Settings</div>
              <div className="side-spacer"></div>
              <div className="side-card">
                <strong>Pro plan</strong>
                <small>8,420 / 10,000 actions</small>
                <div className="meter"><i style={{ width: '84%' }}></i></div>
              </div>
            </aside>
            <div className="mockup__main">
              <div className="chat chat--in">
                <span className="chat__avatar">YK</span>
                <div className="chat__bubble">Summarize last week's support tickets and draft a changelog.</div>
              </div>
              <div className="chat chat--bot">
                <span className="chat__avatar chat__avatar--bot">N</span>
                <div className="chat__bubble chat__bubble--bot">
                  <p>On it — analyzed <strong>312 tickets</strong>. Top themes:</p>
                  <ul>
                    <li>⚡ Slow exports (41 mentions)</li>
                    <li>🔐 SSO setup confusion (28)</li>
                    <li>📱 Mobile sync bugs (19)</li>
                  </ul>
                  <p>Draft changelog ready. <span className="link">Open doc →</span></p>
                  <div className="typing"><i></i><i></i><i></i></div>
                </div>
              </div>
              <div className="mockup__compose">
                <span>Ask Nimbus anything…</span>
                <span className="send">↑</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

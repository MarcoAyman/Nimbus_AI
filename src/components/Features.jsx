import Reveal from './Reveal'

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Everything in one place</span>
          <h2>One workspace. Every workflow.</h2>
          <p>Stop stitching together a dozen tools. Nimbus brings your knowledge, your
            apps, and your AI agents into a single calm surface.</p>
        </Reveal>

        <div className="bento">
          <Reveal as="article" className="card card--wide">
            <div className="card__icon">🔍</div>
            <h3>Ask your company anything</h3>
            <p>Nimbus indexes your docs, wikis, chats, and tickets so anyone can get a
              sourced answer in seconds — not a Slack search rabbit hole.</p>
            <div className="card__demo">
              <span className="tag">Notion</span><span className="tag">Slack</span>
              <span className="tag">Drive</span><span className="tag">Linear</span>
              <span className="tag">Zendesk</span><span className="tag">+40 more</span>
            </div>
          </Reveal>

          <Reveal as="article" className="card" delay={0.06}>
            <div className="card__icon">⚡</div>
            <h3>Agents that take action</h3>
            <p>Go beyond chat. Nimbus agents file tickets, update CRMs, and run
              multi-step workflows on a schedule.</p>
          </Reveal>

          <Reveal as="article" className="card" delay={0.12}>
            <div className="card__icon">🔐</div>
            <h3>Enterprise-grade security</h3>
            <p>SOC 2 Type II, SSO/SAML, granular permissions, and zero training on
              your data. Your secrets stay yours.</p>
          </Reveal>

          <Reveal as="article" className="card" delay={0.06}>
            <div className="card__icon">📊</div>
            <h3>Insights, not dashboards</h3>
            <p>Ask “how did revenue trend last quarter?” and get a chart, a summary,
              and the why — pulled live from your sources.</p>
          </Reveal>

          <Reveal as="article" className="card card--wide" delay={0.12}>
            <div className="card__icon">🧩</div>
            <h3>Build your own, no code</h3>
            <p>Compose custom agents with a visual builder. Trigger them from a
              message, a webhook, or a calendar — and let them run while you sleep.</p>
            <div className="card__demo card__demo--flow">
              <span className="node">Trigger</span><span className="arrow">→</span>
              <span className="node">Research</span><span className="arrow">→</span>
              <span className="node">Draft</span><span className="arrow">→</span>
              <span className="node node--accent">Notify</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

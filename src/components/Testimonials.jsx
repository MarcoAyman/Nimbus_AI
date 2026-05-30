import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Loved by operators</span>
          <h2>Teams ship more with Nimbus</h2>
        </Reveal>

        <div className="quotes">
          <Reveal as="figure" className="quote">
            <blockquote>“Nimbus replaced four internal tools and an entire onboarding
              doc. New hires are productive on day one instead of week three.”</blockquote>
            <figcaption>
              <img src="https://i.pravatar.cc/80?img=47" alt="" loading="lazy" />
              <span><b>Maya Olsen</b>Head of Ops, Vertex</span>
            </figcaption>
          </Reveal>
          <Reveal as="figure" className="quote" delay={0.06}>
            <blockquote>“Our support team closes tickets 2.3× faster. The agents draft
              replies with real context — it feels like we hired a senior teammate.”</blockquote>
            <figcaption>
              <img src="https://i.pravatar.cc/80?img=12" alt="" loading="lazy" />
              <span><b>Daniel Reyes</b>VP Support, Cobalt</span>
            </figcaption>
          </Reveal>
          <Reveal as="figure" className="quote" delay={0.12}>
            <blockquote>“I stopped pinging people for status. I just ask Nimbus and get
              a sourced answer. It gave me my mornings back.”</blockquote>
            <figcaption>
              <img src="https://i.pravatar.cc/80?img=32" alt="" loading="lazy" />
              <span><b>Priya Nair</b>Founder, Lumio</span>
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

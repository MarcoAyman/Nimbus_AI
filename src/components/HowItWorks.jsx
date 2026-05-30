import Reveal from './Reveal'

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="how">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Up and running in minutes</span>
          <h2>How Nimbus works</h2>
          <p>No migration project. No six-week rollout. Connect a tool and your team
            feels it the same afternoon.</p>
        </Reveal>

        <div className="steps">
          <Reveal className="step">
            <span className="step__num">1</span>
            <h3>Connect your tools</h3>
            <p>One-click integrations with the apps you already use. Nimbus reads only
              what you allow, and respects every existing permission.</p>
          </Reveal>
          <Reveal className="step" delay={0.06}>
            <span className="step__num">2</span>
            <h3>Ask & automate</h3>
            <p>Type a question or describe a workflow in plain English. Nimbus pulls
              context, answers with sources, and offers to take it further.</p>
          </Reveal>
          <Reveal className="step" delay={0.12}>
            <span className="step__num">3</span>
            <h3>Let agents run</h3>
            <p>Turn any repetitive task into a scheduled agent. Review the results,
              tweak the prompt, and watch the busywork disappear.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

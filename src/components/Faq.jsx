import { useState } from 'react'
import Reveal from './Reveal'

const ITEMS = [
  {
    q: 'Is my company data used to train AI models?',
    a: 'Never. Your data is encrypted in transit and at rest, isolated per workspace, and is never used to train any model — ours or a provider\'s.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams connect their first tools and ask their first question within ten minutes. There\'s no migration and no IT project required.',
  },
  {
    q: 'Which tools does Nimbus integrate with?',
    a: 'Over 40 out of the box — including Slack, Notion, Google Drive, Linear, GitHub, Zendesk, Salesforce, and Jira. Need something custom? Use our API.',
  },
  {
    q: 'Can I control what Nimbus can access?',
    a: 'Yes. Nimbus inherits each tool\'s existing permissions and adds granular, role-based controls on top. People only ever see what they\'re allowed to.',
  },
  {
    q: 'What happens after the free trial?',
    a: 'Nothing automatic. We never ask for a card to start. When the trial ends you can upgrade, stay on the free Starter plan, or export your data.',
  },
]

export default function Faq() {
  // Controlled accordion: opening one closes the others (matches original).
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <Reveal className="section__head">
          <span className="eyebrow">Questions</span>
          <h2>Frequently asked</h2>
        </Reveal>

        <div className="faq">
          {ITEMS.map((item, i) => (
            <Reveal
              as="details"
              className="faq__item"
              key={i}
              delay={(i % 4) * 0.06}
              open={openIndex === i}
            >
              <summary
                onClick={(e) => {
                  e.preventDefault()
                  setOpenIndex((cur) => (cur === i ? -1 : i))
                }}
              >
                {item.q}
                <span className="faq__icon">+</span>
              </summary>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal'
import useCountUp from '../hooks/useCountUp'

function Stat({ count, suffix = '', label, delay }) {
  const ref = useCountUp(count, suffix)
  return (
    <Reveal className="stat" delay={delay}>
      <b ref={ref}>0</b>
      <span>{label}</span>
    </Reveal>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        <Stat count={40} label="hours saved / person / month" delay={0} />
        <Stat count={3} suffix="x" label="faster onboarding" delay={0.06} />
        <Stat count={12000} suffix="+" label="teams onboarded" delay={0.12} />
        <Stat count={99} suffix=".9%" label="uptime SLA" delay={0.18} />
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

// Animated number counter that fires once when scrolled into view.
// Faithful port of the original requestAnimationFrame counter (cubic ease-out).
export default function useCountUp(target, suffix = '') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isFloat = target % 1 !== 0
    const format = (v) =>
      (isFloat ? v.toFixed(1) : Math.floor(v).toLocaleString()) + suffix
    const finalText = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix

    // No IntersectionObserver support — just show the final value.
    if (!('IntersectionObserver' in window)) {
      el.textContent = finalText
      return
    }

    let raf = 0
    const run = () => {
      let start = null
      const dur = 1400
      const frame = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = format(target * eased)
        if (p < 1) raf = requestAnimationFrame(frame)
        else el.textContent = finalText
      }
      raf = requestAnimationFrame(frame)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, suffix])

  return ref
}

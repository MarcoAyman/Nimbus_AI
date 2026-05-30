import { useEffect, useState } from 'react'

// Adds a "scrolled" state once the page is scrolled past a small threshold.
// Mirrors the original sticky-nav background behaviour.
export default function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

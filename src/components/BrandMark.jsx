// Nimbus logo mark. Defines its own gradient with a unique id so multiple
// instances on the page each resolve their fill correctly.
let uid = 0

export default function BrandMark({ size = 28 }) {
  const gradId = `brandGrad-${(uid += 1)}`
  return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradId})`} />
      <path
        d="M9 22V10l7 8 7-8v12"
        stroke="white"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

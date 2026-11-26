import Link from 'next/link'

export function PriceGuideEdgeButton() {
  return (
    <Link className="price-guide-edge-button" href="/price-guide" aria-label="Open Wendy house price guide">
      <span>PRICE GUIDE</span>
    </Link>
  )
}

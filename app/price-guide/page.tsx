import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wendy House Price Guide | Nutec Masters',
  description: 'Starting Wendy house prices for timber and Nutec Wendy houses in Cape Town.',
}

type PriceRow = {
  width: string
  length: string
  flat: number
  pitched: number
}

const woodenRows: PriceRow[] = [
  { width: '2m', length: '2m', flat: 12000, pitched: 12500 },
  { width: '2.4m', length: '2.4m', flat: 13000, pitched: 13500 },
  { width: '2.4m', length: '3m', flat: 13000, pitched: 13500 },
  { width: '3m', length: '3m', flat: 14500, pitched: 15000 },
  { width: '3m', length: '4m', flat: 16000, pitched: 16500 },
  { width: '3m', length: '6m', flat: 18000, pitched: 18500 },
  { width: '3m', length: '9m', flat: 25000, pitched: 25500 },
  { width: '3m', length: '12m', flat: 32000, pitched: 33000 },
  { width: '4m', length: '6m', flat: 24000, pitched: 24500 },
  { width: '6m', length: '6m', flat: 30000, pitched: 31000 },
  { width: '6m', length: '9m', flat: 40000, pitched: 42000 },
  { width: '6m', length: '12m', flat: 45000, pitched: 47000 },
  { width: '9m', length: '9m', flat: 48000, pitched: 50000 },
]

const largeBoardRows: PriceRow[] = [
  { width: '2m', length: '2m', flat: 12000, pitched: 12500 },
  { width: '2.4m', length: '2.4m', flat: 13000, pitched: 13500 },
  { width: '2.4m', length: '3m', flat: 13500, pitched: 14000 },
  { width: '3m', length: '3m', flat: 15000, pitched: 15500 },
  { width: '3m', length: '4m', flat: 17000, pitched: 18000 },
  { width: '3m', length: '6m', flat: 20000, pitched: 21000 },
  { width: '3m', length: '9m', flat: 24000, pitched: 25000 },
  { width: '3m', length: '12m', flat: 34000, pitched: 35000 },
  { width: '4m', length: '6m', flat: 26000, pitched: 27000 },
  { width: '6m', length: '6m', flat: 32000, pitched: 33000 },
  { width: '6m', length: '9m', flat: 36000, pitched: 37000 },
  { width: '6m', length: '12m', flat: 48000, pitched: 50000 },
  { width: '9m', length: '9m', flat: 64000, pitched: 66000 },
]

const overlappingRows: PriceRow[] = [
  { width: '2m', length: '2m', flat: 17000, pitched: 17500 },
  { width: '2.4m', length: '2.4m', flat: 18000, pitched: 19000 },
  { width: '2.4m', length: '3m', flat: 20000, pitched: 21000 },
  { width: '3m', length: '3m', flat: 22000, pitched: 23000 },
  { width: '3m', length: '4m', flat: 25000, pitched: 27000 },
  { width: '3m', length: '6m', flat: 28000, pitched: 30000 },
  { width: '3m', length: '9m', flat: 36000, pitched: 38000 },
  { width: '3m', length: '12m', flat: 45000, pitched: 48000 },
  { width: '6m', length: '6m', flat: 54000, pitched: 56000 },
  { width: '6m', length: '9m', flat: 62000, pitched: 65000 },
  { width: '9m', length: '9m', flat: 78000, pitched: 80000 },
]

function formatRand(value: number) {
  return `R ${value.toLocaleString('en-ZA')}`
}

function quoteLink(buildType: string, row: PriceRow) {
  const message = `Hello Nutec Masters, I would like a quote for a ${buildType}: ${row.width} wide by ${row.length} long.`
  return `https://wa.me/27751079569?text=${encodeURIComponent(message)}`
}

function PriceTable({ title, description, rows, buildType }: { title: string; description: string; rows: PriceRow[]; buildType: string }) {
  return (
    <section className="price-guide-section">
      <div className="price-guide-section-heading">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="price-guide-table-wrap">
        <table className="price-guide-table">
          <thead>
            <tr>
              <th>Width</th>
              <th>Length</th>
              <th>Flat roof</th>
              <th>Pitched roof</th>
              <th><span className="sr-only">Quote</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.width}-${row.length}`}>
                <td>{row.width}</td>
                <td>{row.length}</td>
                <td>{formatRand(row.flat)}</td>
                <td>{formatRand(row.pitched)}</td>
                <td>
                  <a className="price-guide-quote" href={quoteLink(buildType, row)} target="_blank" rel="noreferrer">Get quote</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function PriceGuidePage() {
  return (
    <main className="price-guide-page">
      <header className="price-guide-header">
        <Link className="brand" href="/#home" aria-label="Nutec Masters home">
          <span className="brand-logo-frame">
            <img className="brand-logo" src="/logos/logo.jpeg" alt="Nutec Masters" />
          </span>
        </Link>
        <Link className="price-guide-back" href="/#prices">Back to site</Link>
      </header>

      <div className="price-guide-content">
        <section className="price-guide-intro">
          <p className="eyebrow">WENDY HOUSE PRICES</p>
          <h1>Price guide</h1>
          <p>Starting prices for Wendy houses by size and roof type. Pick a build type, find your size, and ask for a quote on WhatsApp.</p>
        </section>

        <PriceTable
          title="Wooden Wendy houses"
          description="Timber-walled Wendy houses. Quick to put up and good for garden rooms, offices and play space."
          rows={woodenRows}
          buildType="Wooden Wendy house"
        />
        <PriceTable
          title="Nutec Wendy houses, large boards"
          description="Large Nutec boards are cut to fit each wall, with joined boards on bigger walls. This is the faster, lower-cost way to get a Nutec Wendy house."
          rows={largeBoardRows}
          buildType="Nutec Wendy house with large boards"
        />
        <PriceTable
          title="Nutec Wendy houses, overlapping"
          description="Nutec planks are laid horizontally, each overlapping the one below. Water drips off each plank instead of running down the wall, and the look matches a traditional Wendy house."
          rows={overlappingRows}
          buildType="Nutec Wendy house with overlapping boards"
        />

        <section className="price-guide-note">
          <p>These sizes and prices are a base guide and a starting point for your project. Contact us for a consultation and we will work out your exact needs and tailor a quote to them.</p>
          <a className="button button-dark" href="https://wa.me/27751079569?text=Hello%20Nutec%20Masters%2C%20I%20would%20like%20a%20custom%20Wendy%20house%20quote." target="_blank" rel="noreferrer">Ask for a custom quote on WhatsApp</a>
        </section>
      </div>
    </main>
  )
}

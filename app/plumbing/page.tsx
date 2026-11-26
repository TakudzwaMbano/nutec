import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionLink, Reveal } from '@/components/motion-primitives'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { ServiceWhyChoose } from '@/components/service-detail-page'

const plumbingImages = [
  { src: '/images/plumbing1.jpeg', alt: 'Plumbing work completed by Nutec Masters' },
  { src: '/images/plumbong2.jpeg', alt: 'Plumbing installation project' },
  { src: '/images/plumbing3.jpeg', alt: 'Residential plumbing project' },
  { src: '/images/plumbing4.jpeg', alt: 'Plumbing repair project' },
]

export const metadata: Metadata = {
  title: 'Plumbing Services | Nutec Masters',
  description: 'Professional plumbing installation and repairs for residential and commercial properties across Cape Town and the Western Cape.',
}

export default function PlumbingPage() {
  return (
    <div className="plumbing-page">
      <header className="plumbing-header">
        <Link className="brand" href="/#home">
          <span className="brand-logo-frame"><img className="brand-logo" src="/logos/logo.jpeg" alt="Nutec Masters" /></span>
        </Link>
        <nav aria-label="Plumbing page navigation">
          <MotionLink href="/#services" className="service-nav-link">ALL SERVICES</MotionLink>
          <MotionLink href="/#contact" className="button button-dark">GET A FREE QUOTE</MotionLink>
        </nav>
      </header>

      <main>
        <section className="plumbing-hero">
          <Reveal className="plumbing-hero-copy">
            <p className="eyebrow">NUTEC MASTERS SERVICES / 03</p>
            <h1>Plumbing<br /><em>done properly.</em></h1>
            <p>Expert plumbing installation and repairs for residential and commercial properties across Cape Town and the Western Cape.</p>
            <div className="plumbing-actions">
              <MotionLink href="/#contact" className="button button-dark">REQUEST A QUOTE <span aria-hidden="true">↗</span></MotionLink>
              <a href="tel:+27751079569" className="text-link">CALL 075 107 9569 <span aria-hidden="true">→</span></a>
            </div>
          </Reveal>
          <Reveal className="plumbing-hero-image-wrap" delay={0.12}>
            <img className="plumbing-hero-image" src={plumbingImages[0].src} alt={plumbingImages[0].alt} />
          </Reveal>
        </section>

        <section>
          <Reveal className="plumbing-intro">
            <p className="eyebrow">INSTALLATIONS & REPAIRS</p>
            <h2>Reliable plumbing for<br /><em>your property.</em></h2>
            <p>From plumbing installations to repairs, Nutec Masters provides practical service for residential and commercial properties. Contact our team to discuss your requirements and request a quote.</p>
          </Reveal>
        </section>

        <section className="plumbing-gallery-section" aria-labelledby="plumbing-gallery-title">
          <Reveal className="plumbing-gallery-heading">
            <div>
              <p className="eyebrow">OUR WORK</p>
              <h2 id="plumbing-gallery-title">Plumbing<br /><em>projects.</em></h2>
            </div>
            <p>A look at plumbing work from the Nutec Masters team.</p>
          </Reveal>
          <div className="plumbing-project-gallery">
            {plumbingImages.map((image, index) => (
              <Reveal className="plumbing-gallery-item" key={image.src} delay={index * 0.06}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </section>

        <ServiceWhyChoose />

        <section className="plumbing-contact">
          <Reveal>
            <p className="eyebrow eyebrow-light">LET&apos;S DISCUSS YOUR PROJECT</p>
            <h2>Need a plumber?<br /><em>We can help.</em></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <MotionLink href="/#contact" className="button button-light">GET A FREE QUOTE <span aria-hidden="true">↗</span></MotionLink>
          </Reveal>
        </section>
      </main>

      <footer className="plumbing-footer">
        <Link className="brand brand-light" href="/#home">
          <span className="brand-logo-frame"><img className="brand-logo" src="/logos/logo.jpeg" alt="Nutec Masters" /></span>
        </Link>
        <MotionLink href="/#services">BACK TO ALL SERVICES <span aria-hidden="true">→</span></MotionLink>
        <a className="whatsapp-footer-link" href="https://wa.me/27751079569" target="_blank" rel="noreferrer"><WhatsAppIcon />075 107 9569</a>
        <span>© 2026 Nutec Masters. All rights reserved.</span>
      </footer>
    </div>
  )
}

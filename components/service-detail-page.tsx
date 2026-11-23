import Link from 'next/link'
import type { ServicePageContent } from '@/lib/service-pages'
import { MotionLink, Reveal } from '@/components/motion-primitives'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function ServiceDetailPage({ service }: { service: ServicePageContent }) {
  return (
    <div className="service-detail-page">
      <header className="service-detail-header">
        <Link className="brand" href="/#home" aria-label="Nutec Masters home">
          <span className="brand-logo-frame">
            <img className="brand-logo" src="/logos/logo.jpeg" alt="Nutec Masters" />
          </span>
        </Link>
        <nav aria-label={`${service.title} page navigation`}>
          <MotionLink href="/#services" className="service-nav-link">ALL SERVICES</MotionLink>
          <MotionLink href="/#contact" className="button button-dark">GET A FREE QUOTE</MotionLink>
        </nav>
      </header>

      <main>
        <section className="service-detail-hero">
          <Reveal className="service-detail-copy">
            <p className="eyebrow">NUTEC MASTERS SERVICES / {service.number}</p>
            <h1>{service.heading}</h1>
            <p>{service.description}</p>
            <div className="service-detail-actions">
              <MotionLink href="/#contact" className="button button-dark">REQUEST A QUOTE <span aria-hidden="true">↗</span></MotionLink>
              <Reveal delay={0.18}><a href="tel:+27719012337" className="text-link">CALL +27 71 901 2337 <span aria-hidden="true">→</span></a></Reveal>
            </div>
          </Reveal>
          <Reveal className="service-detail-image-wrap" delay={0.12}>
            <img className="service-detail-image" src={service.image} alt={service.imageAlt} />
          </Reveal>
        </section>

        <section className="service-detail-overview">
          <Reveal>
            <p className="eyebrow">ABOUT THIS SERVICE</p>
            <h2>{service.title}<br /><em>by Nutec Masters.</em></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </Reveal>
        </section>

        <section className="service-detail-contact">
          <Reveal>
            <p className="eyebrow eyebrow-light">LET&apos;S DISCUSS YOUR PROJECT</p>
            <h2>Tell us what<br /><em>you have in mind.</em></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <MotionLink href="/#contact" className="button button-light">GET A FREE QUOTE <span aria-hidden="true">↗</span></MotionLink>
          </Reveal>
        </section>
      </main>

      <footer className="service-detail-footer">
        <Link className="brand brand-light" href="/#home" aria-label="Nutec Masters home">
          <span className="brand-logo-frame">
            <img className="brand-logo" src="/logos/logo.jpeg" alt="Nutec Masters" />
          </span>
        </Link>
        <MotionLink href="/#services">BACK TO ALL SERVICES <span aria-hidden="true">→</span></MotionLink>
        <a className="whatsapp-footer-link" href="https://wa.me/263785013326" target="_blank" rel="noreferrer"><WhatsAppIcon />+263 78 501 3326</a>
        <span>© 2026 Nutec Masters. All rights reserved.</span>
      </footer>
    </div>
  )
}

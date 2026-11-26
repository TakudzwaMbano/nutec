'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Reveal, staggerItemVariants, StaggerGroup } from '@/components/motion-primitives'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const photos = {
  hero: '/nutec/nutec cover pic.jpeg',
  intro: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.08 PM.jpeg',
  nutec: '/nutec/nutec cover pic.jpeg',
  wendy: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.08 PM.jpeg',
  plumbing: [
    '/images/plumbing1.jpeg',
    '/images/plumbong2.jpeg',
    '/images/plumbing3.jpeg',
    '/images/plumbing4.jpeg',
  ],
  electrical: '/electrical/cover.jpeg',
  flooring: '/flooring/flooring cover.jpeg',
  paving: '/paving/WhatsApp Image 2026-11-23 at 8.45.41 PM.jpeg',
  project1: '/nutec/nutec cover pic.jpeg',
  project2: '/flooring/flooring cover.jpeg',
  project3: '/paving/WhatsApp Image 2026-11-23 at 8.45.41 PM.jpeg',
}
const services = [
  ['01', 'NUTEC HOUSES', 'Premium Nutec board construction for durable, weather-resistant structures built to last.', photos.nutec, 'nutec-houses'],
  ['02', 'WENDY HOUSES', 'Custom Wendy houses for extra living space, home offices or garden rooms.', photos.wendy, 'wendy-houses'],
  ['03', 'PLUMBING', 'Expert plumbing installation and repairs for residential and commercial properties.', photos.plumbing, 'plumbing'],
  ['04', 'ELECTRICAL', 'Professional electrical services including wiring, installations and safety inspections.', photos.electrical, 'electrical'],
  ['05', 'FLOORING', 'Quality flooring solutions from tile to hardwood, installed with precision and care.', photos.flooring, 'flooring'],
  ['06', 'PAINTING & PAVING', 'Complete painting services and professional paving for driveways and outdoor areas.', photos.paving, 'painting-paving'],
]
const faqs = [
  ['How long does a Nutec or Wendy house take to build?', 'Project timing depends on the design, size, site conditions and scope of work. Get in touch with your requirements and we can discuss a suitable schedule.'],
  ['What affects the price of a house?', 'Dimensions, materials, finishes, site access, location and any additional requirements all contribute to the final cost. We provide a tailored quotation after learning about your project.'],
  ['Can you handle other work as part of my project?', 'Yes. We also offer plumbing, electrical, flooring, painting and paving services. Tell us what you have in mind and we can discuss the full scope.'],
  ['Which areas do you serve?', 'We work across Cape Town and the Western Cape. Share your town or suburb when requesting a quote so we can confirm availability for your project.'],
]
const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Prices', '#prices'], ['Gallery', '#projects'], ['Contact', '#contact']]

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Nutec Masters home"><span className="brand-logo-frame"><img className="brand-logo" src="/logos/logo.jpeg" alt="Nutec Masters" /></span></a>
}

function NavigationItem({ label, href, onSelect }: { label: string; href: string; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      className="nav-link"
      onClick={onSelect}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {label}
      <motion.span
        className="nav-indicator"
        aria-hidden="true"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
      />
    </motion.a>
  )
}

function NavigationItems({ onSelect }: { onSelect: () => void }) {
  const reduceMotion = useReducedMotion()
  return (
    <>
      {links.map(([label, href]) => <NavigationItem key={label} label={label} href={href} onSelect={onSelect} />)}
      <motion.a
        className="button button-dark nav-quote"
        href="#contact"
        onClick={onSelect}
        whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        GET A FREE QUOTE
      </motion.a>
    </>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Brand />
        <motion.button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </motion.button>
        <nav className="main-nav desktop-nav" aria-label="Main navigation">
          <NavigationItems onSelect={closeMenu} />
        </nav>
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              key="mobile-navigation"
              className="main-nav nav-open mobile-nav"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
            >
              <NavigationItems onSelect={closeMenu} />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

function TypingLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <>
      {Array.from(text).map((character, index) => (
        <motion.span
          className="hero-title-char"
          key={`${text}-${index}`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, delay: reduceMotion ? 0 : delay + index * 0.045, ease: 'easeOut' }}
        >
          {character === ' ' ? '\u00a0' : character}
        </motion.span>
      ))}
    </>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url("${photos.hero}")` }}>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow eyebrow-light">NUTEC MASTERS / CAPE TOWN</p>
        <h1 className="hero-title" aria-label="Built with precision, made to last">
          <TypingLine text="Built with precision," />
          <br />
          <TypingLine text="made to last" delay={'Built with precision,'.length * 0.045} />
          <motion.span
            className="hero-cursor"
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
          >|</motion.span>
        </h1>
        <motion.p
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 1.8, ease: 'easeOut' }}
        >
          Premium Nutec houses, Wendy houses and professional property improvement services across Cape Town and the Western Cape.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 2, ease: 'easeOut' }}
        >
          <motion.a className="button button-light" href="#contact" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }}>GET A FREE QUOTE <span aria-hidden="true">↗</span></motion.a>
          <motion.a className="text-link text-link-light" href="#projects" whileHover={reduceMotion ? undefined : { x: 3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ duration: 0.2, ease: 'easeOut' }}>EXPLORE OUR WORK <span aria-hidden="true">→</span></motion.a>
        </motion.div>
      </div>
      <p className="hero-location">CAPE TOWN <span /> WESTERN CAPE</p>
      <div className="hero-index">01 / 06</div>
    </section>
  )
}

function Intro() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="intro section-pad" id="about">
      <motion.div className="intro-image" initial={reduceMotion ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease: 'easeOut' }}>
        <img src={photos.intro} alt="Completed contemporary home with clean architectural lines" loading="lazy" />
        <span className="image-caption">BUILDING FOR EVERYDAY LIVING</span>
      </motion.div>
      <Reveal className="intro-copy" delay={0.12}>
        <p className="eyebrow">WHO WE ARE</p>
        <h2>Practical construction.<br /><em>Quality that lasts.</em></h2>
        <p>Nutec Masters delivers reliable construction and property improvement solutions, combining quality materials, professional workmanship and attention to detail. From custom Nutec and Wendy houses to essential property services, we help clients create spaces that work for them.</p>
        <motion.a className="text-link" href="#contact" whileHover={reduceMotion ? undefined : { x: 3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ duration: 0.2, ease: 'easeOut' }}>DISCOVER NUTEC MASTERS <span aria-hidden="true">→</span></motion.a>
        <div className="intro-rule"><span>01</span><span>BUILT AROUND YOUR NEEDS</span></div>
      </Reveal>
    </section>
  )
}

function Services() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="services section-pad" id="services">
      <Reveal className="section-heading">
        <div><p className="eyebrow">WHAT WE DO</p><h2>Considered work.<br /><em>Made to last.</em></h2></div>
        <p>Complete construction and property improvement solutions.<br />One trusted team, from the first conversation to the finish.</p>
      </Reveal>
      <StaggerGroup className="service-grid">
        {services.map(([number, title, description, image, slug]) => {
          const images = Array.isArray(image) ? image : [image]
          return (
            <motion.article
              className="service-card"
              key={number}
              variants={staggerItemVariants}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01, boxShadow: '0 16px 34px rgba(36,39,43,.12)' }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <Link href={`/${slug}`} className={title === 'PLUMBING' ? 'service-image plumbing-gallery' : 'service-image'} aria-label={`View ${title.toLowerCase()} services`}>
                {images.map((imagePath, index) => <img key={imagePath} src={imagePath} alt={`${title.toLowerCase()} project ${index + 1}`} loading="lazy" />)}
                <span>{number}</span>
              </Link>
              <div className="service-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={`/${slug}`} className="text-link">VIEW SERVICE <span aria-hidden="true">→</span></Link>
              </div>
            </motion.article>
          )
        })}
      </StaggerGroup>
    </section>
  )
}

function Projects() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="projects section-pad" id="projects">
      <Reveal className="section-heading section-heading-dark">
        <div><p className="eyebrow eyebrow-light">OUR PORTFOLIO</p><h2>Featured<br /><em>Projects</em></h2></div>
        <div><p>A selection of our construction and property improvement work.</p><motion.a className="text-link text-link-light" href="#contact" whileHover={reduceMotion ? undefined : { x: 3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>VIEW ALL PROJECTS <span aria-hidden="true">→</span></motion.a></div>
      </Reveal>
      <StaggerGroup className="project-grid">
        <motion.article className="project project-large" variants={staggerItemVariants} whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.24, ease: 'easeOut' }}>
          <img src={photos.project1} alt="Modern Nutec-style residence exterior" loading="lazy" />
          <div className="project-label"><span>01 / RESIDENTIAL</span><h3>Modern Nutec Residence</h3><p>Cape Town, Western Cape <i /> Nutec Houses</p></div>
        </motion.article>
        <motion.article className="project" variants={staggerItemVariants} whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.24, ease: 'easeOut' }}>
          <img src={photos.project2} alt="Contemporary office interior" loading="lazy" />
          <div className="project-label"><span>02 / COMMERCIAL</span><h3>Office Overlap Nutech</h3><p>Western Cape <i /> Nutech Offices</p></div>
        </motion.article>
        <motion.article className="project" variants={staggerItemVariants} whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.24, ease: 'easeOut' }}>
          <img src={photos.project3} alt="Renovated residential property" loading="lazy" />
          <div className="project-label"><span>03 / RENOVATION</span><h3>Complete Home Renovation</h3><p>Cape Town, Western Cape <i /> Full Service</p></div>
        </motion.article>
      </StaggerGroup>
    </section>
  )
}

function Reasons() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="reasons section-pad">
      <Reveal className="section-heading">
        <div><p className="eyebrow">WHY NUTEC MASTERS</p><h2>Why Clients Choose<br /><em>Nutec Masters</em></h2></div>
        <p>Good building is more than materials.<br />It is a team that takes the details seriously.</p>
      </Reveal>
      <StaggerGroup className="reasons-grid">
        {['Experienced Professionals', 'Quality Materials', 'Affordable Pricing', 'Reliable Delivery', 'Attention to Detail', 'Customer Satisfaction'].map((item, index) => (
          <motion.div
            className="reason"
            key={item}
            variants={staggerItemVariants}
            whileHover={reduceMotion ? undefined : { y: -3, backgroundColor: 'rgba(211,173,79,.08)' }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <span>0{index + 1}</span><h3>{item}</h3><span className="reason-arrow" aria-hidden="true">↗</span>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  )
}

function Prices() {
  const prices = [['WOODEN WENDY HOUSES', 'Timber walls', 'R12,000'], ['NUTEC LARGE BOARDS', 'Lower-cost Nutec construction', 'R12,000'], ['NUTEC OVERLAPPING', 'Traditional overlapping finish', 'R17,000']]
  const reduceMotion = useReducedMotion()
  return (
    <section className="prices section-pad" id="prices">
      <Reveal className="section-heading">
        <div><p className="eyebrow">TRANSPARENT STARTING PRICES</p><h2>Quality construction<br /><em>at competitive prices.</em></h2></div>
        <p>A clear place to start. Every project is different, so we&apos;ll shape a quote around your plans.</p>
      </Reveal>
      <StaggerGroup className="price-grid">
        {prices.map(([title, desc, price], index) => (
          <motion.article
            className="price-card"
            key={title}
            variants={staggerItemVariants}
            whileHover={reduceMotion ? undefined : { y: -5, boxShadow: '0 16px 34px rgba(36,39,43,.12)' }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <span className="price-index">0{index + 1}</span><h3>{title}</h3><p>{desc}</p><div className="price-from">FROM</div><div className="price-amount">{price}</div>
          </motion.article>
        ))}
      </StaggerGroup>
      <Reveal>
        <p className="price-note">Prices are starting estimates and may vary depending on dimensions, materials, location and project requirements.</p>
        <div className="price-actions">
          <motion.a className="button button-dark" href="/price-guide" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }}>VIEW FULL PRICE GUIDE</motion.a>
          <motion.a className="button button-outline" href="#contact" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }}>REQUEST A CUSTOM QUOTE</motion.a>
        </div>
      </Reveal>
    </section>
  )
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()
  return (
    <section className="faq section-pad">
      <Reveal className="faq-title">
        <p className="eyebrow">A FEW THINGS TO KNOW</p><h2>Common<br /><em>Questions</em></h2>
        <p>Can&apos;t find what you&apos;re looking for? Our team is happy to help.</p>
        <motion.a className="text-link" href="#contact" whileHover={reduceMotion ? undefined : { x: 3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>TALK TO OUR TEAM <span aria-hidden="true">→</span></motion.a>
      </Reveal>
      <StaggerGroup className="faq-list">
        {faqs.map(([question, answer], index) => (
          <motion.div className="faq-item" key={question} variants={staggerItemVariants}>
            <motion.button
              aria-expanded={active === index}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setActive(active === index ? null : index)}
              whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            >
              <span>{question}</span><span className="faq-plus" aria-hidden="true">{active === index ? '−' : '+'}</span>
            </motion.button>
            <div id={`faq-answer-${index}`} className="faq-answer" hidden={active !== index}><p>{answer}</p></div>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  )
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const reduceMotion = useReducedMotion()
  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [`Hello Nutec Masters, I would like to request a quotation.`, `Name: ${data.get('name')}`, `Phone: ${data.get('phone')}`, `Service: ${data.get('service')}`, `Town / City: ${data.get('town')}`, `Project details: ${data.get('details') || 'Not provided'}`].join('\n')
    setSubmitted(true)
    window.open(`https://wa.me/27751079569?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <motion.form
      className="quote-form"
      onSubmit={submitQuote}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: 'easeOut' }}
    >
      <div className="form-heading"><p className="eyebrow eyebrow-light">TELL US ABOUT IT</p><h3>Let&apos;s get<br /><em>building.</em></h3><p>Share a few details and we&apos;ll take it from there.</p></div>
      <label>Your name<input name="name" required autoComplete="name" placeholder="Full name" /></label>
      <label>Phone number<input name="phone" required type="tel" autoComplete="tel" placeholder="+27" /></label>
      <label>Service required<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{['Nutec house', 'Wendy house', 'Plumbing', 'Electrical', 'Flooring', 'Painting & Paving', 'Other'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Town or city<input name="town" required autoComplete="address-level2" placeholder="e.g. Cape Town" /></label>
      <label className="form-details">Size or project details <span>(optional)</span><textarea name="details" rows={3} placeholder="Tell us a little about your project" /></label>
      <motion.button className="button button-light form-submit" type="submit" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
        {submitted ? 'OPEN WHATSAPP AGAIN' : 'SEND QUOTE REQUEST'} <span aria-hidden="true">↗</span>
      </motion.button>
      <p className="form-privacy">Your details will be used to respond to your quotation request.</p>
    </motion.form>
  )
}

function Contact() {
  const reduceMotion = useReducedMotion()
  return (
    <>
      <section className="cta section-pad">
        <Reveal>
          <p className="eyebrow eyebrow-light">YOUR NEXT PROJECT STARTS HERE</p>
          <h2>Ready to Start<br /><em>Your Project?</em></h2>
          <p>Get in touch with our team for professional Nutec house, Wendy house, plumbing, electrical, flooring, painting and paving services.</p>
          <div className="cta-actions">
            <motion.a href="#contact" className="button button-light" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }}>GET A FREE QUOTE <span aria-hidden="true">↗</span></motion.a>
            <motion.a href="tel:+27751079569" className="text-link text-link-light" whileHover={reduceMotion ? undefined : { x: 3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>CONTACT US TODAY <span aria-hidden="true">→</span></motion.a>
          </div>
        </Reveal>
        <motion.div className="cta-number" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.8 }}>GB<span> / </span>01</motion.div>
      </section>
      <section className="contact section-pad" id="contact">
        <Reveal className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p><h2>Tell us what<br /><em>you have in mind.</em></h2>
          <p>We&apos;ll be in touch to understand your needs and discuss a quote.</p>
          <div className="contact-details">
            <a href="tel:+27751079569"><small>CALL</small>075 107 9569</a>
            <a href="https://wa.me/27751079569" target="_blank" rel="noreferrer"><small><WhatsAppIcon />WHATSAPP</small>075 107 9569</a>
            <a href="mailto:nutecmasters1@gmail.com"><small>EMAIL</small>nutecmasters1@gmail.com</a>
          </div>
        </Reveal>
        <QuoteForm />
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-about">
          <Brand light />
          <p>Premium Nutec houses, Wendy houses and property improvement services in Cape Town and across the Western Cape.</p>
        </div>
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          {[...links, ['Privacy Policy', 'mailto:nutecmasters1@gmail.com?subject=Privacy%20Policy%20Enquiry']].map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>
          {services.map(([, title, , , slug]) => <Link href={`/${slug}`} key={title}>{title}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h3>CONTACT</h3>
          <a href="tel:+27751079569">075 107 9569</a>
          <a className="whatsapp-footer-link" href="https://wa.me/27751079569" target="_blank" rel="noreferrer"><WhatsAppIcon />075 107 9569</a>
          <a href="mailto:nutecmasters1@gmail.com">nutecmasters1@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Nutec Masters. All rights reserved.</span>
        <span>DESIGNED AND BUILT BY TAKUDZWA MBANO <a href="tel:+919588511784">+919588511784</a> · <a href="mailto:mbanotakudzwa2001@gmail.com">EMAIL</a></span>
      </div>
    </footer>
  )
}

export function GreenbuildHome() {
  return <><Header /><main><Hero /><Intro /><Services /><Projects /><Reasons /><Prices /><FAQ /><Contact /></main><Footer /></>
}

'use client'

import { useState } from 'react'

const photos = {
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
  intro: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
  nutec: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
  wendy: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80',
  plumbing: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
  electrical: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=80',
  flooring: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
  paving: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
  project1: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=85',
  project2: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  project3: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
}
const services = [
  ['01', 'NUTEC HOUSES', 'Premium Nutec board construction for durable, weather-resistant structures built to last.', photos.nutec],
  ['02', 'WENDY HOUSES', 'Custom Wendy houses for extra living space, home offices or garden rooms.', photos.wendy],
  ['03', 'PLUMBING', 'Expert plumbing installation and repairs for residential and commercial properties.', photos.plumbing],
  ['04', 'ELECTRICAL', 'Professional electrical services including wiring, installations and safety inspections.', photos.electrical],
  ['05', 'FLOORING', 'Quality flooring solutions from tile to hardwood, installed with precision and care.', photos.flooring],
  ['06', 'PAINTING & PAVING', 'Complete painting services and professional paving for driveways and outdoor areas.', photos.paving],
]
const faqs = [
  ['How long does a Nutec or Wendy house take to build?', 'Project timing depends on the design, size, site conditions and scope of work. Get in touch with your requirements and we can discuss a suitable schedule.'],
  ['What affects the price of a house?', 'Dimensions, materials, finishes, site access, location and any additional requirements all contribute to the final cost. We provide a tailored quotation after learning about your project.'],
  ['Can you handle other work as part of my project?', 'Yes. We also offer plumbing, electrical, flooring, painting and paving services. Tell us what you have in mind and we can discuss the full scope.'],
  ['Which areas do you serve?', 'We work across Cape Town and the Western Cape. Share your town or suburb when requesting a quote so we can confirm availability for your project.'],
]
const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Prices', '#prices'], ['Gallery', '#projects'], ['Contact', '#contact']]

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home"><span>GREENBUILD</span><small>NUTEC & WENDY HOUSES</small></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="nav-wrap"><Brand /><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button><nav className={open ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button button-dark nav-quote" href="#contact" onClick={() => setOpen(false)}>GET A FREE QUOTE</a></nav></div></header>
}

function Hero() {
  return <section className="hero" id="home" style={{ backgroundImage: `url("${photos.hero}")` }}><div className="hero-shade" /><div className="hero-content"><p className="eyebrow eyebrow-light">GREENBUILD SECURITY AND ENERGY (PTY) LTD</p><h1>BUILDING SPACES.<br />CREATING POSSIBILITIES.</h1><p className="hero-copy">Premium Nutec houses, Wendy houses and professional property improvement services across Cape Town and the Western Cape.</p><div className="hero-actions"><a className="button button-light" href="#contact">GET A FREE QUOTE <span aria-hidden="true">↗</span></a><a className="text-link text-link-light" href="#projects">EXPLORE OUR WORK <span aria-hidden="true">→</span></a></div></div><p className="hero-location">CAPE TOWN <span /> WESTERN CAPE</p><div className="hero-index">01 / 06</div></section>
}

function Intro() {
  return <section className="intro section-pad" id="about"><div className="intro-image"><img src={photos.intro} alt="Completed contemporary home with clean architectural lines" loading="lazy" /><span className="image-caption">BUILDING FOR EVERYDAY LIVING</span></div><div className="intro-copy"><p className="eyebrow">WHO WE ARE</p><h2>Practical construction.<br /><em>Quality that lasts.</em></h2><p>Greenbuild delivers reliable construction and property improvement solutions, combining quality materials, professional workmanship and attention to detail. From custom Nutec and Wendy houses to essential property services, we help clients create spaces that work for them.</p><a className="text-link" href="#contact">DISCOVER GREENBUILD <span aria-hidden="true">→</span></a><div className="intro-rule"><span>01</span><span>BUILT AROUND YOUR NEEDS</span></div></div></section>
}

function Services() {
  return <section className="services section-pad" id="services"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Considered work.<br /><em>Made to last.</em></h2></div><p>Complete construction and property improvement solutions.<br />One trusted team, from the first conversation to the finish.</p></div><div className="service-grid">{services.map(([number, title, description, image]) => <article className="service-card" key={number}><div className="service-image"><img src={image} alt={`${title.toLowerCase()} project`} loading="lazy" /><span>{number}</span></div><div className="service-info"><h3>{title}</h3><p>{description}</p><a href="#contact" className="text-link">DISCUSS THIS SERVICE <span aria-hidden="true">→</span></a></div></article>)}</div></section>
}

function Projects() {
  return <section className="projects section-pad" id="projects"><div className="section-heading section-heading-dark"><div><p className="eyebrow eyebrow-light">OUR PORTFOLIO</p><h2>Featured<br /><em>Projects</em></h2></div><div><p>A selection of our construction and property improvement work.</p><a className="text-link text-link-light" href="#contact">VIEW ALL PROJECTS <span aria-hidden="true">→</span></a></div></div><div className="project-grid"><article className="project project-large"><img src={photos.project1} alt="Modern Nutec-style residence exterior" loading="lazy" /><div className="project-label"><span>01 / RESIDENTIAL</span><h3>Modern Nutec Residence</h3><p>Cape Town, Western Cape <i /> Nutec Houses</p></div></article><article className="project"><img src={photos.project2} alt="Contemporary office interior" loading="lazy" /><div className="project-label"><span>02 / COMMERCIAL</span><h3>Office Overlap Nutech</h3><p>Western Cape <i /> Nutech Offices</p></div></article><article className="project"><img src={photos.project3} alt="Renovated residential property" loading="lazy" /><div className="project-label"><span>03 / RENOVATION</span><h3>Complete Home Renovation</h3><p>Cape Town, Western Cape <i /> Full Service</p></div></article></div></section>
}

function Reasons() {
  return <section className="reasons section-pad"><div className="section-heading"><div><p className="eyebrow">WHY GREENBUILD</p><h2>Why Clients Choose<br /><em>Greenbuild</em></h2></div><p>Good building is more than materials.<br />It is a team that takes the details seriously.</p></div><div className="reasons-grid">{['Experienced Professionals', 'Quality Materials', 'Affordable Pricing', 'Reliable Delivery', 'Attention to Detail', 'Customer Satisfaction'].map((item, index) => <div className="reason" key={item}><span>0{index + 1}</span><h3>{item}</h3><span className="reason-arrow" aria-hidden="true">↗</span></div>)}</div></section>
}

function Prices() {
  const prices = [['WOODEN WENDY HOUSES', 'Timber walls', 'R12,000'], ['NUTEC LARGE BOARDS', 'Lower-cost Nutec construction', 'R12,000'], ['NUTEC OVERLAPPING', 'Traditional overlapping finish', 'R17,000']]
  return <section className="prices section-pad" id="prices"><div className="section-heading"><div><p className="eyebrow">TRANSPARENT STARTING PRICES</p><h2>Quality construction<br /><em>at competitive prices.</em></h2></div><p>A clear place to start. Every project is different, so we&apos;ll shape a quote around your plans.</p></div><div className="price-grid">{prices.map(([title, desc, price], index) => <article className="price-card" key={title}><span className="price-index">0{index + 1}</span><h3>{title}</h3><p>{desc}</p><div className="price-from">FROM</div><div className="price-amount">{price}</div></article>)}</div><p className="price-note">Prices are starting estimates and may vary depending on dimensions, materials, location and project requirements.</p><div className="price-actions"><a className="button button-dark" href="#contact">VIEW FULL PRICE GUIDE</a><a className="button button-outline" href="#contact">REQUEST A CUSTOM QUOTE</a></div></section>
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return <section className="faq section-pad"><div className="faq-title"><p className="eyebrow">A FEW THINGS TO KNOW</p><h2>Common<br /><em>Questions</em></h2><p>Can&apos;t find what you&apos;re looking for? Our team is happy to help.</p><a className="text-link" href="#contact">TALK TO OUR TEAM <span aria-hidden="true">→</span></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button aria-expanded={active === index} aria-controls={`faq-answer-${index}`} onClick={() => setActive(active === index ? null : index)}><span>{question}</span><span className="faq-plus" aria-hidden="true">{active === index ? '−' : '+'}</span></button><div id={`faq-answer-${index}`} className="faq-answer" hidden={active !== index}><p>{answer}</p></div></div>)}</div></section>
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [`Hello Greenbuild, I would like to request a quotation.`, `Name: ${data.get('name')}`, `Phone: ${data.get('phone')}`, `Service: ${data.get('service')}`, `Town / City: ${data.get('town')}`, `Project details: ${data.get('details') || 'Not provided'}`].join('\n')
    setSubmitted(true)
    window.open(`https://wa.me/27842785134?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  return <form className="quote-form" onSubmit={submitQuote}><div className="form-heading"><p className="eyebrow eyebrow-light">TELL US ABOUT IT</p><h3>Let&apos;s get<br /><em>building.</em></h3><p>Share a few details and we&apos;ll take it from there.</p></div><label>Your name<input name="name" required autoComplete="name" placeholder="Full name" /></label><label>Phone number<input name="phone" required type="tel" autoComplete="tel" placeholder="+27" /></label><label>Service required<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{['Nutec house', 'Wendy house', 'Plumbing', 'Electrical', 'Flooring', 'Painting & Paving', 'Other'].map(option => <option key={option}>{option}</option>)}</select></label><label>Town or city<input name="town" required autoComplete="address-level2" placeholder="e.g. Cape Town" /></label><label className="form-details">Size or project details <span>(optional)</span><textarea name="details" rows={3} placeholder="Tell us a little about your project" /></label><button className="button button-light form-submit" type="submit">{submitted ? 'OPEN WHATSAPP AGAIN' : 'SEND QUOTE REQUEST'} <span aria-hidden="true">↗</span></button><p className="form-privacy">Your details will be used to respond to your quotation request.</p></form>
}

function Contact() {
  return <><section className="cta section-pad"><div><p className="eyebrow eyebrow-light">YOUR NEXT PROJECT STARTS HERE</p><h2>Ready to Start<br /><em>Your Project?</em></h2><p>Get in touch with our team for professional Nutec house, Wendy house, plumbing, electrical, flooring, painting and paving services.</p><div className="cta-actions"><a href="#contact" className="button button-light">GET A FREE QUOTE <span aria-hidden="true">↗</span></a><a href="tel:+27719012337" className="text-link text-link-light">CONTACT US TODAY <span aria-hidden="true">→</span></a></div></div><div className="cta-number">GB<span> / </span>01</div></section><section className="contact section-pad" id="contact"><div className="contact-intro"><p className="eyebrow">GET IN TOUCH</p><h2>Tell us what<br /><em>you have in mind.</em></h2><p>We&apos;ll be in touch to understand your needs and discuss a quote.</p><div className="contact-details"><a href="tel:+27719012337"><small>CALL</small>+27 71 901 2337</a><a href="https://wa.me/27842785134" target="_blank" rel="noreferrer"><small>WHATSAPP</small>+27 84 278 5134</a><a href="mailto:sibandadanzel@gmail.com"><small>EMAIL</small>sibandadanzel@gmail.com</a></div></div><QuoteForm /></section></>
}

function Footer() {
  return <footer className="footer"><div className="footer-main"><div className="footer-about"><Brand light /><p>Premium Nutec houses, Wendy houses and property improvement services in Cape Town and across the Western Cape.</p></div><div className="footer-column"><h3>QUICK LINKS</h3>{[...links, ['Privacy Policy', 'mailto:sibandadanzel@gmail.com?subject=Privacy%20Policy%20Enquiry']].map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><div className="footer-column"><h3>SERVICES</h3>{services.map(([, title]) => <a href="#services" key={title}>{title}</a>)}</div><div className="footer-column footer-contact"><h3>CONTACT</h3><a href="tel:+27719012337">+27 71 901 2337</a><a href="https://wa.me/27842785134" target="_blank" rel="noreferrer">WhatsApp: +27 84 278 5134</a><a href="mailto:sibandadanzel@gmail.com">sibandadanzel@gmail.com</a></div></div><div className="footer-bottom"><span>© 2026 Greenbuild Security and Energy (Pty) Ltd. All rights reserved.</span><span>DESIGNED AND BUILT BY TAKUDZWA MBANO <a href="tel:+919588511784">+919588511784</a> · <a href="mailto:mbanotakudzwa2001@gmail.com">EMAIL</a></span></div></footer>
}

export function GreenbuildHome() {
  return <><Header /><main><Hero /><Intro /><Services /><Projects /><Reasons /><Prices /><FAQ /><Contact /></main><Footer /></>
}

export type ServicePageContent = {
  number: string
  title: string
  heading: string
  description: string
  image: string
  imageAlt: string
  details: string[]
  gallery?: { src: string; alt: string }[]
}

export const servicePages = {
  'nutec-houses': {
    number: '01',
    title: 'Nutec Houses',
    heading: 'Built to last.',
    description: 'Premium Nutec board construction for durable, weather-resistant structures built around your needs.',
    image: '/nutec/nutec cover pic.jpeg',
    imageAlt: 'Nutec house project',
    details: ['Durable Nutec board construction', 'Weather-resistant materials', 'Project-specific design and quotation'],
    gallery: [
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.11 PM (1).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.11 PM.jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.12 PM.jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.40 PM (1).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.40 PM (2).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.40 PM.jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.41 PM (1).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.41 PM (2).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.41 PM (3).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.41 PM (4).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.41 PM.jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.42 PM (1).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.42 PM (2).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.42 PM (3).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.42 PM.jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-23 at 8.31.43 PM.jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-24 at 12.46.18 PM (1).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-24 at 12.46.18 PM (2).jpeg', alt: 'Nutec house project' },
      { src: '/nutec/WhatsApp Image 2026-11-24 at 12.46.18 PM.jpeg', alt: 'Nutec house project' },
    ],
  },
  'wendy-houses': {
    number: '02',
    title: 'Wendy Houses',
    heading: 'Make room for more.',
    description: 'Custom Wendy houses for extra living space, home offices or garden rooms.',
    image: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.08 PM.jpeg',
    imageAlt: 'Completed Wendy house project',
    details: ['Extra living space', 'Home office use', 'Garden room options'],
    gallery: [
      { src: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.08 PM (1).jpeg', alt: 'Wendy house project' },
      { src: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.08 PM (2).jpeg', alt: 'Wendy house project' },
      { src: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.08 PM.jpeg', alt: 'Wendy house project' },
      { src: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.09 PM (1).jpeg', alt: 'Wendy house project' },
      { src: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.09 PM (2).jpeg', alt: 'Wendy house project' },
      { src: '/wendy houses/WhatsApp Image 2026-11-23 at 8.34.09 PM.jpeg', alt: 'Wendy house project' },
    ],
  },
  electrical: {
    number: '04',
    title: 'Electrical Services',
    heading: 'Power your space.',
    description: 'Professional electrical services including wiring, installations and safety inspections.',
    image: '/electrical/cover.jpeg',
    imageAlt: 'Completed electrical project',
    details: ['Wiring', 'Electrical installations', 'Safety inspections'],
    gallery: [
      { src: '/electrical/cover.jpeg', alt: 'Completed electrical project' },
      { src: '/electrical/WhatsApp Image 2026-11-23 at 8.26.49 PM (1).jpeg', alt: 'Electrical project' },
      { src: '/electrical/WhatsApp Image 2026-11-23 at 8.26.49 PM (2).jpeg', alt: 'Electrical project' },
      { src: '/electrical/WhatsApp Image 2026-11-23 at 8.26.49 PM.jpeg', alt: 'Electrical project' },
      { src: '/electrical/WhatsApp Image 2026-11-23 at 8.26.50 PM.jpeg', alt: 'Electrical project' },
    ],
  },
  flooring: {
    number: '05',
    title: 'Flooring',
    heading: 'A better foundation.',
    description: 'Quality flooring solutions from tile to hardwood, installed with precision and care.',
    image: '/flooring/flooring cover.jpeg',
    imageAlt: 'Finished flooring project',
    details: ['Tile flooring', 'Hardwood flooring', 'Careful installation'],
    gallery: [
      { src: '/flooring/flooring cover.jpeg', alt: 'Finished flooring project' },
      { src: '/flooring/WhatsApp Image 2026-11-23 at 8.38.57 PM.jpeg', alt: 'Flooring project' },
      { src: '/flooring/WhatsApp Image 2026-11-23 at 8.38.58 PM.jpeg', alt: 'Flooring project' },
    ],
  },
  'painting-paving': {
    number: '06',
    title: 'Painting & Paving',
    heading: 'Finishing touches.',
    description: 'Complete painting services and professional paving for driveways and outdoor areas.',
    image: '/paving/WhatsApp Image 2026-11-23 at 8.45.41 PM.jpeg',
    imageAlt: 'Finished paving project',
    details: ['Painting services', 'Driveway paving', 'Outdoor areas'],
    gallery: [
      { src: '/paving/WhatsApp Image 2026-11-23 at 8.45.41 PM.jpeg', alt: 'Paving project' },
    ],
  },
} satisfies Record<string, ServicePageContent>

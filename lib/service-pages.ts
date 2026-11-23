export type ServicePageContent = {
  number: string
  title: string
  heading: string
  description: string
  image: string
  imageAlt: string
  details: string[]
}

export const servicePages = {
  'nutec-houses': {
    number: '01',
    title: 'Nutec Houses',
    heading: 'Built to last.',
    description: 'Premium Nutec board construction for durable, weather-resistant structures built around your needs.',
    image: '/images/nutec5.jpeg',
    imageAlt: 'Nutec house project',
    details: ['Durable Nutec board construction', 'Weather-resistant materials', 'Project-specific design and quotation'],
  },
  'wendy-houses': {
    number: '02',
    title: 'Wendy Houses',
    heading: 'Make room for more.',
    description: 'Custom Wendy houses for extra living space, home offices or garden rooms.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Wendy house and garden room inspiration',
    details: ['Extra living space', 'Home office use', 'Garden room options'],
  },
  electrical: {
    number: '04',
    title: 'Electrical Services',
    heading: 'Power your space.',
    description: 'Professional electrical services including wiring, installations and safety inspections.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Electrical installation work',
    details: ['Wiring', 'Electrical installations', 'Safety inspections'],
  },
  flooring: {
    number: '05',
    title: 'Flooring',
    heading: 'A better foundation.',
    description: 'Quality flooring solutions from tile to hardwood, installed with precision and care.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Finished flooring in a contemporary home',
    details: ['Tile flooring', 'Hardwood flooring', 'Careful installation'],
  },
  'painting-paving': {
    number: '06',
    title: 'Painting & Paving',
    heading: 'Finishing touches.',
    description: 'Complete painting services and professional paving for driveways and outdoor areas.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Finished home and outdoor paving',
    details: ['Painting services', 'Driveway paving', 'Outdoor areas'],
  },
} satisfies Record<string, ServicePageContent>

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { servicePages } from '@/lib/service-pages'

export const metadata: Metadata = {
  title: 'Painting & Paving | Nutec Masters',
  description: servicePages['painting-paving'].description,
}

export default function PaintingPavingPage() {
  return <ServiceDetailPage service={servicePages['painting-paving']} />
}

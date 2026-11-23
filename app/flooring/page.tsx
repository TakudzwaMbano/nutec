import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { servicePages } from '@/lib/service-pages'

export const metadata: Metadata = {
  title: 'Flooring | Nutec Masters',
  description: servicePages.flooring.description,
}

export default function FlooringPage() {
  return <ServiceDetailPage service={servicePages.flooring} />
}

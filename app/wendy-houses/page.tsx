import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { servicePages } from '@/lib/service-pages'

export const metadata: Metadata = {
  title: 'Wendy Houses | Nutec Masters',
  description: servicePages['wendy-houses'].description,
}

export default function WendyHousesPage() {
  return <ServiceDetailPage service={servicePages['wendy-houses']} />
}

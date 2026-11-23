import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { servicePages } from '@/lib/service-pages'

export const metadata: Metadata = {
  title: 'Nutec Houses | Nutec Masters',
  description: servicePages['nutec-houses'].description,
}

export default function NutecHousesPage() {
  return <ServiceDetailPage service={servicePages['nutec-houses']} />
}

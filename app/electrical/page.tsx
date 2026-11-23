import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { servicePages } from '@/lib/service-pages'

export const metadata: Metadata = {
  title: 'Electrical Services | Nutec Masters',
  description: servicePages.electrical.description,
}

export default function ElectricalPage() {
  return <ServiceDetailPage service={servicePages.electrical} />
}

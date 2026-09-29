import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/auth'
import { getAllEnquiries, type Enquiry } from '@/lib/db'
import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = { title: 'Admin Dashboard', robots: { index: false, follow: false } }

export default async function DashboardPage() {
  const authed = await isAdminAuthenticated()
  if (!authed) redirect('/admin')

  // A missing or unreachable database shouldn't crash the admin after a successful login
  let enquiries: Enquiry[] = []
  let dbError = false
  try {
    enquiries = await getAllEnquiries()
  } catch (err) {
    console.error('Admin dashboard: could not load enquiries', err)
    dbError = true
  }

  return <DashboardClient enquiries={enquiries} dbError={dbError} />
}

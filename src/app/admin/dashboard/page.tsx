import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/auth'
import { getAllEnquiries } from '@/lib/db'
import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = { title: 'Admin Dashboard', robots: { index: false, follow: false } }

export default async function DashboardPage() {
  const authed = await isAdminAuthenticated()
  if (!authed) redirect('/admin')

  const enquiries = getAllEnquiries()

  return <DashboardClient enquiries={enquiries} />
}

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Enquiry } from '@/lib/db'

const statusColors: Record<string, string> = {
  new: '#1A7A3C',
  read: '#6B7280',
  replied: '#1B3B6F',
  archived: '#9CA3AF',
}

export default function DashboardClient({ enquiries }: { enquiries: Enquiry[] }) {
  const [selected, setSelected] = useState<Enquiry | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const router = useRouter()

  const visible = filter === 'all' ? enquiries : enquiries.filter(e => e.status === filter)

  async function updateStatus(id: number, status: string) {
    await fetch('/api/admin/enquiry', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    router.refresh()
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : prev)
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', background: 'var(--color-off-white)' }}>
      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.125rem', marginBottom: 0 }}>Enquiries</h1>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>{enquiries.length} total · {enquiries.filter(e => e.status === 'new').length} new</p>
        </div>
        <button onClick={logout} style={{ background: 'none', border: '1px solid var(--color-border)', padding: '0.5rem 1rem', fontSize: '0.8125rem', cursor: 'pointer', color: 'var(--color-mid-grey)' }}>
          Sign out
        </button>
      </div>

      {/* Filter tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '0 2rem', display: 'flex', gap: '0' }}>
        {['all', 'new', 'read', 'replied', 'archived'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ padding: '0.875rem 1.25rem', fontSize: '0.8125rem', fontWeight: filter === f ? 600 : 400, color: filter === f ? 'var(--color-navy)' : 'var(--color-mid-grey)', background: 'none', border: 'none', borderBottom: filter === f ? '2px solid var(--color-navy)' : '2px solid transparent', cursor: 'pointer', textTransform: 'capitalize' }}>
            {f}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', maxWidth: 1200, margin: '0 auto', padding: '1.5rem 2rem', gap: '1.5rem' }}>
        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {visible.length === 0 && (
            <p style={{ color: 'var(--color-mid-grey)', padding: '3rem', textAlign: 'center', background: '#fff', border: '1px solid var(--color-border)' }}>No enquiries yet.</p>
          )}
          {visible.map(e => (
            <div key={e.id} onClick={() => setSelected(e)}
              style={{ background: '#fff', border: `1px solid ${selected?.id === e.id ? 'var(--color-navy)' : 'var(--color-border)'}`, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'border-color 0.15s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.375rem' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-navy)' }}>{e.name}</p>
                <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: statusColors[e.status] ?? '#6B7280', padding: '0.2rem 0.6rem', flexShrink: 0 }}>
                  {e.status}
                </span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)', marginBottom: '0.25rem' }}>{e.email} · {e.type}</p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.message}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-border)', marginTop: '0.75rem' }}>{new Date(e.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {selected && (
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '2rem', position: 'sticky', top: '5rem', alignSelf: 'start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.125rem' }}>{selected.name}</h2>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-mid-grey)', fontSize: '1.25rem', lineHeight: 1 }}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.75rem' }}>
              {([
                { label: 'Email', value: <a href={`mailto:${selected.email}`} style={{ color: 'var(--color-navy)', textDecoration: 'underline' }}>{selected.email}</a> },
                selected.phone ? { label: 'Phone', value: selected.phone } : null,
                selected.organisation ? { label: 'Organisation', value: selected.organisation } : null,
                { label: 'Type', value: selected.type },
                selected.event_date ? { label: 'Event date', value: selected.event_date } : null,
                { label: 'Received', value: new Date(selected.created_at).toLocaleString('en-GB') },
              ] as ({ label: string; value: React.ReactNode } | null)[]).filter((r): r is { label: string; value: React.ReactNode } => r !== null).map(row => (
                <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--color-mid-grey)', fontWeight: 600 }}>{row.label}</span>
                  <span style={{ color: 'var(--color-navy)' }}>{row.value}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', marginBottom: '1.75rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-mid-grey)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.625rem' }}>Message</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{selected.message}</p>
            </div>

            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-mid-grey)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.625rem' }}>Update status</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['new', 'read', 'replied', 'archived'].map(s => (
                  <button key={s} onClick={() => updateStatus(selected.id, s)}
                    style={{ padding: '0.4rem 0.875rem', fontSize: '0.8125rem', border: `1px solid ${selected.status === s ? 'var(--color-navy)' : 'var(--color-border)'}`, background: selected.status === s ? 'var(--color-navy)' : '#fff', color: selected.status === s ? '#fff' : 'var(--color-mid-grey)', cursor: 'pointer', textTransform: 'capitalize' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

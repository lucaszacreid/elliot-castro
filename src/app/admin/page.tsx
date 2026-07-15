'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setStatus('error')
    }
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'var(--color-off-white)' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '0.75rem', fontWeight: 600 }}>Admin</p>
          <h1 style={{ fontSize: '1.75rem' }}>Sign in</h1>
        </div>

        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2.5rem', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label htmlFor="password" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid var(--color-border)', background: '#fff', fontSize: '0.9375rem', outline: 'none', fontFamily: 'inherit' }}
            />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: '0.875rem', color: '#C0392B', padding: '0.625rem 0.875rem', background: '#FEF2F2', border: '1px solid #FCA5A5' }}>
              Incorrect password.
            </p>
          )}

          <button type="submit" disabled={status === 'loading'} className="btn-primary"
            style={{ opacity: status === 'loading' ? 0.65 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
            {status === 'loading' ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

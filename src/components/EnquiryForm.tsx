'use client'
import { useState, useRef, FormEvent } from 'react'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.875rem 1rem',
  border: '1px solid var(--color-border)',
  background: '#fff',
  fontSize: '0.9375rem',
  color: 'var(--color-text)',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--color-navy)',
  marginBottom: '0.5rem',
}

const fields = [
  { name: 'name', label: 'Full name', type: 'text' as const, required: true, placeholder: 'Your name' },
  { name: 'email', label: 'Email address', type: 'email' as const, required: true, placeholder: 'you@example.com' },
  { name: 'phone', label: 'Phone number (optional)', type: 'tel' as const, placeholder: '+44 7000 000000' },
  { name: 'organisation', label: 'Organisation', type: 'text' as const, placeholder: 'Company or event name' },
]

export default function EnquiryForm({ defaultType = 'keynote' }: { defaultType?: string }) {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: '', email: '', phone: '', organisation: '', type: defaultType, eventDate: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const honeypotRef = useRef<HTMLInputElement>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function focusBorder(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.target.style.borderColor = 'var(--color-navy)'
  }
  function blurBorder(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.target.style.borderColor = 'var(--color-border)'
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (honeypotRef.current?.value) return
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const body = await res.text()
        throw new Error(body || 'Request failed')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '3rem', background: 'var(--color-off-white)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.125rem', fontWeight: 700 }}>✓</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Enquiry received</h3>
        <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem' }}>Thank you — Elliot or his team will be in touch within 2 working days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Honeypot — hidden from real users */}
      <input ref={honeypotRef} type="text" name="website" tabIndex={-1} aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />

      {fields.map(f => (
        <div key={f.name}>
          <label htmlFor={f.name} style={labelStyle}>
            {f.label}{f.required && <span style={{ color: 'var(--color-green)', marginLeft: 2 }}>*</span>}
          </label>
          <input
            id={f.name} name={f.name} type={f.type}
            required={f.required} placeholder={f.placeholder}
            value={formData[f.name]} onChange={handleChange}
            onFocus={focusBorder} onBlur={blurBorder}
            style={inputStyle}
          />
        </div>
      ))}

      <div>
        <label htmlFor="type" style={labelStyle}>Enquiry type<span style={{ color: 'var(--color-green)', marginLeft: 2 }}>*</span></label>
        <select id="type" name="type" value={formData.type} onChange={handleChange} required
          onFocus={focusBorder} onBlur={blurBorder}
          style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
        >
          <option value="keynote">Keynote speaking</option>
          <option value="consultancy">Consultancy</option>
          <option value="media">Media / press</option>
          <option value="workshop">Workshop / training</option>
          <option value="general">General enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="eventDate" style={labelStyle}>Event date (optional)</label>
        <input id="eventDate" name="eventDate" type="date" value={formData.eventDate} onChange={handleChange}
          onFocus={focusBorder} onBlur={blurBorder} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message<span style={{ color: 'var(--color-green)', marginLeft: 2 }}>*</span></label>
        <textarea id="message" name="message" required rows={5}
          placeholder="Tell Elliot about your event, audience, and what you're hoping to achieve."
          value={formData.message} onChange={handleChange}
          onFocus={focusBorder} onBlur={blurBorder}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#C0392B', fontSize: '0.875rem', padding: '0.75rem 1rem', background: '#FEF2F2', border: '1px solid #FCA5A5' }}>
          {errorMsg || 'Something went wrong. Please try again or email elliot@elliotcastro.com directly.'}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary"
        style={{ alignSelf: 'flex-start', opacity: status === 'submitting' ? 0.65 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </button>

      <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>
        By submitting this form you agree to our <a href="/privacy-policy" style={{ color: 'var(--color-navy)', textDecoration: 'underline' }}>privacy policy</a>. Your details will only be used to respond to your enquiry.
      </p>
    </form>
  )
}

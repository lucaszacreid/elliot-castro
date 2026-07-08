'use client'

import { useState, useRef } from 'react'

type FormType = 'keynote' | 'consultancy' | 'media' | 'general'

interface Field {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  options?: string[]
  placeholder?: string
}

const fieldsByType: Record<FormType, Field[]> = {
  keynote: [
    { name: 'name', label: 'Your name', type: 'text', required: true },
    { name: 'organisation', label: 'Organisation', type: 'text', required: true },
    { name: 'email', label: 'Email address', type: 'email', required: true },
    { name: 'phone', label: 'Phone number', type: 'tel' },
    { name: 'event_date', label: 'Event date / timeframe', type: 'text', placeholder: 'e.g. March 2026 or flexible' },
    { name: 'audience_size', label: 'Estimated audience size', type: 'select', options: ['Under 50', '50–150', '150–500', '500–1000', '1000+', 'Not yet confirmed'] },
    { name: 'budget', label: 'Budget range', type: 'select', options: ['Under £5k', '£5k–£10k', '£10k–£20k', '£20k+', 'To be discussed'] },
    { name: 'message', label: 'Tell me about the event and what you\'re looking for', type: 'textarea', required: true },
  ],
  consultancy: [
    { name: 'name', label: 'Your name', type: 'text', required: true },
    { name: 'organisation', label: 'Organisation', type: 'text', required: true },
    { name: 'email', label: 'Email address', type: 'email', required: true },
    { name: 'phone', label: 'Phone number', type: 'tel' },
    { name: 'engagement_type', label: 'Type of engagement', type: 'select', options: ['Fraud risk assessment', 'Training & awareness', 'Incident response', 'Policy & process review', 'Expert advisory', 'Other'] },
    { name: 'message', label: 'Describe the challenge or project', type: 'textarea', required: true },
  ],
  media: [
    { name: 'name', label: 'Your name', type: 'text', required: true },
    { name: 'outlet', label: 'Publication / outlet', type: 'text', required: true },
    { name: 'email', label: 'Email address', type: 'email', required: true },
    { name: 'deadline', label: 'Deadline', type: 'text', placeholder: 'e.g. tomorrow 5pm, or flexible' },
    { name: 'message', label: 'What are you working on? What would you like to discuss?', type: 'textarea', required: true },
  ],
  general: [
    { name: 'name', label: 'Your name', type: 'text', required: true },
    { name: 'email', label: 'Email address', type: 'email', required: true },
    { name: 'subject', label: 'Subject', type: 'text' },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ],
}

interface Props {
  type: FormType
}

export default function EnquiryForm({ type }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const honeypotRef = useRef<HTMLInputElement>(null)

  const fields = fieldsByType[type]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (honeypotRef.current?.value) return

    setStatus('loading')
    setError('')

    const form = e.currentTarget
    const data: Record<string, string> = { type }
    fields.forEach((f) => {
      const el = form.elements.namedItem(f.name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null
      if (el) data[f.name] = el.value
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try emailing directly.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--color-ink-soft)',
    border: '1px solid var(--color-border)',
    borderRadius: '2px',
    padding: '0.875rem 1rem',
    color: 'var(--color-cream)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-muted)',
    marginBottom: '0.5rem',
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '1.25rem',
            color: 'var(--color-cream)',
            marginBottom: '0.75rem',
          }}
        >
          Enquiry received.
        </p>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
          Thank you — I&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Honeypot */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />

      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} style={labelStyle}>
            {field.label}
            {field.required && <span style={{ color: 'var(--color-oxblood)', marginLeft: '4px' }}>*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              placeholder={field.placeholder}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              <option value="">Select an option</option>
              {field.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              style={inputStyle}
            />
          )}
        </div>
      ))}

      {error && (
        <p style={{ fontSize: '0.875rem', color: 'var(--color-oxblood-light)' }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          background: 'var(--color-oxblood)',
          color: 'var(--color-cream)',
          border: 'none',
          padding: '1rem 2.5rem',
          fontSize: '0.8125rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: status === 'loading' ? 'wait' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
          transition: 'opacity 0.2s, background 0.2s',
          alignSelf: 'flex-start',
        }}
      >
        {status === 'loading' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}

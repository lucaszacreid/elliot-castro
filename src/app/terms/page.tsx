import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for elliotcastro.com',
}

export default function TermsPage() {
  return (
    <section style={{ padding: '5rem 2rem 8rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '1rem', fontWeight: 600 }}>Legal</p>
        <h1 style={{ marginBottom: '0.75rem' }}>Terms & Conditions</h1>
        <p style={{ color: 'var(--color-mid-grey)', marginBottom: '3rem' }}>Last updated: [Date — TBC]</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {[
            {
              heading: '1. Use of this website',
              body: 'By accessing elliotcastro.com, you agree to these terms. This site is provided for informational purposes only. Nothing on this site constitutes legal, financial, or professional advice.',
            },
            {
              heading: '2. Intellectual property',
              body: 'All content on this website — including text, images, and design — is the property of Elliot Castro unless otherwise stated. You may not reproduce, distribute, or republish any content without prior written permission.',
            },
            {
              heading: '3. Enquiries and engagement',
              body: 'Submitting an enquiry via the contact form does not constitute a contract or commitment on either side. Engagements are subject to separate written agreements.',
            },
            {
              heading: '4. Speaking engagements',
              body: '[Terms for speaking engagements — TBC. Include cancellation policy, payment terms, and any other standard booking terms.]',
            },
            {
              heading: '5. Limitation of liability',
              body: 'To the fullest extent permitted by law, Elliot Castro accepts no liability for any loss or damage arising from your use of this website or reliance on its content.',
            },
            {
              heading: '6. Governing law',
              body: 'These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
            },
            {
              heading: '7. Changes to these terms',
              body: 'We reserve the right to update these terms at any time. The date at the top of this page indicates when they were last revised.',
            },
          ].map(section => (
            <div key={section.heading}>
              <h2 style={{ fontSize: '1.125rem', marginBottom: '0.625rem' }}>{section.heading}</h2>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link href="/" style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>← Back to home</Link>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for elliotcastro.com',
}

export default function PrivacyPolicyPage() {
  return (
    <section style={{ padding: '5rem 2rem 8rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '1rem', fontWeight: 600 }}>Legal</p>
        <h1 style={{ marginBottom: '0.75rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--color-mid-grey)', marginBottom: '3rem' }}>Last updated: [Date — TBC]</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {[
            {
              heading: '1. Who we are',
              body: '[Elliot Castro trading name / company details — TBC. Include registered address if applicable.]',
            },
            {
              heading: '2. What information we collect',
              body: 'When you submit an enquiry via our contact form, we collect the information you provide: your name, email address, phone number (if given), organisation, and message. We also collect standard server logs (IP address, browser type, pages visited) via our hosting provider (Vercel).',
            },
            {
              heading: '3. How we use your information',
              body: 'We use the information you provide solely to respond to your enquiry. We do not sell, share, or transfer your personal data to third parties except as required to operate our services (for example, our email delivery provider, Resend).',
            },
            {
              heading: '4. Data retention',
              body: 'Enquiry submissions are retained for [period — TBC] and then deleted. You may request deletion of your data at any time by emailing elliot@elliotcastro.com.',
            },
            {
              heading: '5. Your rights',
              body: 'Under UK GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, please contact elliot@elliotcastro.com.',
            },
            {
              heading: '6. Cookies',
              body: 'This site uses no advertising or tracking cookies. We use Vercel Analytics for anonymous traffic analysis. No personally identifiable information is collected via analytics.',
            },
            {
              heading: '7. Changes to this policy',
              body: 'We may update this policy from time to time. The date at the top of this page indicates when it was last revised.',
            },
            {
              heading: '8. Contact',
              body: 'For any questions about this policy, please email elliot@elliotcastro.com.',
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

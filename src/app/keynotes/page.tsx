import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Keynote Topics',
  description: 'Keynote talks on fraud prevention, cybersecurity, social engineering, criminal psychology, insider threats, and more. Every talk tailored to your audience.',
}

const keynotes = [
  {
    id: 'fraud-prevention',
    title: 'Fraud Prevention',
    subtitle: 'How fraudsters think — and how to stop them',
    duration: '45–60 min',
    audience: 'Financial services, retail, corporate',
    body: [
      "Modern fraud is organised, sophisticated, and constantly evolving. This keynote goes inside the mind of the fraudster — how they select targets, how they exploit trust, and why security measures that look robust so often fail.",
      "Drawing on direct personal experience, Elliot explains the processes fraudsters use, the systems they exploit, and the human vulnerabilities they target. Audiences leave with a fundamentally changed understanding of where their real exposure lies.",
    ],
    points: ['How fraud networks operate in practice', 'Why intelligent people fall victim', 'The vulnerabilities most organisations overlook', 'Practical steps that actually reduce risk'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Awareness',
    subtitle: "The human layer your tech can't protect",
    duration: '45–60 min',
    audience: 'All sectors, all levels',
    body: [
      "Most security breaches don't exploit technical vulnerabilities — they exploit people. This keynote bridges the gap between technical cybersecurity and the human behaviours that undermine it.",
      "Elliot shows how criminals use publicly available information, social media, and email to construct convincing attacks — and why traditional security training so often fails to change behaviour.",
    ],
    points: ['How attackers use open-source intelligence (OSINT)', 'Why phishing still works despite awareness campaigns', 'The psychology of compliance and authority', 'Building a culture of genuine security awareness'],
  },
  {
    id: 'identity-theft',
    title: 'Identity Theft',
    subtitle: 'Who you think you are, and who criminals think you are',
    duration: '30–45 min',
    audience: 'Consumer, HR, financial services',
    body: [
      "Identity theft is one of the fastest-growing categories of fraud — and most victims don't discover it until significant damage is done. This talk explains exactly how criminals steal, use, and sell identities.",
      "Elliot maps the journey of a stolen identity from first data point to fraudulent transaction, explaining the criminal economy that makes it possible and the practical steps individuals and organisations can take to reduce exposure.",
    ],
    points: ['How identity theft actually works end-to-end', 'The value of your data on criminal markets', 'What organisations must do differently', 'What individuals can do to protect themselves'],
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering',
    subtitle: 'Manipulation is a skill. Train your team to recognise it.',
    duration: '45–60 min',
    audience: 'Corporate, HR, operations teams',
    body: [
      "Social engineering is the use of psychological manipulation to trick people into revealing confidential information or taking actions that benefit the attacker. It is behind the majority of serious corporate fraud incidents.",
      "Elliot breaks down the specific techniques used — pretexting, vishing, authority exploitation, urgency creation — with real examples. He explains why intelligent, experienced employees are successfully manipulated, and what actually builds resilience.",
    ],
    points: ['The six principles of influence used by criminals', 'How pretexting and impersonation work in practice', 'Why urgency is the most effective attack vector', 'Building team resilience without creating paranoia'],
  },
  {
    id: 'psychology',
    title: 'Criminal Psychology',
    subtitle: 'Why ordinary people commit extraordinary crimes',
    duration: '45–60 min',
    audience: 'HR, leadership, financial crime teams',
    body: [
      "The popular image of the fraudster — calculating, amoral, identifiable — is wrong. Most people who commit financial crime begin as ordinary individuals who cross a line. Understanding why this happens is the first step to preventing it.",
      "This keynote explores the psychology of fraud from the inside. How rationalisations are constructed. How opportunity combines with pressure. What the trajectory from first transgression to serious crime actually looks like.",
    ],
    points: ['The fraud triangle: pressure, opportunity, rationalisation', 'How ordinary people explain criminal behaviour to themselves', 'Early warning indicators organisations often miss', 'Creating an environment where fraud is less likely to start'],
  },
  {
    id: 'insider-threats',
    title: 'Insider Threats',
    subtitle: 'The risk already inside your organisation',
    duration: '45–60 min',
    audience: 'Corporate, financial services, security teams',
    body: [
      "Insider threats — employees, contractors, and trusted partners who misuse their access — account for a significant proportion of corporate fraud losses. They are also the hardest to detect and the most damaging to organisational culture.",
      "Elliot addresses insider threats from both directions: how they develop, and how to detect and prevent them without creating a culture of surveillance and mistrust. He draws on experience from both sides of the problem.",
    ],
    points: ["How insider fraud typically starts and escalates", "The difference between malicious insiders and negligent ones", "Detection indicators that don't require monitoring employees", 'Building trust while maintaining appropriate controls'],
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    subtitle: 'Seeing risk the way criminals see opportunity',
    duration: '45–60 min',
    audience: 'Leadership, risk and compliance, financial services',
    body: [
      "Conventional risk management frameworks identify risk categories and assign probabilities. Criminals don't think in frameworks — they think in opportunities. This keynote gives risk professionals a different lens for evaluating their exposures.",
      "Elliot walks through how a criminal maps an organisation, identifies weaknesses, and selects the most viable attack vector. Understanding this process changes how risk teams prioritise and what controls they deploy.",
    ],
    points: ['How criminals assess organisational vulnerability', 'Why risk registers miss the most important exposures', 'Translating criminal thinking into risk frameworks', 'Practical prioritisation for limited resources'],
  },
  {
    id: 'ethics',
    title: 'Ethics & Transformation',
    subtitle: 'Accountability, change, and what comes after',
    duration: '30–45 min',
    audience: 'Corporate culture, leadership, DEI and inclusion events',
    body: [
      "Elliot's story is ultimately one of accountability and transformation — taking responsibility for serious wrongdoing and rebuilding a credible, productive life. This keynote addresses the human dimensions of ethical failure: how it happens, how it is rationalised, and what genuine accountability requires.",
      "It is particularly appropriate for leadership events, culture programmes, and organisations addressing ethical failures of their own. It is not a cautionary tale — it is a practical examination of the conditions that lead people away from their own values, and how to change them.",
    ],
    points: ["How ethical failure develops incrementally", "What genuine accountability looks like (and what it doesn't)", 'Rebuilding trust after serious wrongdoing', 'Creating conditions for ethical behaviour'],
  },
]

export default function KeynotesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Keynote Speaking</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 700, lineHeight: 1.12, marginBottom: '1.5rem' }}>
              Talks built on lived experience, not research.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.8 }}>
              Every keynote is tailored to your sector, audience, and event objectives. Elliot speaks from genuine personal experience — the expertise is not theoretical.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Keynote list ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {keynotes.map((k, i) => (
              <AnimateIn key={k.id} delay={i * 40}>
                <div id={k.id} style={{ borderBottom: '1px solid var(--color-border)', padding: '4rem 0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left */}
                    <div style={{ position: 'sticky', top: '6rem' }}>
                      <div style={{ width: 32, height: 3, background: 'var(--color-green)', marginBottom: '1.5rem' }} />
                      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{k.title}</h2>
                      <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>{k.subtitle}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}><span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Duration:</span> {k.duration}</p>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}><span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Audience:</span> {k.audience}</p>
                      </div>
                      <Link href="/contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.8125rem' }}>
                        Enquire about this talk
                      </Link>
                    </div>

                    {/* Right */}
                    <div>
                      {k.body.map((para, j) => (
                        <p key={j} style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85, marginBottom: '1.25rem' }}>{para}</p>
                      ))}
                      <div style={{ marginTop: '2rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: '1rem' }}>Key takeaways</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {k.points.map(pt => (
                            <li key={pt} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--color-navy)' }}>
                              <span style={{ color: 'var(--color-green)', fontWeight: 700, flexShrink: 0, marginTop: '0.1em' }}>—</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)', borderTop: '1px solid var(--color-border)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-label" style={{ textAlign: 'center' }}>Book Elliot</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to discuss your event?</h2>
            <p style={{ color: 'var(--color-mid-grey)', marginBottom: '2.5rem' }}>
              Elliot takes on a limited number of speaking engagements each year. Get in touch early to discuss availability and how the talk can be tailored to your audience.
            </p>
            <Link href="/contact" className="btn-primary">Make a speaking enquiry</Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}

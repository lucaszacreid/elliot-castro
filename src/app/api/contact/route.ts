import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENT = process.env.CONTACT_EMAIL ?? 'elliot@elliotcastro.com'

const subjectByType: Record<string, string> = {
  keynote: '[Keynote Enquiry]',
  consultancy: '[Consultancy Enquiry]',
  media: '[Media Enquiry]',
  general: '[General Enquiry]',
}

function formatBody(data: Record<string, string>): string {
  return Object.entries(data)
    .filter(([k]) => k !== 'type')
    .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${v}`)
    .join('\n\n')
}

export async function POST(req: NextRequest) {
  try {
    const data: Record<string, string> = await req.json()

    const { type, name, email } = data

    if (!type || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const subject = `${subjectByType[type] ?? '[Enquiry]'} from ${name}`
    const text = formatBody(data)

    await resend.emails.send({
      from: 'Elliot Castro Website <noreply@elliotcastro.com>',
      to: RECIPIENT,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

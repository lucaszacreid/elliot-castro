import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { insertEnquiry } from '@/lib/db'

const RECIPIENT = process.env.CONTACT_EMAIL ?? 'elliot@elliotcastro.com'

export async function POST(req: NextRequest) {
  try {
    const data: Record<string, string> = await req.json()
    const { name, email, message, type } = data

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store in database
    insertEnquiry({
      name,
      email,
      phone: data.phone ?? '',
      organisation: data.organisation ?? '',
      type: type ?? 'general',
      event_date: data.eventDate ?? '',
      message,
    })

    // Send notification email
    const resend = new Resend(process.env.RESEND_API_KEY)

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.organisation ? `Organisation: ${data.organisation}` : null,
      `Type: ${type ?? 'general'}`,
      data.eventDate ? `Event date: ${data.eventDate}` : null,
      '',
      'Message:',
      message,
    ].filter(l => l !== null).join('\n')

    const typeLabel: Record<string, string> = {
      keynote: '[Keynote]',
      consultancy: '[Consultancy]',
      media: '[Media]',
      workshop: '[Workshop]',
      general: '[General]',
    }

    await resend.emails.send({
      from: 'Elliot Castro Website <noreply@elliotcastro.com>',
      to: RECIPIENT,
      replyTo: email,
      subject: `${typeLabel[type] ?? '[Enquiry]'} from ${name}`,
      text: lines,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Enquiry error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

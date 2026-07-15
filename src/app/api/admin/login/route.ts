import { NextRequest, NextResponse } from 'next/server'
import { checkPassword, createSessionToken } from '@/lib/auth'

const COOKIE_NAME = 'ec_admin_session'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()

    if (!checkPassword(password)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = createSessionToken()
    const res = NextResponse.json({ ok: true })

    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: MAX_AGE,
      path: '/',
    })

    return res
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

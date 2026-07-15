import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

const SECRET = process.env.ADMIN_SECRET ?? 'change-this-secret-before-launch'
const COOKIE = 'ec_admin_session'

export function hashPassword(password: string): string {
  return createHmac('sha256', SECRET).update(password).digest('hex')
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? ''
  if (!expected) return false
  const a = Buffer.from(hashPassword(input))
  const b = Buffer.from(hashPassword(expected))
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export function createSessionToken(): string {
  const payload = `admin:${Date.now()}`
  return createHmac('sha256', SECRET).update(payload).digest('hex') + ':' + payload
}

export function verifySessionToken(token: string): boolean {
  const parts = token.split(':')
  if (parts.length < 3) return false
  const [sig, ...rest] = parts
  const payload = rest.join(':')
  const expected = createHmac('sha256', SECRET).update(payload).digest('hex')
  return timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE)?.value
  if (!token) return false
  return verifySessionToken(token)
}

export const ADMIN_COOKIE = COOKIE

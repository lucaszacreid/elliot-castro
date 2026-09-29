import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

const SECRET = process.env.ADMIN_SECRET ?? 'change-this-secret-before-launch'
const COOKIE = 'ec_admin_session'

export function hashPassword(password: string): string {
  return createHmac('sha256', SECRET).update(password).digest('hex')
}

export function checkPassword(input: unknown): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? ''
  if (!expected || typeof input !== 'string') return false
  const a = Buffer.from(hashPassword(input))
  const b = Buffer.from(hashPassword(expected))
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export function createSessionToken(): string {
  const payload = `admin:${Date.now()}`
  return createHmac('sha256', SECRET).update(payload).digest('hex') + ':' + payload
}

// Matches the cookie maxAge set at login
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000

export function verifySessionToken(token: string): boolean {
  const parts = token.split(':')
  if (parts.length < 3) return false
  const [sig, ...rest] = parts
  const payload = rest.join(':')
  const expected = createHmac('sha256', SECRET).update(payload).digest('hex')
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false
  const issuedAt = Number(parts[parts.length - 1])
  return Number.isFinite(issuedAt) && Date.now() - issuedAt < SESSION_MAX_AGE_MS
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE)?.value
  if (!token) return false
  return verifySessionToken(token)
}

export const ADMIN_COOKIE = COOKIE

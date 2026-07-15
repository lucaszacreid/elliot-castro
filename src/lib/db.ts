import { createClient } from '@libsql/client'

export interface Enquiry {
  id: number
  created_at: string
  name: string
  email: string
  phone: string | null
  organisation: string | null
  type: string
  event_date: string | null
  message: string
  status: string
}

function getClient() {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN
  if (!url) throw new Error('TURSO_DATABASE_URL is not set')
  return createClient({ url, authToken })
}

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS enquiries (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
    name         TEXT    NOT NULL,
    email        TEXT    NOT NULL,
    phone        TEXT,
    organisation TEXT,
    type         TEXT    NOT NULL,
    event_date   TEXT,
    message      TEXT    NOT NULL,
    status       TEXT    NOT NULL DEFAULT 'new'
  )
`

export async function insertEnquiry(data: Omit<Enquiry, 'id' | 'created_at' | 'status'>) {
  const client = getClient()
  await client.execute(SCHEMA)
  await client.execute({
    sql: `INSERT INTO enquiries (name, email, phone, organisation, type, event_date, message)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
    args: [
      data.name,
      data.email,
      data.phone ?? null,
      data.organisation ?? null,
      data.type,
      data.event_date ?? null,
      data.message,
    ],
  })
}

export async function getAllEnquiries(): Promise<Enquiry[]> {
  const client = getClient()
  await client.execute(SCHEMA)
  const result = await client.execute('SELECT * FROM enquiries ORDER BY created_at DESC')
  return result.rows.map(row => ({
    id: row.id as number,
    created_at: row.created_at as string,
    name: row.name as string,
    email: row.email as string,
    phone: row.phone as string | null,
    organisation: row.organisation as string | null,
    type: row.type as string,
    event_date: row.event_date as string | null,
    message: row.message as string,
    status: row.status as string,
  }))
}

export async function updateEnquiryStatus(id: number, status: string) {
  const client = getClient()
  await client.execute({
    sql: 'UPDATE enquiries SET status = ? WHERE id = ?',
    args: [status, id],
  })
}

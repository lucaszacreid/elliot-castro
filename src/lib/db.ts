import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

const DB_PATH = process.env.DATABASE_PATH ?? path.join(process.cwd(), 'data', 'enquiries.db')

function getDb() {
  const dir = path.dirname(DB_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const db = new Database(DB_PATH)
  db.pragma('journal_mode = WAL')

  db.exec(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
      name        TEXT    NOT NULL,
      email       TEXT    NOT NULL,
      phone       TEXT,
      organisation TEXT,
      type        TEXT    NOT NULL,
      event_date  TEXT,
      message     TEXT    NOT NULL,
      status      TEXT    NOT NULL DEFAULT 'new'
    )
  `)

  return db
}

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

export function insertEnquiry(data: Omit<Enquiry, 'id' | 'created_at' | 'status'>) {
  const db = getDb()
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, email, phone, organisation, type, event_date, message)
    VALUES (@name, @email, @phone, @organisation, @type, @event_date, @message)
  `)
  const result = stmt.run(data)
  db.close()
  return result.lastInsertRowid
}

export function getAllEnquiries(): Enquiry[] {
  const db = getDb()
  const rows = db.prepare('SELECT * FROM enquiries ORDER BY created_at DESC').all() as Enquiry[]
  db.close()
  return rows
}

export function updateEnquiryStatus(id: number, status: string) {
  const db = getDb()
  db.prepare('UPDATE enquiries SET status = ? WHERE id = ?').run(status, id)
  db.close()
}

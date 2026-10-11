/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `subject` (text, not null) — message subject line
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, default now()) — submission timestamp
  - `read` (boolean, default false) — tracks whether Ayush has read the message

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public can submit messages).
- No SELECT/UPDATE/DELETE for anon — only the project owner can read/manage
  submissions via the Supabase dashboard (service role key bypasses RLS).

3. Notes
- This is a no-auth portfolio site. The anon-key client needs INSERT access
  so the contact form can submit messages without a login screen.
- Submissions are managed from the Supabase dashboard, not from the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean NOT NULL DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

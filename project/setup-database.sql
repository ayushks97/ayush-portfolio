-- =====================================================
-- PORTFOLIO CONTACT FORM DATABASE SETUP
-- Run this SQL in Supabase SQL Editor
-- =====================================================

-- Step 1: Create the table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean NOT NULL DEFAULT false
);

-- Step 2: Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 3: Drop existing policy if any (to avoid duplicates)
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;

-- Step 4: Create policy to allow anonymous inserts
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Step 5: Create policy to allow service role to read all
DROP POLICY IF EXISTS "service_role_all_access" ON contact_submissions;
CREATE POLICY "service_role_all_access"
ON contact_submissions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Step 6: Verify the setup
-- Run this to check if table exists:
SELECT 
  schemaname,
  tablename,
  tableowner
FROM pg_tables 
WHERE tablename = 'contact_submissions';

-- Step 7: Check RLS policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- =====================================================
-- SETUP COMPLETE!
-- =====================================================
-- You can now test by inserting a record:
-- INSERT INTO contact_submissions (name, email, subject, message)
-- VALUES ('Test User', 'test@example.com', 'Test Subject', 'Test message');
--
-- To view submissions, go to:
-- Supabase Dashboard > Table Editor > contact_submissions
-- =====================================================

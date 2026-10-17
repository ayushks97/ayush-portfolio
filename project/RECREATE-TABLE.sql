-- =====================================================
-- FIX: Recreate contact_submissions table with CORRECT structure
-- =====================================================

-- IMPORTANT: This will DELETE existing data!
-- If you have important data, export it first from Table Editor

-- Step 1: Drop the existing (wrong) table
DROP TABLE IF EXISTS contact_submissions CASCADE;

-- Step 2: Create table with CORRECT columns
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,              -- ✅ CORRECT column name
  email text NOT NULL,             -- ✅ CORRECT column name
  subject text NOT NULL,           -- ✅ CORRECT column name
  message text NOT NULL,           -- ✅ CORRECT column name
  created_at timestamptz DEFAULT now(),
  read boolean NOT NULL DEFAULT false
);

-- Step 3: Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 4: Create policy for anonymous inserts
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Step 5: Create policy for authenticated reads (for admin dashboard)
CREATE POLICY "authenticated_read_contact_submissions"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

-- Step 6: Verify table structure
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- Step 7: Test insert
INSERT INTO contact_submissions (name, email, subject, message)
VALUES ('Test User', 'test@example.com', 'Test Subject', 'This is a test message after recreating the table.');

-- Step 8: Verify insert worked
SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 5;

-- =====================================================
-- SUCCESS! Table is now created with correct structure!
-- =====================================================

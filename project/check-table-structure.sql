-- =====================================================
-- CHECK ACTUAL TABLE STRUCTURE
-- Run this to see what columns actually exist
-- =====================================================

-- Method 1: Check columns in contact_submissions table
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- =====================================================
-- This will show EXACT column names that exist
-- =====================================================

-- After seeing the columns, if they're wrong, 
-- DROP the table and recreate with correct structure:

-- Step 1: Drop existing table (CAREFUL!)
-- DROP TABLE IF EXISTS contact_submissions;

-- Step 2: Create with CORRECT structure
-- CREATE TABLE contact_submissions (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   name text NOT NULL,
--   email text NOT NULL,
--   subject text NOT NULL,
--   message text NOT NULL,
--   created_at timestamptz DEFAULT now(),
--   read boolean NOT NULL DEFAULT false
-- );

-- Step 3: Enable RLS
-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 4: Add policy
-- CREATE POLICY "anon_insert_contact_submissions"
-- ON contact_submissions FOR INSERT
-- TO anon, authenticated
-- WITH CHECK (true);

-- =====================================================
-- FIX FOR EXISTING TABLE
-- Table already exists, just need to update policies
-- =====================================================

-- Step 1: Drop the existing policy first
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;

-- Step 2: Recreate the policy
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Step 3: Verify the policy exists
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
-- DONE! Now test your contact form
-- =====================================================

-- =====================================================
-- TEST THE CONTACT FORM DATABASE
-- Run this to verify everything is working
-- =====================================================

-- Test 1: Check if table exists
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public'
   AND table_name = 'contact_submissions'
);
-- Expected: true ✅

-- Test 2: Check RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_submissions';
-- Expected: rowsecurity = true ✅

-- Test 3: Check policies
SELECT policyname, cmd, roles
FROM pg_policies 
WHERE tablename = 'contact_submissions';
-- Expected: Should show "anon_insert_contact_submissions" policy ✅

-- Test 4: Try a test insert (as anon user would do)
INSERT INTO contact_submissions (name, email, subject, message)
VALUES ('Test User', 'test@example.com', 'Test Form Submission', 'This is a test message from the SQL editor to verify the form will work.');
-- Expected: Success! ✅

-- Test 5: Verify the insert worked
SELECT 
  id,
  name,
  email,
  subject,
  message,
  created_at,
  read
FROM contact_submissions 
ORDER BY created_at DESC 
LIMIT 5;
-- Expected: Should show the test record ✅

-- =====================================================
-- If all tests pass, your contact form will work! 🎉
-- =====================================================

-- Optional: Delete test record (if you want)
-- DELETE FROM contact_submissions WHERE email = 'test@example.com';

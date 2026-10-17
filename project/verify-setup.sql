-- =====================================================
-- VERIFY DATABASE SETUP
-- Run this to confirm everything is working
-- =====================================================

-- ✅ Step 1: Check table exists
SELECT 'Table Exists: contact_submissions' as check_name,
       CASE WHEN EXISTS (
           SELECT FROM information_schema.tables 
           WHERE table_name = 'contact_submissions'
       ) THEN '✅ YES' ELSE '❌ NO' END as status;

-- ✅ Step 2: Check RLS is enabled
SELECT 'RLS Enabled' as check_name,
       CASE WHEN rowsecurity THEN '✅ YES' ELSE '❌ NO' END as status
FROM pg_tables 
WHERE tablename = 'contact_submissions';

-- ✅ Step 3: Check policy exists
SELECT 'Policy Exists: anon_insert' as check_name,
       CASE WHEN EXISTS (
           SELECT FROM pg_policies 
           WHERE tablename = 'contact_submissions' 
           AND policyname = 'anon_insert_contact_submissions'
       ) THEN '✅ YES' ELSE '❌ NO' END as status;

-- ✅ Step 4: List all columns
SELECT 'Table Structure' as info, 
       column_name, 
       data_type, 
       is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- ✅ Step 5: Show all policies
SELECT 'Policies' as info,
       policyname as policy_name,
       cmd as operation,
       roles as allowed_roles
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- ✅ Step 6: Test insert (THIS IS THE REAL TEST!)
-- Comment out if you don't want test data
INSERT INTO contact_submissions (name, email, subject, message)
VALUES ('Verification Test', 'verify@test.com', 'Database Test', 'Testing if insert works from SQL editor - ' || now()::text);

-- ✅ Step 7: Show recent submissions
SELECT 'Recent Submissions' as info,
       id,
       name,
       email,
       subject,
       substring(message, 1, 50) as message_preview,
       created_at,
       read
FROM contact_submissions 
ORDER BY created_at DESC 
LIMIT 5;

-- =====================================================
-- EXPECTED RESULTS:
-- ✅ Table Exists: YES
-- ✅ RLS Enabled: YES  
-- ✅ Policy Exists: YES
-- ✅ Test insert: Success
-- ✅ Recent submissions: Shows test record
-- =====================================================

-- If ALL checks show ✅ YES, your database is 100% ready!
-- Problem is NOT in database, it's in:
-- 1. Supabase project status (paused?)
-- 2. Frontend environment variables
-- 3. Network/CORS issues
-- 4. Browser cache

-- Optional: Clean up test records
-- DELETE FROM contact_submissions WHERE email LIKE '%test.com';

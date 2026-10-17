# ⚡ QUICK START - Contact Form Fix

## 🚨 PROBLEM: "Failed to fetch" error

## ✅ SOLUTION (2 Minutes)

---

## Step 1: Open Supabase Dashboard

🔗 **Link**: https://supabase.com/dashboard

1. Login karein
2. Project select karein: **wlwkwwlbyzhuqhrtyhav**
3. Check karein ki project **Active** hai (not paused)

---

## Step 2: Run This SQL

1. **SQL Editor** pe jao (left sidebar)
2. **New Query** click karein
3. Neeche diya hua SQL **copy-paste** karein
4. **RUN** button (ya F5) press karein

```sql
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
```

5. Success message dekho ✅

---

## Step 3: Verify Table

1. **Table Editor** pe jao
2. Left mein **contact_submissions** table dikhna chahiye
3. Agar dikha = **SUCCESS!** ✅

---

## Step 4: Test Your Website

1. Website **refresh** karein (Ctrl + R)
2. Contact form **fill** karein
3. **Submit** karein
4. **Success modal** dikhna chahiye! 🎉

---

## 🎯 Done!

Ab form properly kaam karega!

---

## ⚠️ Agar Abhi Bhi Issue Hai

### Check:
1. **Browser Console** (F12) kholo
2. Koi **red error** dikha?
3. **Network tab** mein failed request dekho

### Common Issues:

**Error: "Project Paused"**
- Solution: Dashboard mein Resume button click karo

**Error: "Invalid API Key"**
- Solution: `.env` file check karo

**Error: "Network Error"**
- Solution: Internet connection check karo

---

## 📧 Can't Fix It?

**Temporary Solution**: 
Users ko email directly bhejne do:
**sayushkumar33@gmail.com**

---

## 📁 Helpful Files

- `FIX-CONTACT-FORM.md` - Detailed troubleshooting
- `setup-database.sql` - Complete SQL script
- `SETUP-INSTRUCTIONS.md` - Full setup guide

---

**That's it! Simple! 🚀**

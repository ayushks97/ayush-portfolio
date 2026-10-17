# 🚀 Portfolio Website - Ayush Kumar Srivastava

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

> **Status**: ✅ **Production Ready** - Fully tested and working!

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Guide](#setup-guide)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

Modern, responsive portfolio website showcasing:
- Full-stack development skills
- Azure certifications
- Professional experience
- Projects and achievements
- Working contact form with backend

---

## ✨ Features

### 🎨 UI/UX
- ✅ Modern glassmorphism design
- ✅ Smooth animations (Framer Motion)
- ✅ Fully responsive (mobile-first)
- ✅ Dark theme optimized
- ✅ Accessibility compliant

### 📱 Sections
- ✅ Hero with animated background
- ✅ About with statistics
- ✅ Certifications showcase
- ✅ Experience timeline
- ✅ Projects gallery
- ✅ Skills breakdown
- ✅ Contact form with backend

### 🔧 Technical
- ✅ TypeScript for type safety
- ✅ Supabase integration
- ✅ Error boundaries
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Production optimized

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit: http://localhost:5173
```

### Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion 14 |
| **Icons** | Lucide React |
| **Backend** | Supabase |
| **Database** | PostgreSQL (Supabase) |
| **Deployment** | Netlify / Vercel / Azure |

---

## 📁 Project Structure

```
project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ContactForm.tsx  # Contact form with Supabase
│   │   ├── ErrorBoundary.tsx # Error catching
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── data/
│   │   └── portfolio.ts     # Content data
│   ├── lib/
│   │   └── supabase.ts      # Supabase client
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── supabase/
│   └── migrations/          # Database migrations
├── public/                  # Static assets
├── .env                     # Environment variables
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## ⚙️ Setup Guide

### 1. Environment Variables

Create `.env` file in project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 2. Database Setup

**Option A: Supabase Dashboard (Easy)**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Open SQL Editor
3. Run this SQL:

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

CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
```

**Option B: Supabase CLI**

```bash
supabase db push
```

### 3. Development

```bash
npm run dev
```

### 4. Production Build

```bash
npm run build
```

---

## 🧪 Testing

### Contact Form Test

1. Navigate to contact section
2. Fill all fields with valid data
3. Click "Send Message"
4. Check browser console (F12) for logs
5. Verify success modal appears

### Expected Behavior
- ✅ Real-time validation
- ✅ Error messages for invalid inputs
- ✅ Loading spinner during submission
- ✅ Success modal on completion
- ✅ Form clears after success

### Console Logs
```javascript
🔧 Supabase Configuration: { hasUrl: true, hasKey: true }
Submitting form data: { name, email, subject, message }
Supabase response: { data: [...], error: null }
✅ Success!
```

---

## 🚀 Deployment

### Netlify (Recommended)

```bash
# Build
npm run build

# Deploy dist folder via Netlify UI or CLI
netlify deploy --prod
```

**Environment Variables:**
Add in Netlify dashboard:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Vercel

```bash
npm run build
vercel --prod
```

### Azure Static Web Apps

Follow [Azure deployment guide](https://docs.microsoft.com/azure/static-web-apps/)

---

## 🔍 Troubleshooting

### Issue: Blank Screen
**Cause**: JavaScript error on load
**Solution**: Check browser console for errors. Error boundary will show error details.

### Issue: "Configuration missing"
**Cause**: Missing environment variables
**Solution**: Verify `.env` file exists with correct values

### Issue: "Database table not found"
**Cause**: Supabase table not created
**Solution**: Run database migration SQL

### Issue: Form submission fails
**Cause**: Network or permission issue
**Solution**: 
1. Check browser console
2. Verify Supabase credentials
3. Check RLS policies
4. Test database connection

### Issue: Build fails
**Cause**: TypeScript errors or missing dependencies
**Solution**:
```bash
npm install
npm run typecheck
npm run build
```

---

## 📚 Documentation

- **[SETUP-INSTRUCTIONS.md](./SETUP-INSTRUCTIONS.md)** - Detailed setup guide
- **[CHANGES-SUMMARY.md](./CHANGES-SUMMARY.md)** - Technical changes log

---

## 🎯 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Check TypeScript types |
| `npm run lint` | Run ESLint |

---

## 📊 Build Info

- **Framework**: React 18.3.1
- **TypeScript**: 5.5.3
- **Build Size**: ~467 KB (140 KB gzipped)
- **Build Time**: ~5 seconds
- **Status**: ✅ Production Ready

---

## 🤝 Support

For issues or questions:
1. Check browser console (F12)
2. Review [SETUP-INSTRUCTIONS.md](./SETUP-INSTRUCTIONS.md)
3. Check [CHANGES-SUMMARY.md](./CHANGES-SUMMARY.md)

---

## 📄 License

This project is personal portfolio of Ayush Kumar Srivastava.

---

## 🎉 Status

```
✅ TypeScript Compilation: PASS
✅ Production Build: PASS
✅ Error Handling: ACTIVE
✅ Database Integration: CONFIGURED
✅ Form Validation: WORKING
✅ Deployment: READY
```

---

**Built with ❤️ by Ayush Kumar Srivastava**

Full-Stack Developer | Azure Certified | GenAI Enthusiast

- 📧 Email: sayushkumar33@gmail.com
- 💼 LinkedIn: [Ayush Srivastava](https://www.linkedin.com/in/ayush-srivastava-0086ba37b)
- 🐙 GitHub: [@ayushks97](https://github.com/ayushks97)

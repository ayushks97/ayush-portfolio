import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';
import type { ContactFormData, FormErrors } from '@/data/portfolio';

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validateField(field: keyof ContactFormData, value: string): string | undefined {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      break;
    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
      break;
    case 'subject':
      if (!value.trim()) return 'Subject is required';
      if (value.trim().length < 3) return 'Subject must be at least 3 characters';
      break;
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      break;
  }
}

function validateAll(data: ContactFormData): FormErrors {
  return {
    name: validateField('name', data.name),
    email: validateField('email', data.email),
    subject: validateField('subject', data.subject),
    message: validateField('message', data.message),
  };
}

const fieldConfig: {
  name: keyof ContactFormData;
  label: string;
  type: string;
  placeholder: string;
  textarea?: boolean;
  rows?: number;
}[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Collaboration opportunity' },
  { name: 'message', label: 'Message', type: 'text', placeholder: 'Tell me about your project...', textarea: true, rows: 4 },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof ContactFormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    setTouched({ name: false, email: false, subject: false, message: false });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullErrors = validateAll(formData);
    setErrors(fullErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.values(fullErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Configuration missing — unable to send message.');
      }

      // Direct Supabase REST API insert call (fixes JSON error)
      const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        let errMsg = `Request failed (${response.status})`;
        try {
          const errJson = JSON.parse(errText);
          errMsg = errJson.message || errJson.error || errMsg;
        } catch {
          if (errText) errMsg = errText;
        }
        throw new Error(errMsg);
      }

      setIsSubmitted(true);
      setFormData(EMPTY_FORM);
      setErrors({});
      setTouched({ name: false, email: false, subject: false, message: false });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-7">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-[60px]" />

      <div className="relative mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10">
          <Send size={18} className="text-indigo-300" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Send a Message</h3>
          <p className="text-xs text-gray-500">I'll get back to you within 48 hours</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-4" noValidate>
        {fieldConfig.map((field) => {
          const error = errors[field.name];
          const isTouched = touched[field.name];
          const hasError = Boolean(error && isTouched);

          return (
            <div key={field.name} className="space-y-1.5">
              <label htmlFor={field.name} className="text-xs font-medium text-gray-400">
                {field.label}
              </label>
              {field.textarea ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={field.rows}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  onBlur={() => handleBlur(field.name)}
                  placeholder={field.placeholder}
                  className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 transition-all focus:outline-none focus:ring-2 ${
                    hasError
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-white/10 focus:border-indigo-500/40 focus:ring-indigo-500/20'
                  }`}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  onBlur={() => handleBlur(field.name)}
                  placeholder={field.placeholder}
                  className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 transition-all focus:outline-none focus:ring-2 ${
                    hasError
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-white/10 focus:border-indigo-500/40 focus:ring-indigo-500/20'
                  }`}
                />
              )}
              <AnimatePresence>
                {hasError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-1.5 text-xs text-red-400"
                  >
                    <AlertCircle size={12} />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Submit error */}
        <AnimatePresence>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              <AlertCircle size={16} />
              {submitError}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:from-indigo-500 hover:to-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Send size={16} className="relative" />
              <span className="relative">Send Message</span>
            </>
          )}
        </button>
      </form>

      {/* Success modal/toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[#0a0f1e]/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col items-center gap-4 px-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10"
              >
                <CheckCircle2 size={32} className="text-emerald-400" />
              </motion.div>
              <div className="space-y-1">
                <h4 className="text-lg font-semibold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={resetForm}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  Send Another
                </button>
              </div>
              <button
                onClick={resetForm}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
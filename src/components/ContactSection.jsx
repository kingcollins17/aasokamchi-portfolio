import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  ArrowUpRight,
  Loader2,
  Mail,
  Phone,
  AlertCircle,
} from 'lucide-react';
import { profile } from '../data/portfolioData';
import Reveal from './Reveal';

const initialForm = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMsg('Email service is not configured. Please reach out via email directly.');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.from_name,
          name: form.from_name,
          from_email: form.from_email,
          email: form.from_email,
          reply_to: form.from_email,
          subject: form.subject || 'Executive Assistant | Project Manager Inquiry',
          message: form.message,
          to_name: profile.fullName,
        },
        { publicKey }
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err?.text || 'Something went wrong sending your message. Please try again or email directly.'
      );
    }
  };

  return (
    <section id="contact" className="bg-[#F2EFE9] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Contact Details */}
          <Reveal className="lg:col-span-5">
            <p className="font-['Playfair_Display',serif] text-base italic text-[#7DB028] sm:text-lg">
              Get in Touch
            </p>
            <h2 className="mt-2 font-['Inter',sans-serif] text-3xl font-bold leading-tight tracking-tight text-[#14241E] sm:text-4xl">
              Let&apos;s Streamline Your Daily Operations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5C645E]">
              Ready to delegate inbox management, calendar coordination, client support, or content scheduling? Send a message and I&apos;ll respond promptly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 rounded-2xl border border-[#E3DDD2] bg-[#FAF8F5] p-4 transition hover:border-[#84B82E]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14241E] text-[#84B82E]">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#68706A]">Email</p>
                  <p className="truncate text-sm font-semibold text-[#14241E]">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3.5 rounded-2xl border border-[#E3DDD2] bg-[#FAF8F5] p-4 transition hover:border-[#84B82E]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14241E] text-[#84B82E]">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-[#68706A]">Telephone</p>
                  <p className="text-sm font-semibold text-[#14241E]">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-[#E3DDD2] bg-[#FAF8F5] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14241E] text-[#84B82E]">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-[#68706A]">Timezone</p>
                  <p className="text-sm font-semibold text-[#14241E]">{profile.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E3DDD2] bg-[#FAF8F5] px-4 py-3 text-xs font-semibold text-[#14241E] transition hover:border-[#84B82E] hover:bg-white"
                >
                  <ArrowUpRight className="h-4 w-4 text-[#84B82E]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E3DDD2] bg-[#FAF8F5] px-4 py-3 text-xs font-semibold text-[#14241E] transition hover:border-[#84B82E] hover:bg-white"
                >
                  <Globe className="h-4 w-4 text-[#84B82E]" />
                  <span>Canva Site</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right EmailJS Form */}
          <Reveal className="lg:col-span-7" delayClass="delay-150">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[#E3DDD2] bg-[#FAF8F5] p-6 shadow-sm sm:p-10"
            >
              <h3 className="text-xl font-bold text-[#14241E]">Send a Message</h3>
              <p className="mt-1 text-xs text-[#68706A]">
                Fill out the form below and your inquiry will be delivered directly to my inbox.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="from_name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#46534C]"
                  >
                    Your Name
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl border border-[#DED8CD] bg-white px-4 py-3 text-sm text-[#14241E] placeholder-[#9AA19C] outline-none transition focus:border-[#84B82E] focus:ring-2 focus:ring-[#84B82E]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#46534C]"
                  >
                    Email Address
                  </label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full rounded-2xl border border-[#DED8CD] bg-white px-4 py-3 text-sm text-[#14241E] placeholder-[#9AA19C] outline-none transition focus:border-[#84B82E] focus:ring-2 focus:ring-[#84B82E]/20"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#46534C]"
                >
                  How Can I Help?
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Executive Calendar & Inbox Support"
                  className="w-full rounded-2xl border border-[#DED8CD] bg-white px-4 py-3 text-sm text-[#14241E] placeholder-[#9AA19C] outline-none transition focus:border-[#84B82E] focus:ring-2 focus:ring-[#84B82E]/20"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#46534C]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, tools, and support needs..."
                  className="w-full resize-none rounded-2xl border border-[#DED8CD] bg-white px-4 py-3 text-sm text-[#14241E] placeholder-[#9AA19C] outline-none transition focus:border-[#84B82E] focus:ring-2 focus:ring-[#84B82E]/20"
                />
              </div>

              {status === 'success' && (
                <div className="mt-5 flex items-center gap-2.5 rounded-2xl border border-[#84B82E]/40 bg-[#84B82E]/10 px-4 py-3 text-sm font-medium text-[#14241E]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#75A625]" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-5 flex items-center gap-2.5 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex w-full items-center justify-between rounded-full bg-[#14241E] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg shadow-[#14241E]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1C332A] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:gap-5"
                >
                  <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#84B82E] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    {status === 'sending' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

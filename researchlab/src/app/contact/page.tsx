'use client'
import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle2, Users, Briefcase, GraduationCap } from 'lucide-react'
import { LAB_CONFIG } from '@/data/config'
import type { Metadata } from 'next'

const COLLAB_TYPES = [
  { icon: GraduationCap, title: 'PhD / MSc Students',      desc: 'Join as a graduate researcher or research intern.' },
  { icon: Briefcase,     title: 'Industry Collaboration',   desc: 'Partner with us on applied research projects.' },
  { icon: Users,         title: 'Academic Collaboration',   desc: 'Co-author papers or share datasets and resources.' },
]

export default function ContactPage() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // TODO: connect to email API (Resend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-pad pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10">
          <p className="text-rose-400 text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Interested in collaborating, joining the team, or learning more about our research? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left — info */}
            <div className="space-y-8">
              {/* Contact info */}
              <div className="card p-6 space-y-4">
                <h2 className="font-display font-semibold text-lg">Reach Us</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-4 h-4 text-lab-400 shrink-0" />
                    <a href={`mailto:${LAB_CONFIG.email}`} className="hover:text-lab-400 transition-colors">
                      {LAB_CONFIG.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-lab-400 shrink-0" />
                    {LAB_CONFIG.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  {LAB_CONFIG.social.github && (
                    <a href={LAB_CONFIG.social.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {LAB_CONFIG.social.linkedin && (
                    <a href={LAB_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {LAB_CONFIG.social.twitter && (
                    <a href={LAB_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Collaboration types */}
              <div className="space-y-3">
                <h2 className="font-display font-semibold text-lg">Ways to Collaborate</h2>
                {COLLAB_TYPES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="card p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-lab-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-lab-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                {sent ? (
                  <div className="text-center py-16 space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto" />
                    <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. We'll get back to you within 1–3 business days.</p>
                    <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                            className="btn-ghost mt-4">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display text-xl font-bold mb-6">Send a Message</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-gray-300">Name <span className="text-rose-400">*</span></label>
                        <input name="name" required value={form.name} onChange={handleChange}
                               placeholder="Your full name" className="input" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-gray-300">Email <span className="text-rose-400">*</span></label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange}
                               placeholder="you@example.com" className="input" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-gray-300">Subject <span className="text-rose-400">*</span></label>
                      <select name="subject" required value={form.subject} onChange={handleChange} className="input">
                        <option value="">Select a topic...</option>
                        <option value="collaboration">Research Collaboration</option>
                        <option value="join">Joining the Lab</option>
                        <option value="industry">Industry Partnership</option>
                        <option value="media">Media / Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-gray-300">Message <span className="text-rose-400">*</span></label>
                      <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                                placeholder="Tell us about yourself and what you're interested in..."
                                className="input resize-none" />
                    </div>
                    <button type="submit" disabled={loading}
                            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Your information is never shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

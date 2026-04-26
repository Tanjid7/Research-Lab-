'use client'
import { useState } from 'react'
import { Github, Linkedin, BookOpen, Globe, Mail, Twitter } from 'lucide-react'
import { TEAM } from '@/data/team'
import { LAB_CONFIG } from '@/data/config'
import { AREA_COLORS, AREA_LABELS } from '@/lib/utils'

const AREA_FILTERS = [{ id: 'all', label: 'All' }, ...LAB_CONFIG.researchAreas]

export default function TeamPage() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? TEAM
    : TEAM.filter(m => m.areas.includes(filter))

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-pad pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lab-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10">
          <p className="text-lab-400 text-sm font-medium uppercase tracking-widest mb-3">The People Behind The Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A diverse group of researchers united by curiosity, rigor, and a desire to advance the frontier of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 lg:px-20 mb-10">
        <div className="container-max">
          <div className="flex flex-wrap gap-2">
            {AREA_FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  filter === f.id
                    ? 'bg-lab-500 border-lab-500 text-white'
                    : 'border-white/10 text-gray-400 hover:border-lab-400/30 hover:text-white'
                }`}
              >
                {'icon' in f && f.icon} {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Members grid */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(member => (
              <div key={member.id} className="card p-6 flex flex-col group">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-xl object-cover ring-1 ring-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-semibold text-lg leading-tight">{member.name}</h2>
                    <p className="text-lab-400 text-sm">{member.role}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{member.title}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{member.bio}</p>

                {/* Research areas */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.areas.map(a => (
                    <span key={a} className={`tag ${AREA_COLORS[a]}`}>{AREA_LABELS[a]}</span>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.skills.slice(0, 4).map(skill => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 font-mono">
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-500 font-mono">
                      +{member.skills.length - 4} more
                    </span>
                  )}
                </div>

                {/* Social */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.googleScholar && (
                    <a href={member.social.googleScholar} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="Google Scholar">
                      <BookOpen className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="Twitter">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.website && (
                    <a href={member.social.website} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="Website">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`}
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  <div className="ml-auto">
                    <span className="text-xs text-gray-600">Since {member.joinedYear}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No members found for this research area.
            </div>
          )}

          {/* Join CTA */}
          <div className="mt-16 card p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl font-bold mb-3">Want to Join?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              We're looking for motivated researchers and engineers. Open positions for PhD students, master's students, and collaborators.
            </p>
            <a href="/contact" className="btn-primary">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}

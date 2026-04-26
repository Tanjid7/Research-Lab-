import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github, Linkedin, BookOpen, FlaskConical, Sparkles, Users, FileText, Folder } from 'lucide-react'
import { LAB_CONFIG } from '@/data/config'
import { TEAM } from '@/data/team'
import { PUBLICATIONS } from '@/data/publications'
import { PROJECTS } from '@/data/projects'
import { AREA_COLORS, AREA_LABELS } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${LAB_CONFIG.name} — AI Research Group`,
  description: LAB_CONFIG.description,
}

const founders = TEAM.filter(m => m.featured)
const featuredPapers = PUBLICATIONS.filter(p => p.featured).slice(0, 2)
const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3)

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center section-pad pt-32">

        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lab-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-lab-500/30 to-transparent" />

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lab-500/10 border border-lab-500/20 text-lab-400 text-sm font-medium mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              AI Research Group · Est. {LAB_CONFIG.founded}
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Advancing
              <span className="block gradient-text">Intelligence</span>
              <span className="block text-gray-400">Together.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              {LAB_CONFIG.description}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <Link href="/research" className="btn-primary">
                View Research <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Collaborate With Us
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              {[
                { icon: Users, value: `${TEAM.length}+`, label: 'Researchers' },
                { icon: FileText, value: `${PUBLICATIONS.length}+`, label: 'Publications' },
                { icon: Folder, value: `${PROJECTS.length}+`, label: 'Projects' },
                { icon: FlaskConical, value: `${LAB_CONFIG.researchAreas.length}`, label: 'Research Areas' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lab-500/10 border border-lab-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-lab-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold gradient-text">{value}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ──────────────────────────────────── */}
      <section className="section-pad border-t border-white/5">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Research Areas</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We work across four interconnected domains, tackling challenges that require deep interdisciplinary thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LAB_CONFIG.researchAreas.map((area, i) => (
              <div
                key={area.id}
                className="card p-6 group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-lab-400 transition-colors">
                  {area.label}
                </h3>
                <div className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: area.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PAPERS ─────────────────────────────────── */}
      <section className="section-pad border-t border-white/5 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-lab-400 text-sm font-medium uppercase tracking-widest mb-2">Latest Work</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Featured Research</h2>
            </div>
            <Link href="/research" className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-lab-400 transition-colors">
              All Papers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredPapers.map(paper => (
              <div key={paper.id} className="card p-6 md:p-8 group">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {paper.areas.map(a => (
                        <span key={a} className={`tag ${AREA_COLORS[a]}`}>
                          {AREA_LABELS[a]}
                        </span>
                      ))}
                      <span className="tag bg-white/5 text-gray-400 border-white/10">{paper.venueShort} {paper.year}</span>
                      {paper.award && (
                        <span className="tag bg-amber-500/10 text-amber-400 border-amber-500/20">🏆 {paper.award}</span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-lab-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-3">{paper.abstract}</p>
                    <p className="text-xs text-gray-500">{paper.authors.join(', ')}</p>
                  </div>
                  <div className="flex md:flex-col gap-2 shrink-0">
                    {paper.arxiv && (
                      <a href={paper.arxiv} target="_blank" rel="noopener noreferrer"
                         className="btn-ghost text-xs py-1.5 px-3">
                        arXiv <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {paper.code && (
                      <a href={paper.code} target="_blank" rel="noopener noreferrer"
                         className="btn-ghost text-xs py-1.5 px-3">
                        <Github className="w-3 h-3" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:hidden">
            <Link href="/research" className="flex items-center gap-2 text-sm text-gray-400 hover:text-lab-400 transition-colors">
              All Papers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ───────────────────────────────── */}
      <section className="section-pad border-t border-white/5">
        <div className="container-max">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent-cyan text-sm font-medium uppercase tracking-widest mb-2">What We Build</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-accent-cyan transition-colors">
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProjects.map(project => (
              <div key={project.id} className="card p-6 flex flex-col group">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.areas.slice(0, 2).map(a => (
                    <span key={a} className={`tag ${AREA_COLORS[a]}`}>{AREA_LABELS[a]}</span>
                  ))}
                  <span className={`tag ${project.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500 font-mono">+{project.tech.length - 3}</span>
                  )}
                </div>
                <div className="flex gap-2 pt-2 border-t border-white/5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-accent-cyan transition-colors ml-3">
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ────────────────────────────────────────── */}
      <section className="section-pad border-t border-white/5 relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-64 bg-gradient-to-t from-lab-900/20 to-transparent pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-2">The People</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Founding Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map(member => (
              <div key={member.id} className="card p-6 text-center group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-lab-400/40 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#080c1a]" />
                </div>
                <h3 className="font-display font-semibold text-lg">{member.name}</h3>
                <p className="text-lab-400 text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs mb-4">{member.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.googleScholar && (
                    <a href={member.social.googleScholar} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <BookOpen className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/team" className="btn-ghost">
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section-pad border-t border-white/5">
        <div className="container-max">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-lab-900/50 to-lab-950/80 border border-lab-500/20 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-lab-400/60 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Ready to push the<br />
                <span className="gradient-text">boundaries of AI?</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                We're always looking for passionate researchers, collaborators, and industry partners.
                Whether you're a student, faculty, or organization — let's build something meaningful.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/research" className="btn-ghost">
                  Explore Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

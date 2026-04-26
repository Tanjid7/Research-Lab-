'use client'
import { useState, useMemo } from 'react'
import { Github, ExternalLink, Search, Folder } from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import { LAB_CONFIG } from '@/data/config'
import { AREA_COLORS, AREA_LABELS, STATUS_COLORS } from '@/lib/utils'

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap(p => p.tags))).sort()

export default function ProjectsPage() {
  const [search,     setSearch]     = useState('')
  const [areaFilter, setAreaFilter] = useState('all')
  const [tagFilter,  setTagFilter]  = useState('all')
  const [status,     setStatus]     = useState('all')

  const filtered = useMemo(() => {
    return PROJECTS.filter(p => {
      const q = search.toLowerCase()
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q))
      const matchArea   = areaFilter === 'all' || p.areas.includes(areaFilter)
      const matchTag    = tagFilter  === 'all' || p.tags.includes(tagFilter)
      const matchStatus = status === 'all' || p.status === status
      return matchSearch && matchArea && matchTag && matchStatus
    })
  }, [search, areaFilter, tagFilter, status])

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-pad pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10">
          <p className="text-accent-cyan text-sm font-medium uppercase tracking-widest mb-3">What We Build</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Open-source tools, models, and systems we've built to advance the field and enable reproducible research.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 mb-8">
        <div className="container-max space-y-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects, tech stack..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input pl-11"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Area */}
            <button onClick={() => setAreaFilter('all')} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${areaFilter === 'all' ? 'bg-lab-500 border-lab-500 text-white' : 'bg-transparent border-white/10 text-gray-400 hover:border-lab-500/50 hover:text-lab-300'}`}>All Areas</button>
            {LAB_CONFIG.researchAreas.map(a => (
              <button key={a.id} onClick={() => setAreaFilter(a.id)} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${areaFilter === a.id ? 'bg-lab-500 border-lab-500 text-white' : 'bg-transparent border-white/10 text-gray-400 hover:border-lab-500/50 hover:text-lab-300'}`}>{a.label}</button>
            ))}

            {/* Status */}
            {['all', 'active', 'completed', 'archived'].map(s => (
              <button key={s} onClick={() => setStatus(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all capitalize ${status === s ? 'bg-lab-500 border-lab-500 text-white' : 'bg-transparent border-white/10 text-gray-400 hover:border-lab-500/50 hover:text-lab-300'}`}>{s === 'all' ? 'All Status' : s}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <p className="text-sm text-gray-500 mb-6">{filtered.length} project{filtered.length !== 1 ? 's' : ''}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(project => (
              <article key={project.id} className="card p-6 flex flex-col group">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.areas.map(a => (
                        <span key={a} className={`tag ${AREA_COLORS[a]}`}>{AREA_LABELS[a]}</span>
                      ))}
                      <span className={`tag ${STATUS_COLORS[project.status]} capitalize`}>{project.status}</span>
                    </div>
                    <h2 className="font-display font-semibold text-xl group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="p-2 rounded-lg bg-white/5 hover:bg-accent-cyan/10 text-gray-400 hover:text-accent-cyan transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.longDesc || project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{t}</span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs text-gray-600 mb-2 uppercase tracking-widest">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-lab-500/10 text-lab-400 border border-lab-500/20 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <Folder className="w-12 h-12 text-gray-600 mx-auto" />
              <p className="text-gray-500">No projects match your filters.</p>
              <button onClick={() => { setSearch(''); setAreaFilter('all'); setTagFilter('all'); setStatus('all') }}
                      className="text-lab-400 text-sm hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
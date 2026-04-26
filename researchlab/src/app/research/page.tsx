'use client'
import { useState, useMemo } from 'react'
import { ExternalLink, Github, FileText, Search, Star } from 'lucide-react'
import { PUBLICATIONS } from '@/data/publications'
import { LAB_CONFIG } from '@/data/config'
import { AREA_COLORS, AREA_LABELS } from '@/lib/utils'

const ALL_YEARS = [...new Set(PUBLICATIONS.map(p => p.year))].sort((a, b) => b - a)

export default function ResearchPage() {
  const [search,      setSearch]      = useState('')
  const [areaFilter,  setAreaFilter]  = useState('all')
  const [yearFilter,  setYearFilter]  = useState('all')
  const [showFeatured, setShowFeatured] = useState(false)

  const filtered = useMemo(() => {
    return PUBLICATIONS.filter(p => {
      const q = search.toLowerCase()
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.abstract.toLowerCase().includes(q) ||
        p.authors.some(a => a.toLowerCase().includes(q)) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      const matchArea  = areaFilter === 'all' || p.areas.includes(areaFilter)
      const matchYear  = yearFilter === 'all' || p.year === Number(yearFilter)
      const matchFeat  = !showFeatured || p.featured
      return matchSearch && matchArea && matchYear && matchFeat
    })
  }, [search, areaFilter, yearFilter, showFeatured])

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-pad pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">Published Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Research & Publications</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Our contributions to the scientific community across Computer Vision, NLP, Deep Learning, and Machine Learning.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400">
            <span>{PUBLICATIONS.length} total papers</span>
            <span>·</span>
            <span>{PUBLICATIONS.filter(p => p.featured).length} featured</span>
            <span>·</span>
            <span>{ALL_YEARS.length} years of research</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 mb-8">
        <div className="container-max space-y-4">
          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search papers, authors, keywords..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input pl-11"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {/* Area filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setAreaFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${areaFilter === 'all' ? 'bg-lab-500 border-lab-500 text-white' : 'border-white/10 text-gray-400 hover:border-lab-400/30'}`}
              >
                All Areas
              </button>
              {LAB_CONFIG.researchAreas.map(a => (
                <button
                  key={a.id}
                  onClick={() => setAreaFilter(a.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${areaFilter === a.id ? 'bg-lab-500 border-lab-500 text-white' : 'border-white/10 text-gray-400 hover:border-lab-400/30'}`}
                >
                  {a.label}
                </button>
              ))}
            </div>

            {/* Year filter */}
            <select
              value={yearFilter}
              onChange={e => setYearFilter(e.target.value)}
              className="input max-w-[140px] text-sm py-1.5"
            >
              <option value="all">All Years</option>
              {ALL_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            {/* Featured toggle */}
            <button
              onClick={() => setShowFeatured(!showFeatured)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${showFeatured ? 'bg-amber-500/20 border-amber-500/30 text-amber-400' : 'border-white/10 text-gray-400 hover:border-amber-400/30'}`}
            >
              <Star className="w-3 h-3" /> Featured
            </button>
          </div>
        </div>
      </section>

      {/* Publications list */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <p className="text-sm text-gray-500 mb-6">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>

          <div className="space-y-4">
            {filtered.map(paper => (
              <article key={paper.id} className="card p-6 md:p-8 group">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1 min-w-0">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {paper.featured && (
                        <span className="tag bg-amber-500/10 text-amber-400 border-amber-500/20 flex items-center gap-1">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      )}
                      {paper.areas.map(a => (
                        <span key={a} className={`tag ${AREA_COLORS[a]}`}>{AREA_LABELS[a]}</span>
                      ))}
                      {paper.award && (
                        <span className="tag bg-rose-500/10 text-rose-400 border-rose-500/20">🏆 {paper.award}</span>
                      )}
                    </div>

                    <h2 className="font-display font-semibold text-xl mb-2 group-hover:text-lab-400 transition-colors leading-snug">
                      {paper.title}
                    </h2>

                    {/* Venue + year */}
                    <p className="text-lab-400 text-sm font-medium mb-1">
                      {paper.venueShort} {paper.year} · <span className="text-gray-500 font-normal">{paper.venue}</span>
                    </p>

                    {/* Authors */}
                    <p className="text-gray-400 text-sm mb-3 italic">{paper.authors.join(', ')}</p>

                    {/* Abstract */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">{paper.abstract}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {paper.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500 font-mono">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex lg:flex-col gap-2 shrink-0">
                    {paper.pdf && (
                      <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4">
                        <FileText className="w-3.5 h-3.5" /> PDF
                      </a>
                    )}
                    {paper.arxiv && (
                      <a href={paper.arxiv} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs py-2 px-4">
                        arXiv <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {paper.code && (
                      <a href={paper.code} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs py-2 px-4">
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {paper.doi && (
                      <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs py-2 px-4">
                        DOI <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <FileText className="w-12 h-12 text-gray-600 mx-auto" />
              <p className="text-gray-500">No papers match your filters.</p>
              <button onClick={() => { setSearch(''); setAreaFilter('all'); setYearFilter('all'); setShowFeatured(false) }}
                      className="text-lab-400 text-sm hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

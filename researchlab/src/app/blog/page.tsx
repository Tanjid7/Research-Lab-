import Link from 'next/link'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import { TEAM } from '@/data/team'
import { AREA_COLORS, AREA_LABELS } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Blog & Insights' }

function getAuthor(id: string) {
  return TEAM.find(m => m.id === id)
}

export default function BlogPage() {
  const featured = BLOG_POSTS.filter(p => p.featured)
  const rest     = BLOG_POSTS.filter(p => !p.featured)

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-pad pb-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-lab-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-3">Thoughts & Tutorials</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Research explanations, technical tutorials, and progress updates from the team.
          </p>
        </div>
      </section>

      {/* Featured posts */}
      {featured.length > 0 && (
        <section className="section-pad pt-0">
          <div className="container-max">
            <h2 className="font-display text-2xl font-bold mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {featured.map(post => {
                const author = getAuthor(post.author)
                return (
                  <article key={post.id} className="card p-6 flex flex-col group cursor-pointer">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.areas.map(a => (
                        <span key={a} className={`tag ${AREA_COLORS[a]}`}>{AREA_LABELS[a]}</span>
                      ))}
                    </div>
                    <h2 className="font-display font-semibold text-xl mb-3 group-hover:text-lab-400 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.slice(0, 3).map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2.5">
                        {author && (
                          <img src={author.avatar} alt={author.name} className="w-7 h-7 rounded-full" />
                        )}
                        <div>
                          <p className="text-xs font-medium">{author?.name ?? post.author}</p>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" /> {post.readTime} min read
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* All posts */}
            {rest.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold mb-6">All Posts</h2>
                <div className="space-y-4">
                  {rest.map(post => {
                    const author = getAuthor(post.author)
                    return (
                      <article key={post.id} className="card p-5 flex flex-col sm:flex-row gap-4 group cursor-pointer">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {post.areas.map(a => (
                              <span key={a} className={`tag ${AREA_COLORS[a]}`}>{AREA_LABELS[a]}</span>
                            ))}
                          </div>
                          <h3 className="font-display font-semibold text-lg mb-1.5 group-hover:text-lab-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                        </div>
                        <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" /> {post.readTime}m
                          </div>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </>
            )}

            {/* Newsletter CTA */}
            <div className="mt-16 card p-8 text-center">
              <BookOpen className="w-10 h-10 text-lab-400 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-6 max-w-sm mx-auto">Get notified when we publish new research and tutorials.</p>
              <div className="flex gap-2 max-w-sm mx-auto">
                <input type="email" placeholder="your@email.com" className="input flex-1" />
                <button className="btn-primary px-4 py-3 shrink-0">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

import Link from 'next/link'
import { Github, Linkedin, Twitter, FlaskConical, Mail, MapPin } from 'lucide-react'
import { LAB_CONFIG } from '@/data/config'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02] dark:bg-black/20">
      <div className="container-max section-pad py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lab-500 to-accent-cyan flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg">{LAB_CONFIG.name}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              {LAB_CONFIG.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              {LAB_CONFIG.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${LAB_CONFIG.email}`} className="hover:text-lab-400 transition-colors">
                {LAB_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400">Quick Links</h3>
            <nav className="space-y-2">
              {[
                ['/', 'Home'],
                ['/team', 'Team'],
                ['/research', 'Research'],
                ['/projects', 'Projects'],
                ['/blog', 'Blog'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="block text-sm text-gray-500 hover:text-lab-400 transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Research areas + social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400">Research Areas</h3>
            <div className="flex flex-wrap gap-2">
              {LAB_CONFIG.researchAreas.map(area => (
                <span key={area.id} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  {area.icon} {area.label}
                </span>
              ))}
            </div>

            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400 pt-2">Follow Us</h3>
            <div className="flex items-center gap-3">
              {LAB_CONFIG.social.github && (
                <a href={LAB_CONFIG.social.github} target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {LAB_CONFIG.social.linkedin && (
                <a href={LAB_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {LAB_CONFIG.social.twitter && (
                <a href={LAB_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} {LAB_CONFIG.name}. All rights reserved.</span>
          <span>Founded {LAB_CONFIG.founded} · Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'month',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

export const AREA_COLORS: Record<string, string> = {
  cv:  'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  nlp: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  dl:  'bg-lab-500/10 text-lab-400 border-lab-500/20',
  ml:  'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export const AREA_LABELS: Record<string, string> = {
  cv:  'Computer Vision',
  nlp: 'NLP',
  dl:  'Deep Learning',
  ml:  'Machine Learning',
}

export const STATUS_COLORS: Record<string, string> = {
  active:    'bg-green-500/10 text-green-400 border-green-500/20',
  completed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  archived:  'bg-gray-500/10 text-gray-400 border-gray-500/20',
}

import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LAB_CONFIG } from '@/data/config'
import '@/styles/globals.css'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title:       { default: LAB_CONFIG.name, template: `%s | ${LAB_CONFIG.name}` },
  description: LAB_CONFIG.description,
  keywords:    LAB_CONFIG.keywords,
  openGraph: {
    type:        'website',
    siteName:    LAB_CONFIG.name,
    description: LAB_CONFIG.description,
  },
  twitter: {
    card:        'summary_large_image',
    title:       LAB_CONFIG.name,
    description: LAB_CONFIG.description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-white dark:bg-[#080c1a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

# 🧠 Research Lab Website

A modern, production-ready website for your AI research group — built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── team/page.tsx       # Team page
│   ├── research/page.tsx   # Publications page
│   ├── projects/page.tsx   # Projects page
│   ├── blog/page.tsx       # Blog page
│   ├── contact/page.tsx    # Contact page
│   └── layout.tsx          # Root layout (navbar, footer, theme)
│
├── components/
│   └── layout/
│       ├── Navbar.tsx      # Navigation bar
│       └── Footer.tsx      # Footer
│
├── data/                   ← EDIT THESE FILES to update content
│   ├── config.ts           # Lab name, tagline, social links
│   ├── team.ts             # Team members
│   ├── publications.ts     # Research papers
│   ├── projects.ts         # Projects
│   └── blog.ts             # Blog posts
│
├── lib/
│   └── utils.ts            # Utility functions + color maps
│
└── styles/
    └── globals.css         # Global styles + Tailwind base
```

---

## 🔧 Customization

### Change the Lab Name
Edit `src/data/config.ts`:
```ts
export const LAB_CONFIG = {
  name:      'Your Lab Name',
  shortName: 'YLN',
  tagline:   'Your tagline here',
  // ...
}
```

### Add a Team Member
Edit `src/data/team.ts` — copy an existing member and fill in:
```ts
{
  id:       'unique-id',       // kebab-case, no spaces
  name:     'Full Name',
  role:     'Researcher',
  title:    'PhD Student · Computer Vision',
  avatar:   'https://...',    // or /images/team/photo.jpg
  bio:      'Short bio...',
  skills:   ['PyTorch', 'Python'],
  areas:    ['cv', 'dl'],     // cv | nlp | dl | ml
  social:   { github: '...', linkedin: '...' },
  featured: false,
  joinedYear: 2025,
}
```

### Add a Publication
Edit `src/data/publications.ts`:
```ts
{
  id:         'paper-short-id',
  title:      'Paper Title',
  abstract:   'Full abstract...',
  authors:    ['Name 1', 'Name 2'],
  venue:      'Conference Full Name',
  venueShort: 'CVPR',
  year:       2025,
  areas:      ['cv'],
  tags:       ['Object Detection', '3D Vision'],
  arxiv:      'https://arxiv.org/...',
  code:       'https://github.com/...',
  featured:   false,
}
```

### Add a Project
Edit `src/data/projects.ts`:
```ts
{
  id:          'project-id',
  title:       'Project Name',
  description: 'Short description',
  areas:       ['nlp'],
  tags:        ['LLM', 'Open Source'],
  tech:        ['Python', 'PyTorch'],
  status:      'active',     // active | completed | archived
  github:      'https://...',
  demo:        'https://...',
  featured:    false,
  year:        2025,
  team:        ['member-id'],
}
```

### Add a Blog Post
Edit `src/data/blog.ts`:
```ts
{
  id:       'post-slug',
  title:    'Post Title',
  excerpt:  'Short excerpt',
  content:  'Full content (Markdown)',
  author:   'team-member-id',
  date:     '2025-01-15',
  tags:     ['Tutorial'],
  areas:    ['dl'],
  readTime: 5,
  featured: false,
}
```

---

## 🎨 Theme & Colors

Edit `tailwind.config.js` to change the color palette:
- `lab.*` — primary blue/indigo colors
- `accent.cyan` — secondary teal
- `accent.amber` — highlights

Edit `src/styles/globals.css` for global CSS variables and custom components.

---

## 📦 Environment Variables

Copy `.env.example` to `.env.local`:

```env
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email (pick one)
RESEND_API_KEY=re_...
# OR
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📧 Email Integration (Contact Form)

### Option A: Resend (recommended)
1. Sign up at resend.com
2. Add `RESEND_API_KEY` to `.env.local`
3. Create `src/app/api/contact/route.ts`:
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()
  await resend.emails.send({
    from:    'contact@yourdomain.com',
    to:      'you@yourdomain.com',
    subject: `[Lab Contact] ${subject} — from ${name}`,
    text:    `From: ${name} <${email}>\n\n${message}`,
  })
  return Response.json({ ok: true })
}
```
4. Update the `handleSubmit` in `contact/page.tsx` to call this endpoint.

### Option B: Formspree (no backend needed)
1. Create account at formspree.io
2. Set `action="https://formspree.io/f/YOUR_ID"` on the form

---

## 🚀 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel deploy
```
Or connect your GitHub repo at vercel.com → instant CI/CD.

### Netlify
```bash
npm run build
# Upload the .next folder or connect GitHub repo
```

### Self-hosted (Docker)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📈 Analytics (Optional)

Add Google Analytics:
1. Get a GA4 measurement ID (G-XXXXXXXXXX)
2. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Add to `layout.tsx`:
```tsx
import Script from 'next/script'
// In <head>:
<Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
```

---

## 🗂️ CMS Migration (Future)

Currently all data lives in `src/data/*.ts`. When you outgrow this:

| Option | When to use |
|---|---|
| **Sanity.io** | Rich editing, media management |
| **Strapi** | Self-hosted, full REST/GraphQL API |
| **Contentful** | Enterprise, multi-team |
| **Notion API** | Simple, team already uses Notion |
| **MDX files** | Blog-heavy, dev-friendly |

---

## 💡 Lab Name Suggestions

1. **NeuralNexus Lab** — interconnected, memorable (current default)
2. **AxonAI Research** — axon = neural signal pathway
3. **Synapse Lab** — brain synapses → AI connections
4. **Lumina AI Lab** — light, clarity, illumination
5. **Gradient Research** — ML pun, clean and professional
6. **Manifold Lab** — mathematical, precise
7. **Perceive AI** — perception + AI, strong verb

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Fonts | Playfair Display + DM Sans |
| Icons | Lucide React |
| Theme | next-themes |
| Deployment | Vercel / Netlify |

---

## 📄 License

MIT — free to use for academic and commercial purposes.

---

*Built for research labs that want a professional online presence without the overhead.*

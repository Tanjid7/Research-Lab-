// ============================================================
//  TEAM DATA — Add / remove members here
// ============================================================

export interface TeamMember {
  id:       string
  name:     string
  role:     string
  title:    string            // Academic/professional title
  avatar:   string            // URL or /images/team/filename.jpg
  bio:      string
  skills:   string[]
  areas:    string[]          // research area ids: cv | nlp | dl | ml
  social: {
    github?:        string
    linkedin?:      string
    googleScholar?: string
    twitter?:       string
    website?:       string
    email?:         string
  }
  featured: boolean           // show on homepage founder spotlight
  joinedYear: number
}

// ── HOW TO ADD A MEMBER ──────────────────────────────────────
// 1. Copy one of the objects below
// 2. Give it a unique `id`
// 3. Fill in the fields
// 4. Add their photo to /public/images/team/
// 5. Set featured: false for non-founders

export const TEAM: TeamMember[] = [
  {
    id:       'alex-rahman',
    name:     'Alex Rahman',
    role:     'Co-Founder & Research Lead',
    title:    'PhD Student · Computer Vision',
    avatar:   'https://ui-avatars.com/api/?name=Alex+Rahman&background=4d64ff&color=fff&size=256',
    bio:
      'Alex leads the vision research arm of the lab, focusing on self-supervised learning and 3D scene understanding. Previously interned at Google Brain and has 4 years of research experience spanning object detection and neural rendering.',
    skills:   ['PyTorch', 'Computer Vision', '3D Deep Learning', 'Self-Supervised Learning', 'CUDA', 'Python'],
    areas:    ['cv', 'dl'],
    social: {
      github:        'https://github.com',
      linkedin:      'https://linkedin.com',
      googleScholar: 'https://scholar.google.com',
      email:         'alex@neuralnexuslab.ai',
    },
    featured:   true,
    joinedYear: 2024,
  },
  {
    id:       'sara-ahmed',
    name:     'Sara Ahmed',
    role:     'Co-Founder & NLP Researcher',
    title:    'MS Student · Natural Language Processing',
    avatar:   'https://ui-avatars.com/api/?name=Sara+Ahmed&background=8b5cf6&color=fff&size=256',
    bio:
      'Sara specializes in large language models, multilingual NLP, and low-resource language understanding. Her work on Bengali language models has been recognized at top NLP conferences. Passionate about democratizing AI for underrepresented languages.',
    skills:   ['Transformers', 'NLP', 'LLMs', 'HuggingFace', 'Python', 'Bengali NLP'],
    areas:    ['nlp', 'ml'],
    social: {
      github:        'https://github.com',
      linkedin:      'https://linkedin.com',
      googleScholar: 'https://scholar.google.com',
      twitter:       'https://twitter.com',
      email:         'sara@neuralnexuslab.ai',
    },
    featured:   true,
    joinedYear: 2024,
  },
  {
    id:       'karim-hossain',
    name:     'Karim Hossain',
    role:     'Co-Founder & ML Engineer',
    title:    'MS Student · Machine Learning Systems',
    avatar:   'https://ui-avatars.com/api/?name=Karim+Hossain&background=06e5d4&color=0e1155&size=256',
    bio:
      'Karim bridges research and engineering, focusing on efficient deep learning, model compression, and MLOps. He builds the infrastructure that powers the lab\'s experiments and has a strong background in distributed training and deployment pipelines.',
    skills:   ['MLOps', 'Model Compression', 'Distributed Training', 'TensorFlow', 'Kubernetes', 'FastAPI'],
    areas:    ['ml', 'dl'],
    social: {
      github:        'https://github.com',
      linkedin:      'https://linkedin.com',
      website:       'https://karimhossain.dev',
      email:         'karim@neuralnexuslab.ai',
    },
    featured:   true,
    joinedYear: 2024,
  },
]

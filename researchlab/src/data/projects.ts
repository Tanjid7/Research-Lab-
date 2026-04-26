// ============================================================
//  PROJECTS DATA — Add projects here
// ============================================================

export interface Project {
  id:          string
  title:       string
  description: string
  longDesc?:   string
  areas:       string[]   // cv | nlp | dl | ml
  tags:        string[]
  tech:        string[]
  status:      'active' | 'completed' | 'archived'
  github?:     string
  demo?:       string
  paper?:      string     // link to related publication id
  image?:      string     // /images/projects/filename.jpg or external URL
  featured:    boolean
  year:        number
  team:        string[]   // team member ids
}

export const PROJECTS: Project[] = [
  {
    id:          'maskpoint3d',
    title:       'MaskPoint3D',
    description: 'Self-supervised 3D point cloud understanding with geometric masked autoencoding.',
    longDesc:
      'A pre-training framework that learns rich 3D representations by predicting masked geometric structures. Achieves SOTA on ShapeNet55 and ModelNet40 without labeled data. Includes a plug-and-play backbone for downstream tasks.',
    areas:    ['cv', 'dl'],
    tags:     ['3D Vision', 'Self-Supervised', 'Point Cloud', 'PyTorch'],
    tech:     ['Python', 'PyTorch', 'Open3D', 'CUDA', 'Weights & Biases'],
    status:   'completed',
    github:   'https://github.com/neuralnexuslab/maskpoint3d',
    paper:    'self-sup-3d-2024',
    featured: true,
    year:     2024,
    team:     ['alex-rahman', 'karim-hossain'],
  },
  {
    id:          'bangla-llm',
    title:       'BanglaLLM',
    description: 'Open-source large language model pre-trained on 15B token Bengali corpus.',
    longDesc:
      'The first openly released LLM specifically optimized for Bengali and related South Asian languages. Includes pre-training code, fine-tuning scripts, evaluation benchmarks, and a web demo. Supports 4 downstream tasks out of the box.',
    areas:    ['nlp', 'ml'],
    tags:     ['LLM', 'Bengali', 'Multilingual', 'Open Source'],
    tech:     ['Python', 'HuggingFace', 'PyTorch', 'FSDP', 'FastAPI', 'Gradio'],
    status:   'active',
    github:   'https://github.com/neuralnexuslab/bangla-llm',
    demo:     'https://demo.neuralnexuslab.ai/bangla-llm',
    paper:    'bangla-llm-2024',
    featured: true,
    year:     2024,
    team:     ['sara-ahmed', 'karim-hossain'],
  },
  {
    id:          'adaptkd',
    title:       'AdaptKD',
    description: 'Progressive knowledge distillation with adaptive temperature for efficient model compression.',
    longDesc:
      'A training framework that compresses large teacher models into 4× smaller students while retaining 97% accuracy. Works across vision and language tasks. Includes pretrained compressed versions of ResNet-50 and DistilBERT variants.',
    areas:    ['ml', 'dl'],
    tags:     ['Model Compression', 'Knowledge Distillation', 'Efficient AI'],
    tech:     ['Python', 'PyTorch', 'TensorBoard', 'ONNX', 'Docker'],
    status:   'completed',
    github:   'https://github.com/neuralnexuslab/adaptkd',
    paper:    'efficient-kd-2024',
    featured: false,
    year:     2024,
    team:     ['karim-hossain', 'alex-rahman'],
  },
  {
    id:          'visual-qa-bangla',
    title:       'BanglaVQA',
    description: 'Visual question answering system for Bengali — bridging vision and language for South Asia.',
    longDesc:
      'An end-to-end VQA system that answers Bengali natural language questions about images. Built on top of BanglaLLM and a fine-tuned CLIP backbone. Includes a publicly available dataset of 50K Bengali image-question pairs.',
    areas:    ['cv', 'nlp', 'dl'],
    tags:     ['VQA', 'Multimodal', 'Bengali', 'Dataset'],
    tech:     ['Python', 'PyTorch', 'CLIP', 'HuggingFace', 'React', 'FastAPI'],
    status:   'active',
    github:   'https://github.com/neuralnexuslab/bangla-vqa',
    demo:     'https://demo.neuralnexuslab.ai/bangla-vqa',
    featured: true,
    year:     2024,
    team:     ['sara-ahmed', 'alex-rahman', 'karim-hossain'],
  },
]

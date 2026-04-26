// ============================================================
//  PUBLICATIONS DATA — Add papers here
// ============================================================

export interface Publication {
  id:       string
  title:    string
  abstract: string
  authors:  string[]          // use team member names + external collaborators
  venue:    string            // conference / journal name
  venueShort: string          // e.g. CVPR, NeurIPS
  year:     number
  areas:    string[]          // cv | nlp | dl | ml
  tags:     string[]
  pdf?:     string            // URL to PDF
  arxiv?:   string            // arXiv URL
  doi?:     string
  code?:    string            // GitHub repo
  featured: boolean
  award?:   string            // e.g. "Best Paper Award"
}

export const PUBLICATIONS: Publication[] = [
  {
    id:       'self-sup-3d-2024',
    title:    'Self-Supervised 3D Scene Understanding via Masked Point Cloud Modeling',
    abstract:
      'We present MaskPoint3D, a self-supervised pre-training framework for 3D point cloud understanding that leverages masked autoencoding with geometric consistency constraints. Our method achieves state-of-the-art performance on ShapeNet55 and ModelNet40 benchmarks while reducing annotation requirements by 80%. We demonstrate that geometric masking ratios above 75% yield richer representations compared to random masking strategies.',
    authors:  ['Alex Rahman', 'Sara Ahmed', 'Karim Hossain', 'John Doe'],
    venue:    'IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    venueShort: 'CVPR',
    year:     2024,
    areas:    ['cv', 'dl'],
    tags:     ['3D Vision', 'Self-Supervised Learning', 'Point Clouds', 'Pre-training'],
    arxiv:    'https://arxiv.org/abs/2024.00001',
    doi:      '10.1109/CVPR.2024.00001',
    code:     'https://github.com/neuralnexuslab/maskpoint3d',
    featured: true,
    award:    'Oral Presentation',
  },
  {
    id:       'bangla-llm-2024',
    title:    'BanglaLLM: A Low-Resource Multilingual Language Model for Bengali and Related Languages',
    abstract:
      'We introduce BanglaLLM, a transformer-based language model specifically pre-trained on a curated 15B token Bengali corpus augmented with parallel multilingual data. Our model achieves significant improvements on Bengali NLU benchmarks including sentiment analysis, named entity recognition, and machine translation. We release the model weights, training code, and a new benchmark dataset under open licenses.',
    authors:  ['Sara Ahmed', 'Alex Rahman', 'Priya Sharma'],
    venue:    'Association for Computational Linguistics',
    venueShort: 'ACL',
    year:     2024,
    areas:    ['nlp', 'ml'],
    tags:     ['LLM', 'Low-Resource NLP', 'Bengali', 'Multilingual', 'Pre-training'],
    arxiv:    'https://arxiv.org/abs/2024.00002',
    doi:      '10.18653/v1/2024.acl-long.001',
    code:     'https://github.com/neuralnexuslab/bangla-llm',
    featured: true,
  },
  {
    id:       'efficient-kd-2024',
    title:    'Progressive Knowledge Distillation with Adaptive Temperature Scheduling',
    abstract:
      'Knowledge distillation remains a critical technique for deploying large models at scale. We propose AdaptKD, a progressive distillation framework that dynamically adjusts temperature and layer-wise alignment loss weights during training. AdaptKD reduces model size by 4× while retaining 97% of teacher accuracy across image classification, object detection, and text classification tasks.',
    authors:  ['Karim Hossain', 'Alex Rahman', 'Sara Ahmed'],
    venue:    'International Conference on Machine Learning',
    venueShort: 'ICML',
    year:     2024,
    areas:    ['ml', 'dl'],
    tags:     ['Knowledge Distillation', 'Model Compression', 'Efficient AI', 'Training'],
    arxiv:    'https://arxiv.org/abs/2024.00003',
    code:     'https://github.com/neuralnexuslab/adaptkd',
    featured: false,
  },
  {
    id:       'multimodal-sentiment-2024',
    title:    'Cross-Modal Sentiment Analysis via Hierarchical Fusion of Vision and Language',
    abstract:
      'Multimodal sentiment analysis requires effective fusion of visual and textual signals. We propose HieroFuse, a hierarchical cross-attention module that aligns vision-language representations at multiple granularity levels. Evaluated on CMU-MOSI and CMU-MOSEI, HieroFuse outperforms prior fusion baselines by 3.2% on weighted F1 score.',
    authors:  ['Sara Ahmed', 'Karim Hossain'],
    venue:    'Conference on Empirical Methods in Natural Language Processing',
    venueShort: 'EMNLP',
    year:     2024,
    areas:    ['nlp', 'cv', 'dl'],
    tags:     ['Multimodal', 'Sentiment Analysis', 'Vision-Language', 'Cross-Attention'],
    arxiv:    'https://arxiv.org/abs/2024.00004',
    featured: false,
  },
]

// ============================================================
//  BLOG / INSIGHTS DATA
// ============================================================

export interface BlogPost {
  id:        string
  title:     string
  excerpt:   string
  content:   string   // Markdown or plain text
  author:    string   // team member id
  date:      string   // ISO date string
  tags:      string[]
  areas:     string[]
  readTime:  number   // minutes
  featured:  boolean
  coverImage?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id:      'masked-pretraining-explained',
    title:   'Masked Pre-training: Why Hiding Information Makes AI Smarter',
    excerpt: 'A deep dive into the intuition and mechanics behind masked autoencoders — from BERT to MAE and beyond.',
    content: `## Introduction

Masked pre-training has become one of the most powerful paradigms in modern AI. From BERT in NLP to MAE in vision, the idea is surprisingly simple: hide parts of the input and force the model to predict them.

## The Core Intuition

When we hide a word in a sentence — "The cat sat on the ___" — we must understand context, grammar, and world knowledge to fill in "mat". This compression forces deep understanding.

## From NLP to Vision

The success of BERT inspired researchers to apply the same idea to images. By masking 75%+ of image patches, MAE forces the encoder to learn globally coherent representations.

## What We're Working On

Our MaskPoint3D extends this to 3D point clouds, where geometric masking ratios and spatial consistency constraints yield even richer 3D representations.

## Takeaways

- Masked pre-training scales beautifully with data and compute
- High masking ratios (>60%) tend to learn better features
- The 3D domain is still wide open for exploration`,
    author:   'alex-rahman',
    date:     '2024-05-15',
    tags:     ['Pre-training', 'Self-Supervised', 'Tutorial', 'Deep Learning'],
    areas:    ['dl', 'cv'],
    readTime: 7,
    featured: true,
  },
  {
    id:      'low-resource-nlp-challenges',
    title:   'Low-Resource NLP: Challenges and Opportunities for South Asian Languages',
    excerpt: 'Bengali has 230 million speakers yet remains severely under-resourced in NLP. Here\'s what we\'re doing about it.',
    content: `## The Resource Gap

English dominates NLP benchmarks and pre-trained models. Yet billions of people communicate in languages with a fraction of the available data.

## Why Bengali?

With 230M+ speakers, Bengali is the 7th most spoken language globally. Yet publicly available datasets remain sparse, and most commercial NLP tools perform poorly on it.

## Our Approach

We curated a 15B token Bengali corpus from web crawls, books, Wikipedia, and news archives — then pre-trained BanglaLLM from scratch using efficient distributed training.

## What's Next

We're releasing the dataset, model weights, and benchmark suite as fully open resources. Our goal: make Bengali NLP infrastructure as accessible as English NLP was in 2018.`,
    author:   'sara-ahmed',
    date:     '2024-06-02',
    tags:     ['NLP', 'Bengali', 'Low-Resource', 'LLM'],
    areas:    ['nlp'],
    readTime: 6,
    featured: true,
  },
  {
    id:      'model-compression-guide',
    title:   'A Practical Guide to Model Compression for Production AI',
    excerpt: 'Pruning, quantization, and knowledge distillation — when to use each, and how to combine them.',
    content: `## Why Compress?

Deploying a 7B-parameter model costs real money. Compression is how research becomes viable products.

## The Three Pillars

**Pruning** removes redundant weights. **Quantization** reduces precision. **Knowledge distillation** transfers knowledge to a smaller architecture.

## Our AdaptKD Approach

Rather than static temperature in KD, we adapt it based on teacher confidence and training progress. This yields 4× smaller models retaining 97% accuracy.

## When to Use What

- Latency-critical edge: quantization (INT8/INT4)
- Training budget limited: KD from existing teacher
- Accuracy-critical, flexible size: structured pruning

## Combining All Three

The most powerful approach: distill a pruned quantized model. Each technique is complementary.`,
    author:   'karim-hossain',
    date:     '2024-07-10',
    tags:     ['MLOps', 'Model Compression', 'Production AI', 'Tutorial'],
    areas:    ['ml', 'dl'],
    readTime: 9,
    featured: false,
  },
]

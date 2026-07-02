import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProductCard } from '@/components/ui/product-card';

const products = [
  {
    title: 'Viral Shorts Bundle',
    description: '180 professionally edited short-form videos ready for publishing across all major platforms.',
    category: 'Video Content',
    deliverables: ['180 edited shorts', 'Captions included', 'Platform-optimized', 'Quick turnaround'],
  },
  {
    title: 'AI Subtitle Bundle',
    description: 'Animated subtitles with premium styling for social media content that captures attention.',
    category: 'Video Enhancement',
    deliverables: ['Animated subtitles', 'Multiple styles', 'Multi-language', 'Brand matching'],
  },
  {
    title: 'Anime Video Bundle',
    description: 'Transform videos into cinematic anime-style edits using AI-assisted workflows.',
    category: 'Creative Production',
    deliverables: ['Anime transformation', 'Custom styling', 'Scene transitions', 'Audio sync'],
  },
  {
    title: 'Content Repurposing Bundle',
    description: 'Convert one long-form video into multiple engaging short clips maximising your content value.',
    category: 'Content Strategy',
    deliverables: ['Multiple clips', 'Aspect ratio options', 'Hook optimization', 'Hashtag research'],
  },
  {
    title: 'Creator Growth Bundle',
    description: 'Complete content optimisation package including editing, captions, thumbnails, and delivery.',
    category: 'Creator Tools',
    deliverables: ['Full editing suite', 'Custom thumbnails', 'SEO captions', 'Analytics report'],
  },
  {
    title: 'Business Automation Bundle',
    description: 'Ready-to-deploy workflow automation systems for businesses using AI tools and modern integrations.',
    category: 'Automation',
    deliverables: ['Custom workflows', 'Tool integrations', 'Training included', 'Support package'],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-section bg-surface/50">
      <Container>
        <SectionHeading
          label="Products"
          title="Digital Products for Content Creators & Businesses"
          description="Premium ready-to-use solutions that accelerate your growth and content production."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

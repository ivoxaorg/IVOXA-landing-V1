import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const caseStudies = [
  {
    title: 'Enterprise AI Assistant Platform',
    client: 'Enterprise SaaS Company',
    technologies: ['AI', 'NLP', 'Automation'],
    summary: 'Built an intelligent assistant that reduced support ticket volume by 67% and improved customer satisfaction scores.',
    results: ['67% fewer tickets', '4.8 CSAT score', '24/7 availability'],
  },
  {
    title: 'Content Automation Pipeline',
    client: 'Digital Marketing Agency',
    technologies: ['AI', 'Video', 'Workflows'],
    summary: 'Automated the creation and distribution of personalised video content for 50+ clients monthly.',
    results: ['10x production', '85% time saved', '$200K saved annually'],
  },
  {
    title: 'Custom ERP Integration',
    client: 'Manufacturing Company',
    technologies: ['Integration', 'API', 'Automation'],
    summary: 'Developed a unified data pipeline connecting legacy systems with modern cloud tools.',
    results: ['Real-time sync', 'Zero errors', '5 systems integrated'],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-section bg-surface/50">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Proven Results"
          description="See how we have helped businesses transform their operations with intelligent technology."
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/10">{study.title.charAt(0)}</div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface to-transparent p-6">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted mb-2">{study.client}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">{study.title}</h3>
                <p className="text-muted mb-4">{study.summary}</p>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  {study.results.map((result) => (
                    <span key={result} className="text-sm text-accent font-medium">{result}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

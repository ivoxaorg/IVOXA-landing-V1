'use client';

import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Search, Lightbulb, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Discovery',
    description: 'We analyse your business, understand your challenges, and identify opportunities for automation.',
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Strategy',
    description: 'We design a comprehensive solution architecture tailored to your specific needs and goals.',
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: 'Development',
    description: 'We build your solutions with precision, keeping you informed throughout the process.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Deployment & Support',
    description: 'We launch your systems and provide ongoing support to ensure continuous success.',
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-section">
      <Container>
        <SectionHeading
          label="Workflow"
          title="Our Process"
          description="A proven methodology that transforms your vision into production-ready solutions."
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex-1 relative">
              <div className="group relative bg-surface border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary/30 h-full">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white font-semibold flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

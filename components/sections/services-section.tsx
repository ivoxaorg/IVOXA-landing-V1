import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { Bot, Workflow, Code, FileVideo, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'AI Automation',
    description:
      'Deploy intelligent AI agents that handle complex tasks, make decisions, and continuously improve your operations.',
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: 'Workflow Automation',
    description:
      'Streamline your business processes with automated workflows that connect your tools and eliminate manual work.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Custom Software Development',
    description:
      'Build tailored software solutions designed specifically for your business needs and growth objectives.',
  },
  {
    icon: <FileVideo className="h-6 w-6" />,
    title: 'AI Content Systems',
    description:
      'Create automated content pipelines that generate, optimise, and distribute high-quality content at scale.',
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Business Process Optimisation',
    description:
      'Analyse and redesign your operations for maximum efficiency, reducing costs while improving quality.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Technical Consulting',
    description:
      'Get expert guidance on technology strategy, architecture decisions, and digital transformation initiatives.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-section">
      <Container>
        <SectionHeading
          label="Services"
          title="Intelligent Solutions for Modern Challenges"
          description="We build technology that saves time, eliminates repetitive work, and creates measurable business value."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

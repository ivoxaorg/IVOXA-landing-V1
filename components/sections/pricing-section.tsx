import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { PricingCard } from '@/components/ui/pricing-card';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and teams getting started with automation.',
    features: [
      'Single workflow automation',
      'Up to 5 integrations',
      'Basic AI capabilities',
      'Email support',
      '30-day implementation',
    ],
    ctaText: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their operations.',
    features: [
      'Multiple workflow automations',
      'Up to 25 integrations',
      'Advanced AI capabilities',
      'Priority support',
      'Custom dashboards',
      '60-day implementation',
    ],
    ctaText: 'Book a Call',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solutions for organisations with complex requirements.',
    features: [
      'Unlimited workflow automations',
      'Unlimited integrations',
      'Full AI suite access',
      '24/7 dedicated support',
      'Custom development',
      'On-site training',
      'SLA guarantee',
    ],
    ctaText: 'Contact Sales',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-section">
      <Container>
        <SectionHeading
          label="Pricing"
          title="Tailored Solutions for Every Scale"
          description="Custom pricing based on your needs. Book a call to discuss your project."
        />
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export function PricingCard({
  name,
  description,
  features,
  highlighted = false,
  ctaText = 'Get Started',
  className,
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-xl border p-8 transition-all duration-300',
        highlighted
          ? 'border-primary/50 bg-surface shadow-lg shadow-primary/10'
          : 'border-border bg-surface/50',
        className
      )}
      {...props}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-semibold text-foreground">{name}</h3>
        <p className="text-muted">{description}</p>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-bold text-foreground">Custom Quote</span>
      </div>
      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-muted">
            <Check className="h-5 w-5 flex-shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'default' : 'secondary'}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  category: string;
  deliverables: string[];
}

export function ProductCard({
  title,
  description,
  category,
  deliverables,
  className,
  ...props
}: ProductCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary/30',
        className
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <div className="absolute inset-absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="text-4xl font-bold text-primary/20">{title.charAt(0)}</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-50" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="default" className="mb-4 w-fit text-xs">
          {category}
        </Badge>
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted">{description}</p>
        <ul className="mb-6 flex-1 space-y-2">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-center text-sm text-muted">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <Button variant="secondary" className="w-full mt-auto">
          Learn More
        </Button>
      </div>
    </div>
  );
}

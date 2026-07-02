import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/30 hover:bg-surface/80',
        className
      )}
      {...props}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-6 flex-1 text-muted">{description}</p>
      <Button variant="ghost" className="group/btn w-fit p-0 text-primary hover:text-primary/80">
        Learn More
        <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  );
}

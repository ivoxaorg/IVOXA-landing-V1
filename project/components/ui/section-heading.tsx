import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
      {...props}
    >
      {label && (
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

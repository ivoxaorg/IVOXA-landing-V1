import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ArrowRight, Sparkles, Zap, BarChart3 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <Container className="relative z-10 py-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Engineering Intelligent Automation for Modern Businesses
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted max-w-xl">
              IVOXA designs AI systems, automation workflows, custom software, and digital infrastructure that help organisations grow faster and operate smarter.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Book a Discovery Call
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <FloatingDashboard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingDashboard() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-8 left-8 w-64 bg-surface border border-border rounded-xl p-4 shadow-xl animate-fade-in">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Zap className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium text-foreground">AI Automation</span>
        </div>
        <div className="h-2 w-full rounded-full bg-surface overflow-hidden">
          <div className="h-full w-4/5 rounded-full bg-primary" />
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-72 bg-surface border border-border rounded-xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
            <BarChart3 className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium text-foreground">Growth Metrics</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-surface rounded-lg p-2">
            <div className="text-xs text-muted">Tasks</div>
            <div className="text-lg font-semibold text-foreground">+847%</div>
          </div>
          <div className="bg-surface rounded-lg p-2">
            <div className="text-xs text-muted">Time</div>
            <div className="text-lg font-semibold text-foreground">-62%</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/4 w-56 bg-surface border border-border rounded-xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium text-foreground">Workflow</span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-6 flex-1 rounded bg-primary/20 flex items-center justify-center text-xs text-muted">
              {i}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 left-0 w-48 bg-surface border border-border rounded-xl p-3 shadow-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <code className="text-xs text-primary font-mono">{'process.run()'}</code>
      </div>

      <div className="absolute top-1/4 right-1/4 h-24 w-24 rounded-full border border-primary/20 bg-primary/5 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 h-16 w-16 rounded-full border border-accent/20 bg-accent/5" />
    </div>
  );
}

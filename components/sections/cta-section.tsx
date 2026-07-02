import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-section-lg">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-surface to-accent/5 border border-border p-12 md:p-16 lg:p-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Let's Build Your Next Competitive Advantage
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Start a conversation about how IVOXA can transform your operations with intelligent automation and custom software solutions.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Book Your Discovery Call
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

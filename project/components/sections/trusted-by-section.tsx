import { Container } from '@/components/ui/container';

const trustedLogos = [
  'TechCorp',
  'InnovateLabs',
  'DataFlow',
  'CloudSync',
  'NextGen',
  'Quantum',
];

export function TrustedBySection() {
  return (
    <section className="py-section">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            Built for ambitious businesses
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {trustedLogos.map((logo) => (
            <div
              key={logo}
              className="text-2xl font-semibold tracking-tight text-muted/40 transition-colors hover:text-muted"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

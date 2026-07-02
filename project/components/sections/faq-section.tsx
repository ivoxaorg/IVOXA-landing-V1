import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. Starter projects typically take 30 days, while enterprise solutions may require 60-90 days. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, all our solutions include support packages. Growth and Enterprise plans include dedicated support channels, and we offer extended maintenance agreements for long-term partnerships.',
  },
  {
    question: 'What AI technologies do you use?',
    answer:
      'We work with leading AI platforms and models, including OpenAI, Anthropic, and specialized automation tools. Our recommendations are tailored to your specific use case and requirements.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer:
      'Absolutely. We specialize in connecting legacy systems with modern cloud tools, ensuring seamless data flow across your entire technology stack.',
  },
  {
    question: 'How do you handle revisions and changes?',
    answer:
      'We follow an agile methodology with regular check-ins. Changes during development are accommodated through our iterative process, ensuring the final solution matches your needs.',
  },
  {
    question: 'Do you provide training for our team?',
    answer:
      'Yes, all projects include documentation and training. Enterprise plans include on-site training sessions and ongoing educational resources for your team.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer custom quotes based on project scope and requirements. Pricing is transparent and includes all development, deployment, and agreed support services.',
  },
  {
    question: 'How quickly can we start?',
    answer:
      'Initial consultations can be scheduled within days. Development begins after discovery and proposal approval. We maintain rolling availability and can discuss timeline fit during our first call.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-section bg-surface/50">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          description="Find answers to frequently asked questions about our services and process."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-surface px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

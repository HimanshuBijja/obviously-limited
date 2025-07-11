import type { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import '../styles/FAQ.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQ: FunctionComponent<FAQProps> = ({ items, title = 'Frequently Asked Questions', subtitle = 'Find answers to common questions about our services' }) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-description">{subtitle}</p>}

        <div className="faq-accordion">
          {items.map((item) => (
            <div
              className={`faq-item ${openIndex === item.id ? 'active' : ''}`}
              key={item.id}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openIndex === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                {item.question}
                <span className="faq-icon">
                  <span className="vertical-line" />
                  <span className="horizontal-line" />
                </span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${item.id}`}
                style={{
                  maxHeight: openIndex === item.id ? '500px' : '0',
                  opacity: openIndex === item.id ? 1 : 0
                }}
              >
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

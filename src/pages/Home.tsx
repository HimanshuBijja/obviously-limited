import type { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import '../styles/Home.css';
import FAQ from '../components/FAQ';

interface HomeProps {
  path?: string;
}

const Home: FunctionComponent<HomeProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    goals: ''
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    console.log('Form submitted:', formData);
    setShowForm(false);
    // Show success message or redirect
  };

  // FAQ items
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What makes OBVIOUSLY LIMITED different from other marketing agencies?',
      answer: "We combine strategic thinking with creative execution and AI-powered insights to deliver marketing campaigns that not only capture attention but drive measurable business results. Our Memphis-inspired approach brings energy and playfulness to each project while maintaining focus on your business goals."
    },
    {
      id: 'faq-2',
      question: 'How do you measure the success of your marketing campaigns?',
      answer: "We establish clear KPIs at the start of every project and use advanced analytics to track performance. Our reports include not just vanity metrics but actionable insights on ROI, conversion rates, engagement, and other business-critical indicators that connect directly to your bottom line."
    },
    {
      id: 'faq-3',
      question: 'Can you work with businesses of any size?',
      answer: "Yes! We have successfully worked with startups, mid-size companies, and large enterprises. Our strategies are tailored to your specific business needs, goals, and budget. We scale our solutions to provide the greatest impact regardless of company size."
    },
    {
      id: 'faq-4',
      question: 'What industries do you specialize in?',
      answer: "While we have experience across many sectors, we have developed particular expertise in technology, retail, sustainable brands, finance, and professional services. However, our methodology is designed to be effective across industries, adapting to the unique challenges of each market."
    },
    {
      id: 'faq-5',
      question: 'How does your AI-powered marketing strategy work?',
      answer: "Our AI marketing tool analyzes your business goals, industry trends, and customer data to generate personalized strategy recommendations. It identifies opportunities, suggests optimal channel mix, content strategies, and timing, all while continuously learning from results to improve future campaigns."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-main">Creative</span>
              <span className="hero-title-accent">Marketing</span>
              <span className="hero-title-sub">That Drives Results</span>
            </h1>
            <p className="hero-description">
              We blend strategic thinking with creative execution to deliver
              marketing campaigns that stand out and drive measurable results.
            </p>
            <div className="hero-cta">
              <a href="#ai-assistant" className="button hero-button">Get Started</a>
              <a href="/services" className="hero-link">See Our Work</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="memphis-shape shape-1" />
            <div className="memphis-shape shape-2" />
            <div className="memphis-shape shape-3" />
            <div className="memphis-shape shape-4" />
          </div>
        </div>
        <div className="hero-pattern" />
      </section>

      {/* AI Assistant Section */}
      <section id="ai-assistant" className="ai-assistant">
        <div className="container ai-container">
          <div className="ai-header">
            <h2 className="section-title">AI Marketing Strategy Builder</h2>
            <p className="section-description">
              Our AI-powered marketing assistant analyzes your business goals and creates
              tailored strategy recommendations. Get started with personalized insights
              to accelerate your marketing efforts and achieve better results.
            </p>
          </div>

          {!showForm ? (
            <div className="ai-cta">
              <button
                className="button ai-button"
                onClick={() => setShowForm(true)}
              >
                Get Recommendations
              </button>
            </div>
          ) : (
            <div className="ai-form-container">
              <form className="ai-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="business">Business Type</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="goals">Marketing Goals</label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="button submit-button">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="button cancel-button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon strategy-icon" />
              <h3>Strategy</h3>
              <p>Data-driven marketing strategies tailored to your business goals</p>
            </div>

            <div className="service-card">
              <div className="service-icon creative-icon" />
              <h3>Creative</h3>
              <p>Eye-catching designs and content that resonates with your audience</p>
            </div>

            <div className="service-card">
              <div className="service-icon digital-icon" />
              <h3>Digital</h3>
              <p>Comprehensive digital marketing campaigns across all platforms</p>
            </div>
          </div>
          <div className="services-cta">
            <a href="/services" className="button">View All Services</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />
    </div>
  );
};

export default Home;

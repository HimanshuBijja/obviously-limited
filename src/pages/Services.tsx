import type { FunctionComponent } from 'preact';
import '../styles/Services.css';

interface ServicesProps {
  path?: string;
}

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <div id="services" className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Transforming brands with strategic marketing solutions</p>
        </div>
      </section>

      <section className="case-studies">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>

          <div className="case-grid">
            <div className="case-card">
              <div className="case-header">
                <h3 className="case-title">Tech Innovators</h3>
                <div className="case-result">+87% User Acquisition in 3 months</div>
              </div>
              <div className="case-content">
                <div className="case-chart">
                  <svg viewBox="0 0 200 100" className="chart">
                    <polyline
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      points="0,90 40,80 80,50 120,30 160,20 200,10"
                    />
                    <g className="data-points">
                      <circle cx="0" cy="90" r="4" />
                      <circle cx="40" cy="80" r="4" />
                      <circle cx="80" cy="50" r="4" />
                      <circle cx="120" cy="30" r="4" />
                      <circle cx="160" cy="20" r="4" />
                      <circle cx="200" cy="10" r="4" />
                    </g>
                  </svg>
                </div>
                <p className="case-description">
                  We implemented a comprehensive digital strategy focusing on targeted
                  social media campaigns and conversion rate optimization.
                </p>
              </div>
            </div>

            <div className="case-card">
              <div className="case-header">
                <h3 className="case-title">Retail Giants</h3>
                <div className="case-result">+42% Revenue Growth in 6 months</div>
              </div>
              <div className="case-content">
                <div className="case-chart">
                  <svg viewBox="0 0 200 100" className="chart">
                    <polyline
                      fill="none"
                      stroke="var(--secondary)"
                      strokeWidth="3"
                      points="0,70 40,65 80,60 120,40 160,25 200,15"
                    />
                    <g className="data-points">
                      <circle cx="0" cy="70" r="4" />
                      <circle cx="40" cy="65" r="4" />
                      <circle cx="80" cy="60" r="4" />
                      <circle cx="120" cy="40" r="4" />
                      <circle cx="160" cy="25" r="4" />
                      <circle cx="200" cy="15" r="4" />
                    </g>
                  </svg>
                </div>
                <p className="case-description">
                  Our omnichannel marketing approach integrated online and offline
                  experiences, driving significant revenue increases.
                </p>
              </div>
            </div>

            <div className="case-card">
              <div className="case-header">
                <h3 className="case-title">Eco Solutions</h3>
                <div className="case-result">+156% Brand Awareness in 9 months</div>
              </div>
              <div className="case-content">
                <div className="case-chart">
                  <svg viewBox="0 0 200 100" className="chart">
                    <polyline
                      fill="none"
                      stroke="var(--accent1)"
                      strokeWidth="3"
                      points="0,90 40,85 80,70 120,50 160,30 200,5"
                    />
                    <g className="data-points">
                      <circle cx="0" cy="90" r="4" />
                      <circle cx="40" cy="85" r="4" />
                      <circle cx="80" cy="70" r="4" />
                      <circle cx="120" cy="50" r="4" />
                      <circle cx="160" cy="30" r="4" />
                      <circle cx="200" cy="5" r="4" />
                    </g>
                  </svg>
                </div>
                <p className="case-description">
                  We created a content marketing strategy that highlighted the brand's
                  sustainability efforts, resonating with conscious consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-offerings">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>

          <div className="services-list">
            <div className="service-item">
              <div className="service-icon strategy" />
              <h3>Strategic Planning</h3>
              <ul>
                <li>Market Research</li>
                <li>Competitive Analysis</li>
                <li>Brand Positioning</li>
                <li>Customer Journey Mapping</li>
              </ul>
            </div>

            <div className="service-item">
              <div className="service-icon creative" />
              <h3>Creative Services</h3>
              <ul>
                <li>Brand Identity</li>
                <li>Content Creation</li>
                <li>Graphic Design</li>
                <li>Video Production</li>
              </ul>
            </div>

            <div className="service-item">
              <div className="service-icon digital" />
              <h3>Digital Marketing</h3>
              <ul>
                <li>SEO & SEM</li>
                <li>Social Media Marketing</li>
                <li>Email Campaigns</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>

            <div className="service-item">
              <div className="service-icon ai" />
              <h3>AI-Powered Solutions</h3>
              <ul>
                <li>Predictive Analytics</li>
                <li>Personalization</li>
                <li>Chatbots & Automation</li>
                <li>Customer Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to transform your marketing?</h2>
          <p>Let's create a strategy that drives real results for your business.</p>
          <a href="/collaboration" className="button cta-button">Start Your Project</a>
        </div>
      </section>
    </div>
  );
};

export default Services;

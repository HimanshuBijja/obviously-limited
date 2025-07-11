import type { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import '../styles/Collaboration.css';

interface CollaborationProps {
  path?: string;
}

const Collaboration: FunctionComponent<CollaborationProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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
    setFormSubmitted(true);
  };

  // Steps in the collaboration process
  const collaborationSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, market positioning, and specific goals to create a tailored approach.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team develops a comprehensive marketing strategy based on data-driven insights and creative innovation.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the strategy across all relevant channels, constantly monitoring performance metrics.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Using real-time data, we refine and optimize campaigns to maximize ROI and achieve your business objectives.'
    },
    {
      number: '05',
      title: 'Growth',
      description: 'We scale successful strategies while continuing to innovate, ensuring long-term sustainable growth for your brand.'
    }
  ];

  return (
    <div className="collaboration-page">
      <section className="collaboration-hero">
        <div className="container">
          <h1 className="page-title">Let's Work Together</h1>
          <p className="page-subtitle">Start your journey to marketing excellence</p>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-description">
            We follow a systematic approach to ensure every collaboration delivers outstanding results.
          </p>

          <div className="steps-container">
            {collaborationSteps.map((step, index) => (
              <div className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < collaborationSteps.length - 1 && (
                  <div className="step-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Ready to transform your marketing strategy? Fill out the form
                and our team will get back to you within 24 hours to discuss
                how we can help achieve your business goals.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <h3>Address</h3>
                  <p>
                    3rd Floor, 86-90 Paul Street<br />
                    London EC2A 4NE<br />
                    United Kingdom
                  </p>
                </div>

                <div className="contact-item">
                  <h3>Contact</h3>
                  <p>
                    <a href="tel:441132837920">+44 113 283 7920</a><br />
                    <a href="mailto:info@obviouslylimited.pro">info@obviouslylimited.pro</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {!formSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Request Collaboration</h2>

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
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="goal">Your Marketing Goal</label>
                    <textarea
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon" />
                  <h2>Thank You!</h2>
                  <p>
                    Your collaboration request has been submitted successfully.
                    Our team will review your information and contact you within
                    24 hours to discuss the next steps.
                  </p>
                  <button
                    className="button"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;

import type { FunctionComponent } from 'preact';
import '../styles/About.css';

interface AboutProps {
  path?: string;
}

const About: FunctionComponent<AboutProps> = () => {
  // Timeline data for company history
  const timelineEvents = [
    {
      year: 2015,
      title: 'Founding',
      description: 'OBVIOUSLY LIMITED was founded by Anna Kris Doel with a vision to create innovative marketing strategies that deliver measurable results.'
    },
    {
      year: 2017,
      title: 'Digital Expansion',
      description: 'Expanded services to include comprehensive digital marketing solutions and opened our London headquarters.'
    },
    {
      year: 2019,
      title: 'Creative Department',
      description: 'Launched our in-house creative department, bringing together talented designers, copywriters, and content creators.'
    },
    {
      year: 2021,
      title: 'AI Integration',
      description: 'Pioneered the integration of AI-powered marketing technologies, setting new standards for data-driven strategies.'
    },
    {
      year: 2023,
      title: 'Global Reach',
      description: 'Expanded our client base to serve businesses across Europe, North America, and Asia with tailored marketing solutions.'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Marketing innovators with a passion for results</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At OBVIOUSLY LIMITED, we believe in the power of creativity backed by
              data. Our mission is to deliver marketing strategies that not only capture
              attention but drive measurable business growth.
            </p>
            <p>
              We combine strategic thinking with innovative execution to help brands
              stand out in today's crowded marketplace. Every campaign we create is
              built on insights, powered by creativity, and measured by results.
            </p>
          </div>
          <div className="mission-visual">
            <div className="memphis-shape mission-shape-1" />
            <div className="memphis-shape mission-shape-2" />
            <div className="memphis-shape mission-shape-3" />
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>

          <div className="timeline">
            <div className="timeline-line" />

            {timelineEvents.map((event, index) => (
              <div
                className={`timeline-event ${index % 2 === 0 ? 'event-left' : 'event-right'}`}
                key={event.year}
              >
                <div className="timeline-marker" />
                <div className="event-content">
                  <div className="event-year">{event.year}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon innovation" />
              <h3>Innovation</h3>
              <p>We constantly seek new ways to solve marketing challenges and drive results.</p>
            </div>

            <div className="value-card">
              <div className="value-icon integrity" />
              <h3>Integrity</h3>
              <p>We believe in transparent relationships and ethical marketing practices.</p>
            </div>

            <div className="value-card">
              <div className="value-icon collaboration" />
              <h3>Collaboration</h3>
              <p>We work closely with our clients to create strategies aligned with their goals.</p>
            </div>

            <div className="value-card">
              <div className="value-icon excellence" />
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Leadership</h2>

          <div className="team-profile">
            <div className="profile-image-container">
              <div className="profile-image" />
              <div className="profile-pattern" />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Anna Kris Doel</h3>
              <p className="profile-title">Founder & Director</p>
              <p className="profile-bio">
                With over 15 years of experience in marketing and business strategy,
                Anna founded OBVIOUSLY LIMITED to help brands achieve their full potential
                through innovative marketing approaches. Her vision drives our company's
                commitment to excellence and results-driven strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to transform your marketing?</h2>
          <p>Let's create a strategy that drives real results for your business.</p>
          <a href="/collaboration" className="button cta-button">Start Working Together</a>
        </div>
      </section>
    </div>
  );
};

export default About;

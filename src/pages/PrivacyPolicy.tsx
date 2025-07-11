import type { FunctionComponent } from 'preact';
import '../styles/Policy.css';

interface PrivacyPolicyProps {
  path?: string;
}

const PrivacyPolicy: FunctionComponent<PrivacyPolicyProps> = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1 className="policy-title">Privacy Policy</h1>
        <div className="policy-date">Last Updated: April 15, 2025</div>

        <div className="memphis-decorations">
          <div className="memphis-circle decoration-1" />
          <div className="memphis-square decoration-2" />
          <div className="memphis-triangle decoration-3" />
          <div className="memphis-zigzag decoration-4" />
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              OBVIOUSLY LIMITED ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website <strong>obviouslylimited.pro</strong> or engage with our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the site.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p><strong>Personal Data</strong></p>
            <p>
              We may collect personal identification information from you in a variety of ways, including,
              but not limited to, when you visit our site, register on the site, fill out a form, and in
              connection with other activities, services, features or resources we make available on our Site.
              You may be asked for, as appropriate, name, email address, company information, and phone number.
            </p>
            <p><strong>Usage Data</strong></p>
            <p>
              We may also collect information about how the Site is accessed and used ("Usage Data").
              This Usage Data may include information such as your computer's Internet Protocol address,
              browser type, browser version, the pages of our Site that you visit, the time and date of your visit,
              the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect from you in the following ways:</p>
            <ul className="policy-list">
              <li><span className="list-marker" />To provide and maintain our Service</li>
              <li><span className="list-marker" />To notify you about changes to our Service</li>
              <li><span className="list-marker" />To allow you to participate in interactive features of our Service</li>
              <li><span className="list-marker" />To provide customer support</li>
              <li><span className="list-marker" />To gather analysis or valuable information so that we can improve our Service</li>
              <li><span className="list-marker" />To monitor the usage of our Service</li>
              <li><span className="list-marker" />To detect, prevent and address technical issues</li>
              <li><span className="list-marker" />To provide you with news, special offers and general information about other goods,
                services and events which we offer</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to
              protect the security of any personal information we process. However, despite our safeguards
              and efforts to secure your information, no electronic transmission over the Internet or
              information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Third-Party Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"),
              to provide the Service on our behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used. These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 16. We do not knowingly collect personally
              identifiable information from anyone under the age of 16. If you are a parent or guardian and you
              are aware that your child has provided us with Personal Data, please contact us.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this
              Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Contact Us</h2>
            <div className="contact-info-box">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <a href="mailto:info@obviouslylimited.pro"> info@obviouslylimited.pro</a>
              </p>
              <p>
                <strong>OBVIOUSLY LIMITED</strong><br />
                3rd Floor, 86-90 Paul Street<br />
                London EC2A 4NE<br />
                United Kingdom
              </p>
            </div>
          </section>
        </div>

        <div className="policy-footer">
          <a href="/" className="button back-button">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

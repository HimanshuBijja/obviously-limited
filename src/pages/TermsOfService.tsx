import type { FunctionComponent } from 'preact';
import '../styles/Policy.css';

interface TermsOfServiceProps {
  path?: string;
}

const TermsOfService: FunctionComponent<TermsOfServiceProps> = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1 className="policy-title">Terms of Service</h1>
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
              Welcome to <strong>OBVIOUSLY LIMITED</strong> ("Company", "we", "our", "us"). These Terms of Service
              ("Terms", "Terms of Service") govern your use of our website located at
              <strong> obviouslylimited.pro</strong> (the "Service") operated by OBVIOUSLY LIMITED.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect,
              safeguard and disclose information that results from your use of our web pages.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy
              ("Agreements"). You acknowledge that you have read and understood Agreements,
              and agree to be bound by them.
            </p>
            <p>
              If you do not agree with these Terms, please do not use our Service. If you wish
              to access and use the Service, you must accept and comply with these Terms.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional
              materials and other information we may send. However, you may opt out of receiving any,
              or all, of these communications from us by following the unsubscribe link or instructions
              provided in any email we send.
            </p>
          </section>

          <section className="policy-section highlight-box">
            <h2>3. Services and Fees</h2>
            <p>
              OBVIOUSLY LIMITED provides marketing strategy and consultancy services. The fees for
              the services will be outlined in a separate agreement between OBVIOUSLY LIMITED and
              the client. Payment terms, refund policies, and other financial considerations will
              be specified in this agreement.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Intellectual Property</h2>
            <p>
              Our Service and its original content (excluding content provided by users),
              features and functionality are and will remain the exclusive property of
              OBVIOUSLY LIMITED and its licensors. The Service is protected by copyright,
              trademark, and other laws of both the United Kingdom and foreign countries.
              Our trademarks and trade dress may not be used in connection with any product
              or service without the prior written consent of OBVIOUSLY LIMITED.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall OBVIOUSLY LIMITED, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect, incidental, special,
              consequential or punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from (i) your access to
              or use of or inability to access or use the Service; (ii) any conduct or content
              of any third party on the Service; (iii) any content obtained from the Service; and
              (iv) unauthorized access, use or alteration of your transmissions or content, whether
              based on warranty, contract, tort (including negligence) or any other legal theory,
              whether or not we have been informed of the possibility of such damage.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Changes to Service</h2>
            <p>
              We reserve the right to withdraw or amend our Service, and any service or
              material we provide via Service, in our sole discretion without notice. We
              will not be liable if for any reason all or any part of Service is unavailable
              at any time or for any period. From time to time, we may restrict access to some
              parts of Service, or the entire Service, to users.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Amendments to Terms</h2>
            <p>
              We may amend Terms at any time by posting the amended terms on this site. It
              is your responsibility to review these Terms periodically. Your continued use
              of the Platform following the posting of revised Terms means that you accept
              and agree to the changes.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of
              the United Kingdom, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be
              considered a waiver of those rights. If any provision of these Terms is held
              to be invalid or unenforceable by a court, the remaining provisions of these
              Terms will remain in effect.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Contact Us</h2>
            <div className="contact-info-box">
              <p>
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;

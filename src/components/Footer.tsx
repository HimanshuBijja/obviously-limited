import type { FunctionComponent } from "preact";
import "../styles/Footer.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <a href="/">
              <h2>
                <span className="footer-logo-obviously">OBVIOUSLY</span>
                <span className="footer-logo-limited">LIMITED</span>
              </h2>
            </a>
            <p className="footer-address">
              <br />
              <br />
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/collaboration">Collaboration</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="https://github.com/himanshubijja">GitHub</a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bijjahimanshu05@gmail.com">
                    bijjahimanshu05@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} OBVIOUSLY LIMITED. All rights
            reserved.
          </p>
          <p className="director">Director: Jhon Doe</p>
        </div>
      </div>

      <div className="memphis-accent" />
    </footer>
  );
};

export default Footer;

import type { FunctionComponent } from 'preact';
import '../styles/NotFound.css';

interface NotFoundProps {
  default?: boolean;
}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <a href="/" className="button home-button">Go Back Home</a>
          </div>
        </div>
        <div className="not-found-visual">
          <div className="shape-container">
            <div className="memphis-shape nf-shape-1" />
            <div className="memphis-shape nf-shape-2" />
            <div className="memphis-shape nf-shape-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

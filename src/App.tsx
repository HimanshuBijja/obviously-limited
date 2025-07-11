import { Router } from 'preact-router';
import type { FunctionComponent } from 'preact';

// Layouts
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Collaboration from './pages/Collaboration';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: FunctionComponent = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <Services path="/services" />
          <About path="/about" />
          <Collaboration path="/collaboration" />
          <PrivacyPolicy path="/privacy-policy" />
          <TermsOfService path="/terms-of-service" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;

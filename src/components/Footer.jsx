import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Modexia</h3>
            <p className="footer-tagline">
              The Stripe for AI Agents. Empowering autonomous transactions with security and control.
            </p>
            <div className="social-links">
              <a href="https://github.com/modexia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/modexia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/modexia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@modexia.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#changelog">Changelog</a></li>
              <li><a href="#status">System Status</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Developers</h4>
            <ul className="footer-links">
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
              <li><a href="#sdks">SDKs & Libraries</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#press">Press Kit</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Modexia Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

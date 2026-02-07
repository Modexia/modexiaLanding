import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background-image"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Financial Infrastructure for <span className="gradient-text">AI Agents</span>
          </h1>
          
          <p className="hero-description">
            Modexia enables AI agents to hold Wallets, pay for APIs, run micropayments, and operate autonomously with strict spending limits.
          </p>

          <div className="hero-actions">
            <a href="#signup" className="btn-primary btn-large">
              Start Building
              <ArrowRight size={20} />
            </a>
            <a href="#demo" className="btn-secondary btn-large">
              View Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

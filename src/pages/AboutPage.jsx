import { Target, Users, Zap, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Modexia</h1>
          <p className="page-description">
            Building the financial infrastructure for the age of autonomous AI
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Modexia was founded on a simple observation: AI agents are becoming increasingly 
              autonomous, but they lack the financial tools to operate independently. Traditional 
              payment systems weren't designed for software that makes its own decisions.
            </p>
            <p>
              We built Modexia to be the Stripe for AI Agents—a complete financial infrastructure 
              that lets LLMs hold wallets, pay for APIs, and transact autonomously with strict 
              spending limits and complete security.
            </p>
            <p>
              Today, we're empowering thousands of developers and enterprises to build truly 
              autonomous AI systems that can handle their own financial operations while maintaining 
              human oversight and control.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower every AI agent with safe, controlled financial autonomy. We believe 
                the future of AI requires agents that can operate independently while respecting 
                the limits and intentions set by their creators.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <Zap size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                A world where AI agents seamlessly handle transactions, optimize resources, and 
                drive efficiency—all while maintaining the highest standards of security, 
                compliance, and human oversight.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <Users size={32} />
              </div>
              <h3>Our Values</h3>
              <p>
                Security first, developer experience always, transparent pricing, and building 
                for the long term. We're committed to being the most trusted financial partner 
                for AI systems.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <Globe size={32} />
              </div>
              <h3>Our Impact</h3>
              <p>
                Processing millions in AI transactions monthly, powering autonomous systems across 
                50+ countries, and helping developers build the next generation of intelligent 
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Join us in building the future</h2>
          <p>We're always looking for talented people to join our team</p>
          <div className="cta-buttons">
            <a href="/careers" className="btn-primary btn-large">View Careers</a>
            <a href="/contact" className="btn-secondary btn-large">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

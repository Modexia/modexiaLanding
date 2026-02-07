import { ArrowRight, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Financial Infrastructure for <span className="gradient-text">AI Agents</span>
          </h1>
          
          <p className="hero-description">
            Modexia enables AI agents to hold USDC accounts, pay for APIs, run micropayments, and operate autonomously with strict spending limits.
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

        <div className="hero-visual">
          <div className="code-preview">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-title">agent.js</span>
            </div>
            <div className="code-content">
              <pre>{`const modexia = require('modexia');

// Create a wallet for your AI agent
const agent = await modexia.createAgent({
  name: 'CustomerSupport',
  spendingLimit: 100.00,
  currency: 'USD'
});

// Agent transacts autonomously
await agent.payAPI('openai.com', {
  model: 'gpt-4',
  tokens: 1000
});

// Strict controls & real-time monitoring
console.log(agent.balance); // $94.32`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

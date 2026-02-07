import { Wallet, Lock, Gauge, Code, BarChart3, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wallet size={24} />,
      title: 'USDC Accounts',
      description: 'Each agent gets a USDC account. Make payments, track balances, settle instantly.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Spending Limits',
      description: 'Set per-transaction and daily caps. Agents operate within defined boundaries.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Micropayments',
      description: 'Sub-cent transactions for API calls. Pay exactly what you use, nothing more.'
    },
    {
      icon: <Code size={24} />,
      title: 'Developer-First API',
      description: 'Simple, well-documented APIs that integrate seamlessly with your existing stack.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Real-Time Analytics',
      description: 'Monitor every transaction, track spending patterns, and gain insights into agent behavior.'
    },
    {
      icon: <Gauge size={24} />,
      title: 'Built for Scale',
      description: 'Handle millions of transactions per day with enterprise-grade infrastructure.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything you need for AI payments</h2>
          <p className="section-description">
            USDC-based infrastructure for autonomous agent transactions
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

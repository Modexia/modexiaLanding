import { Wallet, Shield, Zap, BarChart3, Code, Repeat, Globe, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const ProductPage = () => {
  const coreFeatures = [
    {
      icon: <Wallet size={32} />,
      title: 'USDC Accounts',
      description: 'Each agent gets a USDC account. Individual balances, complete transaction history.',
      capabilities: [
        'Instant account creation',
        'USDC settlements',
        'Hierarchical structures',
        'Real-time balance tracking'
      ]
    },
    {
      icon: <Lock size={32} />,
      title: 'Spending Controls',
      description: 'Set granular limits and approval workflows to ensure agents never exceed budgets.',
      capabilities: [
        'Per-transaction limits',
        'Daily/monthly caps',
        'Service allowlists',
        'Approval workflows'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Micropayments',
      description: 'Sub-cent transactions for API calls. Pay per use, instant settlement.',
      capabilities: [
        'Sub-100ms latency',
        '99.99% uptime',
        'Fraction-of-cent precision',
        'Automatic retries'
      ]
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics & Insights',
      description: 'Deep visibility into agent spending patterns and cost optimization opportunities.',
      capabilities: [
        'Real-time dashboards',
        'Custom reports',
        'Anomaly detection',
        'Budget forecasting'
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: 'API & Integration',
      features: [
        'RESTful API with OpenAPI spec',
        'GraphQL support',
        'SDKs in 8+ languages',
        'Webhook notifications',
        'Sandbox environment'
      ]
    },
    {
      category: 'Security & Compliance',
      features: [
        'AES-256 encryption',
        'PCI-DSS Level 1 compliant',
        'SOC 2 Type II certified',
        'GDPR compliant',
        'Regular security audits'
      ]
    },
    {
      category: 'Performance',
      features: [
        'Sub-100ms response times',
        '99.99% uptime SLA',
        'Horizontal auto-scaling',
        'Multi-region deployment',
        'CDN-backed assets'
      ]
    },
    {
      category: 'Developer Tools',
      features: [
        'Interactive API explorer',
        'Postman collections',
        'CLI tools',
        'Testing utilities',
        'Migration scripts'
      ]
    }
  ];

  return (
    <div className="product-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">The Complete Financial Platform for AI Agents</h1>
          <p className="page-description">
            Everything you need to give your AI agents financial autonomy with complete control and security
          </p>
        </div>
      </section>

      <section className="product-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Built for Autonomous AI</h2>
              <p>
                Agents hold USDC accounts. They pay for APIs, execute micropayments, operate independently. 
                No credit cards, no traditional banking—just programmable stablecoin accounts with strict controls.
              </p>
              <ul className="overview-benefits">
                <li><CheckCircle size={20} /> Production-ready in minutes</li>
                <li><CheckCircle size={20} /> Enterprise-grade security</li>
                <li><CheckCircle size={20} /> Scales to millions of transactions</li>
                <li><CheckCircle size={20} /> Comprehensive developer tools</li>
              </ul>
              <a href="/docs" className="btn-primary">
                View Documentation
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="overview-visual">
              <div className="product-demo-card">
                <div className="demo-header">
                  <span className="demo-badge">Live Demo</span>
                </div>
                <div className="demo-content">
                  <div className="demo-stat">
                    <div className="stat-value">$2.4M</div>
                    <div className="stat-label">Processed Today</div>
                  </div>
                  <div className="demo-stat">
                    <div className="stat-value">12,450</div>
                    <div className="stat-label">Active Agents</div>
                  </div>
                  <div className="demo-stat">
                    <div className="stat-value">99.99%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-features">
        <div className="container">
          <h2 className="section-title">Core Capabilities</h2>
          <div className="features-showcase">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="showcase-card">
                <div className="showcase-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="capability-list">
                  {feature.capabilities.map((cap, i) => (
                    <li key={i}>
                      <ArrowRight size={14} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-specs">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="spec-card">
                <h3>{spec.category}</h3>
                <ul>
                  {spec.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="integration-section">
        <div className="container">
          <h2 className="section-title">Seamless Integration</h2>
          <p className="section-description">
            Works with your existing stack and favorite frameworks
          </p>
          <div className="integration-grid">
            <div className="integration-card">
              <Code size={32} />
              <h4>LangChain</h4>
              <p>Native integration with LangChain agents</p>
            </div>
            <div className="integration-card">
              <Code size={32} />
              <h4>AutoGPT</h4>
              <p>Drop-in plugin for AutoGPT systems</p>
            </div>
            <div className="integration-card">
              <Code size={32} />
              <h4>OpenAI</h4>
              <p>Automatic payment handling for OpenAI APIs</p>
            </div>
            <div className="integration-card">
              <Code size={32} />
              <h4>Custom Agents</h4>
              <p>REST API for any framework or language</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Create your first agent wallet in under 5 minutes</p>
          <div className="cta-buttons">
            <a href="/docs" className="btn-primary btn-large">Read Documentation</a>
            <a href="/contact" className="btn-secondary btn-large">Talk to Sales</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

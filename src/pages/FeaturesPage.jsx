import { Wallet, Lock, Zap, Code, BarChart3, Gauge, Shield, Globe, Repeat, Clock, DollarSign, CheckCircle } from 'lucide-react';

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: <Wallet size={32} />,
      title: 'AI Agent Wallets',
      description: 'Create isolated, secure wallets for each AI agent in your system. Every agent gets its own balance, transaction history, and spending controls.',
      details: [
        'Instant wallet creation via API',
        'Multi-currency support (USD, EUR, GBP, crypto)',
        'Hierarchical wallet structures for complex systems',
        'Real-time balance updates',
        'Automatic reconciliation'
      ]
    },
    {
      icon: <Lock size={32} />,
      title: 'Granular Spending Controls',
      description: 'Set precise limits at every level - per transaction, daily, weekly, or monthly. Define allowed services and approval workflows.',
      details: [
        'Per-transaction amount limits',
        'Daily/weekly/monthly spending caps',
        'Service-specific allowlists',
        'Approval workflows for high-value transactions',
        'Automatic spending alerts',
        'Emergency freeze functionality'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning-Fast Payments',
      description: 'Process payments in milliseconds with our optimized infrastructure. Never slow down your AI agents waiting for payment confirmations.',
      details: [
        'Sub-100ms API response times',
        '99.99% uptime SLA',
        'Global edge network',
        'Automatic retry logic',
        'Idempotent requests'
      ]
    },
    {
      icon: <Shield size={32} />,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, compliance certifications, and security practices to protect your agents and funds.',
      details: [
        'AES-256 encryption at rest',
        'TLS 1.3 for data in transit',
        'PCI-DSS Level 1 compliant',
        'SOC 2 Type II certified',
        '2FA and API key rotation',
        'Regular security audits'
      ]
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Advanced Analytics',
      description: 'Gain deep insights into agent spending patterns, optimize costs, and detect anomalies in real-time.',
      details: [
        'Real-time spending dashboards',
        'Custom reports and exports',
        'Anomaly detection with ML',
        'Cost optimization recommendations',
        'Agent performance metrics',
        'Predictive budget forecasting'
      ]
    },
    {
      icon: <Code size={32} />,
      title: 'Developer-First API',
      description: 'Clean, RESTful APIs with comprehensive documentation, SDKs in 8+ languages, and excellent developer experience.',
      details: [
        'RESTful API design',
        'GraphQL support',
        'SDKs: Python, Node.js, Go, Java, Ruby, PHP, .NET, Rust',
        'Webhook notifications',
        'Sandbox environment',
        'Postman collections'
      ]
    },
    {
      icon: <Gauge size={32} />,
      title: 'Infinite Scalability',
      description: 'From 10 to 10 million transactions per day, our infrastructure scales automatically to meet your needs.',
      details: [
        'Horizontal auto-scaling',
        'Load balancing across regions',
        'Rate limiting per tier',
        'Burst capacity handling',
        'No transaction volume limits on Enterprise'
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Coverage',
      description: 'Support for 135+ currencies, payment methods in 180+ countries, and localized experiences.',
      details: [
        '135+ fiat currencies',
        'Major cryptocurrency support',
        '180+ countries supported',
        'Local payment methods',
        'Multi-language documentation',
        'Timezone-aware operations'
      ]
    },
    {
      icon: <Repeat size={32} />,
      title: 'Automated Reconciliation',
      description: 'Automatic matching of payments, invoices, and receipts. Perfect audit trails for compliance.',
      details: [
        'Automatic transaction matching',
        'Invoice generation',
        'Receipt storage and retrieval',
        'Export to accounting systems',
        'Dispute resolution workflow'
      ]
    },
    {
      icon: <Clock size={32} />,
      title: 'Transaction History',
      description: 'Complete, immutable record of every transaction with searchable filters and detailed metadata.',
      details: [
        'Immutable transaction logs',
        'Advanced search and filtering',
        'Metadata attachment',
        'Audit trail exports',
        'Data retention controls',
        '7-year history by default'
      ]
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Flexible Funding',
      description: 'Multiple ways to fund agent wallets - credit cards, bank transfers, crypto, or automated top-ups.',
      details: [
        'Credit/debit card payments',
        'ACH and wire transfers',
        'Cryptocurrency deposits',
        'Automatic top-up rules',
        'Balance alerts',
        'Scheduled funding'
      ]
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Compliance Ready',
      description: 'Built-in compliance tools for AML, KYC, tax reporting, and regulatory requirements across jurisdictions.',
      details: [
        'Automated KYC verification',
        'AML monitoring and alerts',
        'Tax document generation',
        'GDPR compliance tools',
        'Regulatory reporting',
        'Jurisdiction-specific rules'
      ]
    }
  ];

  return (
    <div className="features-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Powerful Features for AI Payments</h1>
          <p className="page-description">
            Everything you need to give your AI agents financial autonomy while maintaining complete control and visibility.
          </p>
        </div>
      </section>

      <section className="feature-details">
        <div className="container">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="feature-detail-card">
              <div className="feature-detail-header">
                <div className="feature-detail-icon">{feature.icon}</div>
                <div>
                  <h2 className="feature-detail-title">{feature.title}</h2>
                  <p className="feature-detail-description">{feature.description}</p>
                </div>
              </div>
              <ul className="feature-detail-list">
                {feature.details.map((detail, i) => (
                  <li key={i}>
                    <CheckCircle size={18} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to empower your AI agents?</h2>
          <p>Start building with Modexia today - no credit card required</p>
          <a href="/signup" className="btn-primary btn-large">Get Started Free</a>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;

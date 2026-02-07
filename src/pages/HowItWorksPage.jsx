import { UserPlus, Settings, Rocket, ArrowRight, Code2, Plug, Play, BarChart3 } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      icon: <UserPlus size={40} />,
      title: 'Sign Up & Get API Keys',
      description: 'Create your Modexia account in under 2 minutes. Get instant access to your API keys and sandbox environment.',
      details: [
        'Email or GitHub sign-up',
        'Instant API key generation',
        'Access to sandbox environment',
        'No credit card required for testing',
        'Free tier includes $100 transaction volume'
      ],
      code: `// Initialize Modexia
import Modexia from 'modexia';

const modexia = new Modexia({
  apiKey: process.env.MODEXIA_API_KEY,
  environment: 'production'
});`
    },
    {
      number: '02',
      icon: <Settings size={40} />,
      title: 'Create Agent Wallets',
      description: 'Set up wallets for your AI agents with just a few lines of code. Configure spending limits and permissions.',
      details: [
        'Create wallets via API or dashboard',
        'Set initial balance',
        'Configure spending limits',
        'Define allowed services',
        'Set up approval workflows'
      ],
      code: `// Create an AI agent wallet
const agent = await modexia.agents.create({
  name: 'CustomerSupportAgent',
  description: 'Handles customer inquiries',
  initialBalance: 50.00,
  currency: 'USD',
  limits: {
    perTransaction: 10.00,
    daily: 100.00,
    monthly: 2000.00
  },
  allowedServices: ['openai.com', 'pinecone.io']
});

console.log('Agent ID:', agent.id);
console.log('Wallet Address:', agent.walletAddress);`
    },
    {
      number: '03',
      icon: <Plug size={40} />,
      title: 'Integrate with Your Stack',
      description: 'Add Modexia to your existing AI workflows. Our SDKs work seamlessly with popular frameworks.',
      details: [
        'Works with LangChain, AutoGPT, etc.',
        'Compatible with any LLM',
        'Webhook support for real-time events',
        'Middleware for popular frameworks',
        'Drop-in replacement for existing payment flows'
      ],
      code: `// Integrate with LangChain
from langchain.agents import initialize_agent
from langchain.tools import Tool
from modexia import ModexiaPaymentTool

# Add Modexia payment capability
payment_tool = ModexiaPaymentTool(
    agent_id=agent.id,
    api_key=os.environ['MODEXIA_API_KEY']
)

tools = [payment_tool, ...other_tools]
agent = initialize_agent(tools, llm, agent="zero-shot")`
    },
    {
      number: '04',
      icon: <Play size={40} />,
      title: 'Let Agents Transact',
      description: 'Your AI agents can now make payments autonomously. Every transaction is logged, monitored, and controlled.',
      details: [
        'Agents pay for APIs automatically',
        'Real-time transaction monitoring',
        'Automatic limit enforcement',
        'Fraud detection',
        'Instant notifications'
      ],
      code: `// Agent makes an autonomous payment
const payment = await agent.pay({
  service: 'openai.com',
  amount: 2.50,
  description: 'GPT-4 API call - 1000 tokens',
  metadata: {
    model: 'gpt-4',
    tokens: 1000,
    requestId: 'req_abc123'
  }
});

// Payment is automatically approved if within limits
console.log('Payment status:', payment.status); // 'approved'
console.log('New balance:', agent.balance); // $47.50`
    },
    {
      number: '05',
      icon: <BarChart3 size={40} />,
      title: 'Monitor & Optimize',
      description: 'Track spending in real-time, identify optimization opportunities, and get alerted to anomalies.',
      details: [
        'Real-time dashboards',
        'Spending analytics',
        'Cost optimization tips',
        'Anomaly detection',
        'Custom alerts',
        'Budget forecasting'
      ],
      code: `// Get agent analytics
const analytics = await modexia.analytics.getAgentStats({
  agentId: agent.id,
  period: 'last_30_days'
});

console.log('Total spent:', analytics.totalSpent);
console.log('Avg per transaction:', analytics.avgTransaction);
console.log('Most used service:', analytics.topService);
console.log('Cost savings tips:', analytics.optimizations);`
    },
    {
      number: '06',
      icon: <Rocket size={40} />,
      title: 'Scale to Production',
      description: 'Deploy with confidence. Our infrastructure scales automatically as your agent fleet grows.',
      details: [
        'Automatic scaling',
        'Multi-region deployment',
        '99.99% uptime SLA',
        'Dedicated support',
        'Custom integrations',
        'Priority processing'
      ],
      code: `// Production-ready features
await modexia.agents.bulkCreate([
  { name: 'Agent1', limits: {...} },
  { name: 'Agent2', limits: {...} },
  // ... create 1000s of agents
]);

// Set up webhooks for events
await modexia.webhooks.create({
  url: 'https://api.yourapp.com/webhooks',
  events: [
    'payment.completed',
    'limit.exceeded',
    'balance.low',
    'anomaly.detected'
  ]
});`
    }
  ];

  return (
    <div className="how-it-works-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">How Modexia Works</h1>
          <p className="page-description">
            From setup to production in minutes. Here's exactly how to give your AI agents financial autonomy.
          </p>
        </div>
      </section>

      <section className="detailed-steps">
        <div className="container">
          {steps.map((step, index) => (
            <div key={index} className="detailed-step">
              <div className="step-sidebar">
                <div className="step-number-large">{step.number}</div>
                <div className="step-icon-large">{step.icon}</div>
              </div>
              <div className="step-main-content">
                <h2 className="step-main-title">{step.title}</h2>
                <p className="step-main-description">{step.description}</p>
                <ul className="step-details-list">
                  {step.details.map((detail, i) => (
                    <li key={i}>
                      <ArrowRight size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="code-example">
                  <div className="code-example-header">
                    <Code2 size={16} />
                    <span>Code Example</span>
                  </div>
                  <pre><code>{step.code}</code></pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Join hundreds of developers building autonomous AI agents with Modexia</p>
          <div className="cta-buttons">
            <a href="/signup" className="btn-primary btn-large">Start Building Free</a>
            <a href="/docs" className="btn-secondary btn-large">Read Documentation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;

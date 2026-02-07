import { Book, Code2, Rocket, Terminal, Zap, FileText, Video, MessageCircle, Github, ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Check = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowMenuBtn(false);
      } else {
        setShowMenuBtn(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const sidebarSections = [
    {
      title: 'Getting Started',
      items: [
        { id: 'quickstart', name: 'Quick Start', icon: <Rocket size={16} /> },
        { id: 'installation', name: 'Installation', icon: <Terminal size={16} /> },
        { id: 'authentication', name: 'Authentication', icon: <FileText size={16} /> }
      ]
    },
    {
      title: 'Core Concepts',
      items: [
        { id: 'usdc-accounts', name: 'USDC Accounts', icon: <Book size={16} /> },
        { id: 'spending-controls', name: 'Spending Controls', icon: <FileText size={16} /> },
        { id: 'micropayments', name: 'Micropayments', icon: <Zap size={16} /> }
      ]
    },
    {
      title: 'API Reference',
      items: [
        { id: 'agents-api', name: 'Agents API', icon: <Code2 size={16} /> },
        { id: 'payments-api', name: 'Payments API', icon: <Code2 size={16} /> },
        { id: 'webhooks', name: 'Webhooks', icon: <Code2 size={16} /> }
      ]
    },
    {
      title: 'SDKs',
      items: [
        { id: 'python-sdk', name: 'Python SDK', icon: <Terminal size={16} /> },
        { id: 'javascript-sdk', name: 'JavaScript SDK', icon: <Terminal size={16} /> }
      ]
    },
    {
      title: 'Guides',
      items: [
        { id: 'langchain', name: 'LangChain Integration', icon: <Book size={16} /> },
        { id: 'production', name: 'Production Best Practices', icon: <Book size={16} /> },
        { id: 'security', name: 'Security Guidelines', icon: <Book size={16} /> }
      ]
    }
  ];

  const content = {
    quickstart: {
      title: 'Quick Start',
      content: (
        <>
          <p className="doc-intro">Get started with Modexia in under 5 minutes. This guide will walk you through creating your first USDC account for an AI agent and making a payment.</p>
          
          <h3>Installation</h3>
          <div className="code-block">
            <div className="code-header">
              <span>bash</span>
            </div>
            <pre>{`# Python
pip install modexia

# JavaScript
npm install modexia`}</pre>
          </div>

          <h3>Create Your First Agent Account</h3>
          <p>Initialize the client and create a USDC account for your agent:</p>
          <div className="code-block">
            <div className="code-header">
              <span>Python</span>
            </div>
            <pre>{`from modexia import Modexia

# Initialize client
client = Modexia(api_key="your_api_key")

# Create USDC account
agent = client.agents.create(
    name="Assistant",
    initial_balance=100.00,
    limits={
        "per_transaction": 10.00,
        "daily": 50.00
    }
)

print(f"Agent ID: " + agent.id)
print(f"Balance: $" + str(agent.balance))`}</pre>
          </div>

          <h3>Make a Payment</h3>
          <p>Execute a micropayment from your agent's USDC account:</p>
          <div className="code-block">
            <div className="code-header">
              <span>Python</span>
            </div>
            <pre>{`# Agent makes payment
payment = agent.pay(
    service="openai.com",
    amount=2.50,
    description="GPT-4 API call"
)

print(f"Payment Status: " + payment.status)
print(f"Remaining Balance: $" + str(agent.balance))`}</pre>
          </div>

          <div className="doc-callout">
            <h4>✓ Next Steps</h4>
            <ul>
              <li>Learn about <a href="#spending-controls">Spending Controls</a></li>
              <li>Explore the <a href="#agents-api">Agents API</a></li>
              <li>Set up <a href="#webhooks">Webhooks</a> for notifications</li>
            </ul>
          </div>
        </>
      )
    },
    'python-sdk': {
      title: 'Python SDK',
      content: (
        <>
          <p className="doc-intro">Complete reference for the Modexia Python SDK. Build AI agents with USDC payment capabilities.</p>
          
          <h3>Installation</h3>
          <div className="code-block">
            <div className="code-header">
              <span>bash</span>
            </div>
            <pre>{`pip install modexia`}</pre>
          </div>

          <h3>Authentication</h3>
          <div className="code-block">
            <div className="code-header">
              <span>Python</span>
            </div>
            <pre>{`from modexia import Modexia

client = Modexia(
    api_key="your_api_key",
    environment="production"  # or "sandbox"
)`}</pre>
          </div>

          <h3>Core Methods</h3>
          <h4>client.agents.create()</h4>
          <p>Create a new agent with a USDC account.</p>
          <div className="code-block">
            <pre>{`agent = client.agents.create(
    name="Assistant",
    initial_balance=100.00,
    limits={
        "per_transaction": 10.00,
        "daily": 50.00,
        "monthly": 500.00
    },
    allowed_services=["openai.com", "anthropic.com"]
)`}</pre>
          </div>

          <h4>agent.pay()</h4>
          <p>Execute a payment from the agent's USDC account.</p>
          <div className="code-block">
            <pre>{`payment = agent.pay(
    service="openai.com",
    amount=2.50,
    description="API call",
    metadata={"model": "gpt-4"}
)`}</pre>
          </div>

          <h4>agent.get_balance()</h4>
          <p>Check the current USDC balance.</p>
          <div className="code-block">
            <pre>{`balance = agent.get_balance()
print(f"Current balance: $" + str(balance))`}</pre>
          </div>
        </>
      )
    },
    'javascript-sdk': {
      title: 'JavaScript SDK',
      content: (
        <>
          <p className="doc-intro">Complete reference for the Modexia JavaScript SDK. Build AI agents with USDC payment capabilities in Node.js or browser.</p>
          
          <h3>Installation</h3>
          <div className="code-block">
            <div className="code-header">
              <span>bash</span>
            </div>
            <pre>{`npm install modexia
# or
yarn add modexia`}</pre>
          </div>

          <h3>Authentication</h3>
          <div className="code-block">
            <div className="code-header">
              <span>JavaScript</span>
            </div>
            <pre>{`import Modexia from 'modexia';

const client = new Modexia({
  apiKey: 'your_api_key',
  environment: 'production' // or 'sandbox'
});`}</pre>
          </div>

          <h3>Core Methods</h3>
          <h4>client.agents.create()</h4>
          <p>Create a new agent with a USDC account.</p>
          <div className="code-block">
            <pre>{`const agent = await client.agents.create({
  name: 'Assistant',
  initialBalance: 100.00,
  limits: {
    perTransaction: 10.00,
    daily: 50.00,
    monthly: 500.00
  },
  allowedServices: ['openai.com', 'anthropic.com']
});`}</pre>
          </div>

          <h4>agent.pay()</h4>
          <p>Execute a payment from the agent's USDC account.</p>
          <div className="code-block">
            <pre>{`const payment = await agent.pay({
  service: 'openai.com',
  amount: 2.50,
  description: 'API call',
  metadata: { model: 'gpt-4' }
});`}</pre>
          </div>

          <h4>agent.getBalance()</h4>
          <p>Check the current USDC balance.</p>
          <div className="code-block">
            <pre>{`const balance = await agent.getBalance();
console.log(\`Current balance: $\${balance}\`);`}</pre>
          </div>
        </>
      )
    }
  };

  // Add other content sections as needed
  Object.assign(content, {
    installation: { title: 'Installation', content: <p>Installation guide coming soon...</p> },
    authentication: { title: 'Authentication', content: <p>Authentication guide coming soon...</p> },
    'usdc-accounts': { title: 'USDC Accounts', content: <p>USDC Accounts documentation coming soon...</p> },
    'spending-controls': { title: 'Spending Controls', content: <p>Spending Controls guide coming soon...</p> },
    micropayments: { title: 'Micropayments', content: <p>Micropayments documentation coming soon...</p> },
    'agents-api': { title: 'Agents API', content: <p>Agents API reference coming soon...</p> },
    'payments-api': { title: 'Payments API', content: <p>Payments API reference coming soon...</p> },
    webhooks: { title: 'Webhooks', content: <p>Webhooks documentation coming soon...</p> },
    langchain: { title: 'LangChain Integration', content: <p>LangChain integration guide coming soon...</p> },
    production: { title: 'Production Best Practices', content: <p>Production guide coming soon...</p> },
    security: { title: 'Security Guidelines', content: <p>Security guidelines coming soon...</p> }
  });

  return (
    <div className="docs-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Documentation</h1>
          <p className="page-description">
            Everything you need to build with Modexia
          </p>
        </div>
      </section>

      <section className="docs-layout">
        <div className="container">
          <div className="docs-container">
            <button 
              className={`mobile-docs-menu-btn ${showMenuBtn ? 'visible' : 'hidden'}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              <span>{sidebarOpen ? 'Close Menu' : 'Menu'}</span>
            </button>

            <aside className={`docs-sidebar ${sidebarOpen ? 'mobile-open' : ''}`}>
              <div className="sidebar-content">
                {sidebarSections.map((section, idx) => (
                  <div key={idx} className="sidebar-section">
                    <h3 className="sidebar-section-title">{section.title}</h3>
                    <ul className="sidebar-items">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => {
                              setActiveSection(item.id);
                              setSidebarOpen(false);
                            }}
                          >
                            {item.icon}
                            <span>{item.name}</span>
                            {activeSection === item.id && <ChevronRight size={16} />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            <main className="docs-content-main">
              <article className="doc-article">
                <h1>{content[activeSection]?.title || 'Documentation'}</h1>
                <div className="doc-content">
                  {content[activeSection]?.content || <p>Content coming soon...</p>}
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;

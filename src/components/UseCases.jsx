import { Bot, ShoppingCart, Headphones, Building2 } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: <Bot size={32} />,
      title: 'AI Developers',
      description: 'Build autonomous agents that can handle their own API costs and service payments without manual intervention.',
      examples: ['LLM API costs', 'Data service access', 'Cloud compute payments']
    },
    {
      icon: <Building2 size={32} />,
      title: 'Enterprise Teams',
      description: 'Deploy AI agents across your organization with centralized billing, compliance controls, and spend management.',
      examples: ['Department budgets', 'Cost allocation', 'Audit trails']
    },
    {
      icon: <Headphones size={32} />,
      title: 'Support Automation',
      description: 'Let customer service agents automatically pay for premium tools and services to resolve tickets faster.',
      examples: ['Knowledge base access', 'Translation services', 'Priority support APIs']
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Commerce Agents',
      description: 'Enable AI shopping assistants to make purchases, process refunds, and handle transactions on behalf of users.',
      examples: ['Autonomous purchasing', 'Price comparisons', 'Subscription management']
    }
  ];

  return (
    <section id="use-cases" className="use-cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built for everyone building with AI</h2>
          <p className="section-description">
            From solo developers to enterprise teams, Modexia scales with your needs
          </p>
        </div>

        <div className="use-cases-grid">
          {cases.map((useCase, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-icon">{useCase.icon}</div>
              <h3 className="use-case-title">{useCase.title}</h3>
              <p className="use-case-description">{useCase.description}</p>
              <div className="use-case-examples">
                {useCase.examples.map((example, i) => (
                  <span key={i} className="example-tag">{example}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

import { Check, X, HelpCircle } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for testing and small projects',
      price: 0,
      period: 'free forever',
      popular: false,
      features: [
        { text: '3 AI agent wallets', included: true },
        { text: '$100 monthly transaction volume', included: true },
        { text: 'Basic spending controls', included: true },
        { text: 'Email support (48hr response)', included: true },
        { text: 'API access', included: true },
        { text: 'Community access', included: true },
        { text: 'Sandbox environment', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Webhooks', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom integrations', included: false },
        { text: 'SLA guarantee', included: false }
      ]
    },
    {
      name: 'Professional',
      description: 'For growing teams and production apps',
      price: 49,
      period: '/month',
      popular: true,
      features: [
        { text: 'Unlimited AI agent wallets', included: true },
        { text: '$10,000 monthly transaction volume', included: true },
        { text: 'Advanced spending controls', included: true },
        { text: 'Priority email support (12hr response)', included: true },
        { text: 'API access with higher rate limits', included: true },
        { text: 'Webhooks & real-time events', included: true },
        { text: 'Custom approval workflows', included: true },
        { text: 'Detailed analytics & reporting', included: true },
        { text: 'Multi-user team access', included: true },
        { text: '99.9% uptime SLA', included: true },
        { text: 'Phone support', included: false },
        { text: 'Custom integrations', included: false }
      ]
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
      period: 'contact sales',
      popular: false,
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Unlimited transaction volume', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: '24/7 phone & Slack support', included: true },
        { text: 'Custom integrations', included: true },
        { text: '99.99% uptime SLA', included: true },
        { text: 'Advanced compliance tools', included: true },
        { text: 'On-premise deployment option', included: true },
        { text: 'White-label solution', included: true },
        { text: 'Custom contract terms', included: true },
        { text: 'Dedicated infrastructure', included: true },
        { text: 'Training & onboarding', included: true }
      ]
    }
  ];

  const addOns = [
    {
      name: 'Additional Transaction Volume',
      description: 'Add more transaction capacity beyond your plan limit',
      price: '$0.50 per $1,000',
      plans: ['Professional', 'Enterprise']
    },
    {
      name: 'Premium Support',
      description: '24/7 phone and Slack support with 2-hour response time',
      price: '$500/month',
      plans: ['Professional']
    },
    {
      name: 'Custom Integration',
      description: 'We build a custom integration for your specific use case',
      price: 'Starting at $5,000',
      plans: ['Professional', 'Enterprise']
    },
    {
      name: 'Compliance Package',
      description: 'Advanced compliance tools including SOC 2, HIPAA, PCI-DSS',
      price: '$1,000/month',
      plans: ['Professional', 'Enterprise']
    }
  ];

  const faqs = [
    {
      question: 'What counts as a transaction?',
      answer: 'Any payment made by an AI agent to a service or API provider counts as a transaction. We count the dollar amount, not the number of API calls. For example, if an agent pays $5 for OpenAI API usage, that\'s $5 of transaction volume.'
    },
    {
      question: 'What happens if I exceed my transaction volume?',
      answer: 'On the Starter plan, transactions will be declined once you hit the $100 limit. On Professional and Enterprise plans, we automatically charge overage fees at $0.50 per $1,000 of additional volume. You can set up alerts to notify you before hitting your limit.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can upgrade at any time and the change takes effect immediately. When downgrading, the change takes effect at the end of your current billing period. We\'ll prorate any unused time on your current plan.'
    },
    {
      question: 'Do you offer annual billing?',
      answer: 'Yes! Annual billing gives you 2 months free (equivalent to 16% off). Contact sales for Enterprise annual contracts with custom terms.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'The Starter plan is free forever - no credit card required. It\'s perfect for testing and small projects. When you\'re ready to scale, upgrade to Professional or Enterprise.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, Amex), ACH transfers, and wire transfers for Enterprise plans. Invoicing is available for annual contracts.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! The only additional costs are clearly documented overage fees if you exceed your transaction volume on paid plans. Everything else is included in your plan price.'
    },
    {
      question: 'What\'s your refund policy?',
      answer: 'We offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied, contact support within 30 days for a full refund, no questions asked.'
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Simple, Transparent Pricing</h1>
          <p className="page-description">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
          <div className="billing-toggle">
            <span className="billing-option active">Monthly</span>
            <span className="billing-option">Annual <span className="save-badge">Save 16%</span></span>
          </div>
        </div>
      </section>

      <section className="pricing-comparison">
        <div className="container">
          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card-detailed ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="pricing-card-header">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="price-display">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="currency">$</span>
                        <span className="amount">{plan.price}</span>
                        <span className="period">{plan.period}</span>
                      </>
                    ) : (
                      <>
                        <span className="amount-custom">{plan.price}</span>
                        <span className="period">{plan.period}</span>
                      </>
                    )}
                  </div>
                  <a 
                    href={plan.price === 'Custom' ? '/contact-sales' : '/signup'} 
                    className={plan.popular ? 'btn-primary full-width' : 'btn-secondary full-width'}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>

                <div className="pricing-card-features">
                  <h4>Everything included:</h4>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i} className={feature.included ? 'included' : 'not-included'}>
                        {feature.included ? <Check size={18} /> : <X size={18} />}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="add-ons-section">
        <div className="container">
          <h2 className="section-title">Add-ons & Extensions</h2>
          <p className="section-description">Extend your plan with premium features</p>
          <div className="add-ons-grid">
            {addOns.map((addon, index) => (
              <div key={index} className="addon-card">
                <h3>{addon.name}</h3>
                <p>{addon.description}</p>
                <div className="addon-price">{addon.price}</div>
                <div className="addon-plans">
                  Available for: {addon.plans.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <HelpCircle size={20} />
                  <h3>{faq.question}</h3>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Still have questions?</h2>
          <p>Our team is here to help you choose the right plan</p>
          <div className="cta-buttons">
            <a href="/contact-sales" className="btn-primary btn-large">Talk to Sales</a>
            <a href="/signup" className="btn-secondary btn-large">Start Free Trial</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

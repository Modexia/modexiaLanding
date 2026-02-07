import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for testing and small projects',
      price: 0,
      period: 'free',
      subtitle: 'No credit card required',
      features: [
        '3 AI agent wallets',
        '$100 monthly transaction volume',
        'Basic spending controls',
        'Email support',
        'API access',
        'Community access'
      ]
    },
    {
      name: 'Professional',
      description: 'For growing teams and production apps',
      price: 49,
      period: '/month',
      subtitle: 'Billed monthly',
      popular: true,
      features: [
        'Unlimited AI agent wallets',
        '$10,000 monthly transaction volume',
        'Advanced spending controls',
        'Priority support',
        'Webhooks & real-time events',
        'Custom approval workflows',
        'Detailed analytics',
        'Multi-user access'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
      period: '',
      subtitle: 'Contact sales',
      features: [
        'Everything in Professional',
        'Unlimited transaction volume',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantee',
        'Advanced compliance tools',
        'On-premise deployment option'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-description">
            Start free, scale as you grow. No hidden fees or surprises.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-description">{plan.description}</div>
              
              <div className="pricing-price">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className="pricing-amount">${plan.price}</span>
                    <span className="pricing-period">{plan.period}</span>
                  </>
                ) : (
                  <span className="pricing-amount" style={{ fontSize: '32px' }}>{plan.price}</span>
                )}
              </div>
              <div className="pricing-subtitle">{plan.subtitle}</div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature">
                    <Check size={18} className="feature-icon-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#signup" className={plan.popular ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { UserPlus, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <UserPlus size={28} />,
      title: 'Create USDC Accounts',
      description: 'Set up USDC accounts for your agents. Each account is isolated, tracked, auditable.'
    },
    {
      number: '02',
      icon: <Settings size={28} />,
      title: 'Set Spending Controls',
      description: 'Define limits per transaction, per day. Specify which services agents can pay for.'
    },
    {
      number: '03',
      icon: <Rocket size={28} />,
      title: 'Deploy & Monitor',
      description: 'Agents transact autonomously. Every payment logged, tracked in real-time.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get started in minutes</h2>
          <p className="section-description">
            Three simple steps to give your AI agents financial autonomy
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

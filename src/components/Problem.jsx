import { AlertTriangle, TrendingUp } from 'lucide-react';

const Problem = () => {
  return (
    <section className="problem">
      <div className="container">
        <div className="problem-content">
          <div className="problem-section">
            <div className="problem-icon-wrapper">
              <AlertTriangle size={32} />
            </div>
            <h2 className="problem-title">The Problem</h2>
            <p className="problem-text">
              AI agents need to pay for APIs, make purchases, and handle transactions—but current 
              payment systems weren't built for autonomous software. Developers face:
            </p>
            <ul className="problem-list">
              <li>No way to give agents controlled access to funds</li>
              <li>Risk of unlimited spending without proper guardrails</li>
              <li>Complex integrations with traditional payment systems</li>
              <li>Lack of real-time monitoring and transaction visibility</li>
              <li>Security concerns around autonomous financial operations</li>
            </ul>
          </div>

          <div className="solution-section">
            <div className="solution-icon-wrapper">
              <TrendingUp size={32} />
            </div>
            <h2 className="solution-title">Our Solution</h2>
            <p className="solution-text">
              Modexia provides a complete financial infrastructure designed specifically for AI agents. 
              We make it simple to:
            </p>
            <ul className="solution-list">
              <li>Create secure wallets for any AI agent in seconds</li>
              <li>Set granular spending limits and approval workflows</li>
              <li>Enable instant payments to any API or service</li>
              <li>Monitor every transaction in real-time</li>
              <li>Scale from prototype to production seamlessly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

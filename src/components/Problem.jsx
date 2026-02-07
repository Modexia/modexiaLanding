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
            <h2 className="problem-title">The Challenge</h2>
            <p className="problem-text">
              Traditional payment systems weren't built for AI agents.
            </p>
            <ul className="problem-list">
              <li>No controlled fund access</li>
              <li>Unlimited spending risk</li>
              <li>Complex integrations</li>
              <li>Poor visibility</li>
            </ul>
          </div>

          <div className="solution-section">
            <div className="solution-icon-wrapper">
              <TrendingUp size={32} />
            </div>
            <h2 className="solution-title">The Solution</h2>
            <p className="solution-text">
              Financial infrastructure built for autonomous agents.
            </p>
            <ul className="solution-list">
              <li>Secure wallets in seconds</li>
              <li>Granular spending controls</li>
              <li>Instant payments</li>
              <li>Real-time monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

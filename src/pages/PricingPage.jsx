import { Check, Zap, Shield, TrendingUp, DollarSign } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <section className="page-hero pricing-hero">
        <div className="hero-background-overlay"></div>
        <div className="container">
          <h1 className="page-title">Simple, Transparent Pricing</h1>
          <p className="page-description">
            Pay only for what you use. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="pricing-model-section">
        <div className="container">
          <div className="model-header">
            <h2 className="section-title">How Our Pricing Works</h2>
            <p className="section-description">
              We charge a small percentage fee on transactions processed through our platform
            </p>
          </div>

          <div className="pricing-model-grid">
            <div className="model-card primary-model">
              <div className="model-icon">
                <DollarSign size={32} />
              </div>
              <h3>Transaction-Based Fee</h3>
              <div className="fee-display">
                <span className="fee-percentage">2.5%</span>
                <span className="fee-description">per transaction</span>
              </div>
              <p>
                We only charge when your AI agents successfully transact. No monthly fees, 
                no setup costs—just a simple percentage on each payment.
              </p>
              <ul className="model-features">
                <li><Check size={18} /> Only pay when you use the service</li>
                <li><Check size={18} /> No minimum transaction requirements</li>
                <li><Check size={18} /> Predictable, transparent costs</li>
                <li><Check size={18} /> Volume discounts available</li>
              </ul>
            </div>

            <div className="benefits-cards">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Zap size={24} />
                </div>
                <h4>No Upfront Costs</h4>
                <p>Get started for free. Create accounts, set up agents, and test integrations without paying a cent.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <Shield size={24} />
                </div>
                <h4>Enterprise Security</h4>
                <p>Bank-grade security and compliance included at no extra cost. SOC 2, HIPAA ready.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <TrendingUp size={24} />
                </div>
                <h4>Scale Automatically</h4>
                <p>As your volume grows, your per-transaction fee decreases automatically—no negotiation needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="volume-pricing-section">
        <div className="container">
          <h2 className="section-title">Volume Discounts</h2>
          <p className="section-description">
            The more you transact, the less you pay per transaction
          </p>

          <div className="volume-tiers">
            <div className="tier-card">
              <div className="tier-volume">$0 - $10K</div>
              <div className="tier-rate">2.5%</div>
              <div className="tier-label">Standard Rate</div>
            </div>

            <div className="tier-card highlighted">
              <div className="tier-volume">$10K - $100K</div>
              <div className="tier-rate">2.0%</div>
              <div className="tier-label">Volume Discount</div>
              <div className="tier-badge">Popular</div>
            </div>

            <div className="tier-card">
              <div className="tier-volume">$100K - $1M</div>
              <div className="tier-rate">1.5%</div>
              <div className="tier-label">High Volume</div>
            </div>

            <div className="tier-card">
              <div className="tier-volume">$1M+</div>
              <div className="tier-rate">Custom</div>
              <div className="tier-label">Enterprise</div>
            </div>
          </div>

          <div className="pricing-example">
            <h3>Example Calculation</h3>
            <div className="example-content">
              <div className="example-scenario">
                <strong>Your AI agent makes a $100 payment to an API provider</strong>
              </div>
              <div className="example-breakdown">
                <div className="breakdown-row">
                  <span>Transaction Amount:</span>
                  <span>$100.00</span>
                </div>
                <div className="breakdown-row">
                  <span>Modexia Fee (2.5%):</span>
                  <span>$2.50</span>
                </div>
                <div className="breakdown-row total">
                  <span>Total Cost:</span>
                  <span>$102.50</span>
                </div>
              </div>
              <p className="example-note">
                Your agent sends $100 to the recipient, and you pay Modexia $2.50 for processing the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="included-features-section">
        <div className="container">
          <h2 className="section-title">Everything Included</h2>
          <p className="section-description">
            No feature gates or premium tiers—every user gets full access
          </p>

          <div className="included-grid">
            <div className="included-card">
              <Check size={24} className="check-icon" />
              <h4>Unlimited AI Agents</h4>
              <p>Create as many agent wallets as you need</p>
            </div>

            <div className="included-card">
              <Check size={24} className="check-icon" />
              <h4>Real-Time Monitoring</h4>
              <p>Track every transaction as it happens</p>
            </div>

            <div className="included-card">
              <Check size={24} className="check-icon" />
              <h4>Spending Controls</h4>
              <p>Set limits, rules, and approval workflows</p>
            </div>

            <div className="included-card">
              <Check size={24} className="check-icon" />
              <h4>API Access</h4>
              <p>Full API access with comprehensive docs</p>
            </div>

            <div className="included-card">
              <Check size={24} className="check-icon" />
              <h4>Analytics Dashboard</h4>
              <p>Detailed insights and reporting</p>
            </div>

            <div className="included-card">
              <Check size={24} className="check-icon" />
              <h4>24/7 Support</h4>
              <p>Email and chat support included</p>
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="container">
          <div className="enterprise-content">
            <h2>Need Custom Pricing?</h2>
            <p>
              For high-volume transactions over $1M/month, we offer custom enterprise pricing 
              with dedicated support, SLA guarantees, and tailored solutions.
            </p>
            <ul className="enterprise-features">
              <li><Check size={18} /> Custom transaction rates</li>
              <li><Check size={18} /> Dedicated account manager</li>
              <li><Check size={18} /> 99.99% uptime SLA</li>
              <li><Check size={18} /> Priority phone support</li>
              <li><Check size={18} /> Custom integrations</li>
              <li><Check size={18} /> Volume commitments & discounts</li>
            </ul>
            <a href="/contact" className="btn-primary btn-large">Contact Sales</a>
          </div>
        </div>
      </section>

      <section className="faq-preview">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Common questions about our pricing
          </p>
          <div className="faq-simple-grid">
            <div className="faq-simple-card">
              <h4>When do I pay the fee?</h4>
              <p>The transaction fee is charged automatically when your AI agent completes a payment. It's deducted from your account balance.</p>
            </div>
            <div className="faq-simple-card">
              <h4>Are there any monthly minimums?</h4>
              <p>No monthly minimums or subscription fees. You only pay when your agents transact.</p>
            </div>
            <div className="faq-simple-card">
              <h4>How do volume discounts work?</h4>
              <p>Discounts apply automatically based on your total monthly transaction volume. No negotiation needed.</p>
            </div>
            <div className="faq-simple-card">
              <h4>Can I test for free?</h4>
              <p>Yes! Create accounts and test integrations in sandbox mode completely free. Pay only when you go live.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

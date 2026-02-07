import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-description">
            Have questions? We're here to help. Reach out to our team.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                Whether you're interested in our platform, need technical support, 
                or want to discuss enterprise solutions, we'd love to hear from you.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Email Us</h4>
                    <a href="mailto:hello@modexia.com">hello@modexia.com</a>
                    <p className="method-note">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Call Us</h4>
                    <a href="tel:+1-555-0123">+1 (555) 012-3456</a>
                    <p className="method-note">Monday - Friday, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Visit Us</h4>
                    <p>123 Market Street, Suite 400</p>
                    <p>San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>

              <div className="support-options">
                <h3>Other Ways to Connect</h3>
                <ul>
                  <li>
                    <strong>Sales Inquiries:</strong> <a href="mailto:sales@modexia.com">sales@modexia.com</a>
                  </li>
                  <li>
                    <strong>Technical Support:</strong> <a href="mailto:support@modexia.com">support@modexia.com</a>
                  </li>
                  <li>
                    <strong>Partnerships:</strong> <a href="mailto:partners@modexia.com">partners@modexia.com</a>
                  </li>
                  <li>
                    <strong>Press & Media:</strong> <a href="mailto:press@modexia.com">press@modexia.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you shortly.</p>

                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary btn-large">
                  <Send size={20} />
                  Send Message
                </button>

                <p className="form-note">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-preview">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Quick answers to common questions
          </p>
          <div className="faq-simple-grid">
            <div className="faq-simple-card">
              <h4>How do I get started?</h4>
              <p>Check out our <a href="/docs">documentation</a> for a quick start guide, or contact sales for a personalized demo.</p>
            </div>
            <div className="faq-simple-card">
              <h4>What support do you offer?</h4>
              <p>We offer email support for all users, with priority support and dedicated account managers for enterprise customers.</p>
            </div>
            <div className="faq-simple-card">
              <h4>Can I schedule a demo?</h4>
              <p>Yes! Email <a href="mailto:sales@modexia.com">sales@modexia.com</a> to schedule a personalized product demo with our team.</p>
            </div>
            <div className="faq-simple-card">
              <h4>Do you offer enterprise plans?</h4>
              <p>Absolutely. We have custom enterprise solutions with dedicated support. Contact our sales team to learn more.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

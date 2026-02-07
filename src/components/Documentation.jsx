import { Book, Code2, Rocket, MessageSquare, ArrowRight } from 'lucide-react';

const Documentation = () => {
  const docs = [
    {
      icon: <Rocket size={24} />,
      title: 'Quick Start Guide',
      description: 'Get up and running in under 5 minutes with our step-by-step guide.',
      link: '#quickstart'
    },
    {
      icon: <Code2 size={24} />,
      title: 'API Reference',
      description: 'Complete API documentation with code examples in multiple languages.',
      link: '#api-docs'
    },
    {
      icon: <Book size={24} />,
      title: 'Tutorials & Guides',
      description: 'Learn best practices and advanced patterns for AI agent payments.',
      link: '#tutorials'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Community & Support',
      description: 'Join our developer community and get help from experts.',
      link: '#community'
    }
  ];

  return (
    <section id="docs" className="documentation">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Developer resources</h2>
          <p className="section-description">
            Everything you need to integrate Modexia into your AI applications
          </p>
        </div>

        <div className="docs-content">
          {docs.map((doc, index) => (
            <div key={index} className="doc-card">
              <div className="doc-icon">{doc.icon}</div>
              <h3 className="doc-title">{doc.title}</h3>
              <p className="doc-description">{doc.description}</p>
              <a href={doc.link} className="doc-link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;

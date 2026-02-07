import { Bot, ShoppingCart, Headphones, Building2, Briefcase, GraduationCap, Heart, TrendingUp } from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    {
      icon: <Bot size={48} />,
      category: 'AI Development',
      title: 'Autonomous AI Agents',
      description: 'Build truly autonomous agents that can handle their own API costs, purchase services, and manage resources without human intervention.',
      challenges: [
        'Manual API key management for each service',
        'No spending controls for autonomous systems',
        'Difficulty tracking which agent used what',
        'Complex billing reconciliation'
      ],
      solutions: [
        'Each agent gets its own wallet and API budget',
        'Automatic spending limits prevent overruns',
        'Real-time visibility into every agent transaction',
        'Consolidated billing with detailed breakdowns'
      ],
      examples: [
        {
          company: 'CodeGen AI',
          useCase: 'Automated code review agents that pay for GitHub API, testing services, and deployment tools',
          result: '60% cost reduction through optimized API usage'
        },
        {
          company: 'DataFlow Systems',
          useCase: 'Data pipeline agents that autonomously purchase compute and storage',
          result: '24/7 operation without manual oversight'
        }
      ]
    },
    {
      icon: <Building2 size={48} />,
      category: 'Enterprise',
      title: 'Enterprise AI Operations',
      description: 'Deploy AI agents across departments with centralized billing, compliance controls, and complete audit trails.',
      challenges: [
        'Departments need separate budgets',
        'Compliance and audit requirements',
        'Cost allocation and chargeback',
        'Security and access control'
      ],
      solutions: [
        'Hierarchical wallet structure for departments',
        'Built-in compliance and audit logging',
        'Automatic cost allocation and reporting',
        'Role-based access control (RBAC)'
      ],
      examples: [
        {
          company: 'Fortune 500 Bank',
          useCase: '500+ AI agents across 20 departments handling fraud detection, customer service, and risk analysis',
          result: '99.9% uptime, full SOC 2 compliance'
        },
        {
          company: 'Global Retailer',
          useCase: 'AI agents for inventory management, demand forecasting, and supplier negotiations',
          result: '$2M annual savings through automated negotiations'
        }
      ]
    },
    {
      icon: <Headphones size={48} />,
      category: 'Customer Support',
      title: 'Intelligent Support Agents',
      description: 'Enable customer service AI to autonomously purchase premium tools, access paid databases, and resolve tickets faster.',
      challenges: [
        'Agents need access to premium knowledge bases',
        'Translation and transcription costs',
        'Integration with paid ticketing systems',
        'Unpredictable support volume spikes'
      ],
      solutions: [
        'Agents pay for premium resources on-demand',
        'Automatic scaling during traffic spikes',
        'Per-ticket cost tracking',
        'ROI analysis for premium vs basic tools'
      ],
      examples: [
        {
          company: 'SaaS Support Pro',
          useCase: 'AI agents that handle 10K+ tickets/month, paying for translations, expert systems, and priority APIs',
          result: '40% faster resolution time, 70% cost savings vs human agents'
        },
        {
          company: 'E-commerce Giant',
          useCase: 'Multilingual support agents handling 50+ languages with on-demand translation',
          result: '24/7 global support with 95% customer satisfaction'
        }
      ]
    },
    {
      icon: <ShoppingCart size={48} />,
      category: 'E-commerce',
      title: 'Shopping & Commerce Agents',
      description: 'Build AI shopping assistants that can make purchases, process returns, and manage subscriptions on behalf of users.',
      challenges: [
        'Secure payment processing for autonomous purchases',
        'User spending limits and approvals',
        'Handling refunds and disputes',
        'Multi-merchant transactions'
      ],
      solutions: [
        'User-authorized agent wallets with strict limits',
        'Approval workflows for high-value purchases',
        'Automated refund and dispute handling',
        'Universal payment across any merchant'
      ],
      examples: [
        {
          company: 'SmartShop AI',
          useCase: 'Personal shopping agents that compare prices, make purchases, and track deliveries',
          result: 'Avg 15% savings for users, $5M GMV in 6 months'
        },
        {
          company: 'SubscriptionBot',
          useCase: 'AI that manages 20+ subscriptions per user, canceling unused ones',
          result: 'Users save avg $300/year on forgotten subscriptions'
        }
      ]
    },
    {
      icon: <TrendingUp size={48} />,
      category: 'Finance & Trading',
      title: 'Financial AI Agents',
      description: 'Deploy trading bots and financial analysts that can execute trades, purchase data feeds, and pay for market research.',
      challenges: [
        'Real-time market data costs',
        'High-frequency transaction fees',
        'Risk management and limits',
        'Regulatory compliance'
      ],
      solutions: [
        'Sub-millisecond payment processing',
        'Dynamic spending limits based on volatility',
        'Complete audit trails for compliance',
        'Automatic risk controls'
      ],
      examples: [
        {
          company: 'AlgoTrade Systems',
          useCase: 'Trading bots that pay for premium data feeds, execution platforms, and analysis tools',
          result: 'Processing 100K+ transactions/day with full compliance'
        },
        {
          company: 'WealthAI',
          useCase: 'Portfolio management agents for 10K+ clients with personalized strategies',
          result: '12% avg annual returns, fully automated'
        }
      ]
    },
    {
      icon: <Briefcase size={48} />,
      category: 'Business Operations',
      title: 'Operational AI Agents',
      description: 'Automate business operations with agents that handle procurement, scheduling, and vendor management.',
      challenges: [
        'Vendor payment management',
        'Purchase order approvals',
        'Invoice reconciliation',
        'Spend visibility across departments'
      ],
      solutions: [
        'Automated vendor payments',
        'Multi-level approval workflows',
        'Automatic invoice matching',
        'Real-time spend dashboards'
      ],
      examples: [
        {
          company: 'Operations AI',
          useCase: 'Procurement agents that negotiate with suppliers, place orders, and track shipments',
          result: '30% reduction in procurement costs'
        },
        {
          company: 'SchedulerPro',
          useCase: 'AI agents that book meetings, reserve resources, and pay for premium scheduling tools',
          result: '20 hours/week saved per team'
        }
      ]
    },
    {
      icon: <GraduationCap size={48} />,
      category: 'Education',
      title: 'Educational AI Tutors',
      description: 'Create AI tutors that can access educational resources, pay for assessments, and provide personalized learning.',
      challenges: [
        'Access to premium educational content',
        'Per-student cost tracking',
        'Scaling to thousands of students',
        'Parental controls and limits'
      ],
      solutions: [
        'Student-specific wallets with parent controls',
        'Automatic access to premium resources',
        'Usage analytics per student',
        'Budget alerts for parents/schools'
      ],
      examples: [
        {
          company: 'TutorBot AI',
          useCase: 'Personalized tutors for 50K+ students accessing premium content and assessments',
          result: '35% improvement in test scores'
        },
        {
          company: 'LearnSmart',
          useCase: 'AI study buddies that purchase flashcards, practice tests, and expert consultations',
          result: '10K+ students, 4.8/5 satisfaction'
        }
      ]
    },
    {
      icon: <Heart size={48} />,
      category: 'Healthcare',
      title: 'Healthcare AI Assistants',
      description: 'Deploy HIPAA-compliant AI agents that can access medical databases, schedule appointments, and process claims.',
      challenges: [
        'HIPAA compliance requirements',
        'Access to premium medical databases',
        'Integration with billing systems',
        'Patient privacy and security'
      ],
      solutions: [
        'HIPAA-compliant infrastructure',
        'Secure payment for medical data access',
        'Automatic claim processing',
        'Complete audit trails'
      ],
      examples: [
        {
          company: 'HealthAI Systems',
          useCase: 'Diagnostic assistants accessing medical journals, imaging databases, and expert systems',
          result: '25% faster diagnosis, 99.9% accuracy'
        },
        {
          company: 'PatientCare Bot',
          useCase: 'AI receptionists handling 1000+ appointments/day, billing inquiries, and insurance verification',
          result: '90% reduction in wait times'
        }
      ]
    }
  ];

  return (
    <div className="use-cases-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Use Cases & Success Stories</h1>
          <p className="page-description">
            See how companies across industries are using Modexia to power their AI agents
          </p>
        </div>
      </section>

      <section className="use-cases-detailed">
        <div className="container">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-detailed">
              <div className="use-case-header">
                <div className="use-case-icon-large">{useCase.icon}</div>
                <div>
                  <div className="use-case-category">{useCase.category}</div>
                  <h2 className="use-case-title-large">{useCase.title}</h2>
                  <p className="use-case-description-large">{useCase.description}</p>
                </div>
              </div>

              <div className="use-case-grid">
                <div className="use-case-section">
                  <h3>Challenges</h3>
                  <ul>
                    {useCase.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="use-case-section">
                  <h3>Modexia Solutions</h3>
                  <ul>
                    {useCase.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="use-case-examples">
                <h3>Real-World Examples</h3>
                {useCase.examples.map((example, i) => (
                  <div key={i} className="example-card">
                    <h4>{example.company}</h4>
                    <p className="example-use">{example.useCase}</p>
                    <p className="example-result">
                      <strong>Result:</strong> {example.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to build your use case?</h2>
          <p>Start with our free tier - no credit card required</p>
          <a href="/signup" className="btn-primary btn-large">Get Started Free</a>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;

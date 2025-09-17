'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, 
  Globe, 
  Zap, 
  BarChart3, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Bot,
      title: 'AI Automation Solutions',
      description: 'Intelligent automation systems that streamline your business processes and reduce manual work.',
      features: [
        'Workflow automation',
        'Data processing pipelines',
        'Intelligent document handling',
        'Customer service chatbots',
        'Predictive analytics'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies and best practices.',
      features: [
        'Responsive design',
        'Performance optimization',
        'SEO implementation',
        'Progressive Web Apps',
        'E-commerce solutions'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      description: 'Analyze and optimize your existing workflows to maximize efficiency and productivity.',
      features: [
        'Process analysis',
        'Bottleneck identification',
        'Automation opportunities',
        'Performance metrics',
        'Continuous improvement'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights with powerful analytics and visualization tools.',
      features: [
        'Data visualization',
        'Business intelligence',
        'Custom dashboards',
        'Real-time reporting',
        'Predictive modeling'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Team Training & Support',
      description: 'Comprehensive training programs to help your team adopt and maximize new technologies.',
      features: [
        'Technical training',
        'Best practices workshops',
        'Ongoing support',
        'Documentation',
        'Knowledge transfer'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure your solutions meet the highest security standards and regulatory requirements.',
      features: [
        'Security audits',
        'Compliance checks',
        'Data protection',
        'Access controls',
        'Monitoring systems'
      ],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding your business needs, current processes, and goals.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Developing a comprehensive roadmap and technical architecture.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building and rigorously testing your solution with quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launching your solution and providing ongoing maintenance and support.'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6"
            >
              My <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive solutions that combine AI automation expertise with modern web development 
              to transform your business operations and digital presence.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 * index, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl p-6 hover:bg-hover transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors duration-200 text-sm font-medium"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-4">
              My <span className="gradient-text">Process</span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your investment.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-4" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how AI automation and modern web development can help you achieve 
                your business goals and drive growth.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
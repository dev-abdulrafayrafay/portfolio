'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  TrendingUp,
  Globe
} from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Platform',
      category: 'AI Automation',
      description: 'A comprehensive customer support solution that uses AI to automate responses, route tickets, and provide intelligent insights.',
      image: '/api/placeholder/600/400',
      longDescription: 'This project involved building a sophisticated AI-powered customer support platform that revolutionized how a mid-size e-commerce company handled customer inquiries. The system processes thousands of tickets daily, automatically categorizing and routing them while providing intelligent responses for common queries.',
      problem: 'The client was struggling with high response times, inconsistent support quality, and escalating operational costs due to manual ticket processing.',
      solution: 'Developed an AI system that combines natural language processing, machine learning, and workflow automation to handle 80% of customer inquiries automatically while maintaining high satisfaction rates.',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Redis', 'Docker'],
      results: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '95% customer satisfaction rate',
        '300% increase in ticket processing capacity'
      ],
      timeline: '3 months',
      team: 'Solo project',
      status: 'Live',
      links: {
        live: 'https://example.com',
        github: 'https://github.com/abdulrafay/ai-support-platform'
      },
      metrics: {
        users: '10K+',
        uptime: '99.9%',
        performance: '2.3s load time'
      }
    },
    {
      id: 2,
      title: 'E-commerce Automation Suite',
      category: 'Web Development',
      description: 'A full-stack e-commerce platform with intelligent inventory management, automated marketing, and advanced analytics.',
      image: '/api/placeholder/600/400',
      longDescription: 'Built a comprehensive e-commerce solution that combines modern web development with AI-powered automation features. The platform includes intelligent inventory management, automated marketing campaigns, and advanced analytics dashboards.',
      problem: 'The client needed a scalable e-commerce platform that could handle growth while reducing manual operations and improving customer experience.',
      solution: 'Created a modern, scalable platform with AI-driven features for inventory optimization, personalized marketing, and predictive analytics.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS'],
      results: [
        '150% increase in conversion rate',
        '40% reduction in inventory costs',
        '200% improvement in page load speed',
        '85% automation of marketing tasks'
      ],
      timeline: '4 months',
      team: 'Lead developer',
      status: 'Live',
      links: {
        live: 'https://example.com',
        github: 'https://github.com/abdulrafay/ecommerce-suite'
      },
      metrics: {
        users: '25K+',
        uptime: '99.8%',
        performance: '1.8s load time'
      }
    },
    {
      id: 3,
      title: 'Workflow Automation Dashboard',
      category: 'Process Optimization',
      description: 'An intelligent dashboard that automates business processes, tracks performance metrics, and provides actionable insights.',
      image: '/api/placeholder/600/400',
      longDescription: 'Developed a comprehensive workflow automation platform that helps businesses streamline their operations through intelligent process automation, real-time monitoring, and data-driven insights.',
      problem: 'The client had multiple disconnected systems and manual processes that were causing inefficiencies and errors.',
      solution: 'Created a unified platform that connects all systems, automates repetitive tasks, and provides real-time visibility into business operations.',
      technologies: ['React', 'Python', 'FastAPI', 'MongoDB', 'Celery', 'Redis'],
      results: [
        '70% reduction in manual tasks',
        '50% improvement in process efficiency',
        '90% reduction in human errors',
        'Real-time operational visibility'
      ],
      timeline: '2.5 months',
      team: 'Solo project',
      status: 'Live',
      links: {
        live: 'https://example.com',
        github: 'https://github.com/abdulrafay/workflow-dashboard'
      },
      metrics: {
        users: '500+',
        uptime: '99.9%',
        performance: '1.2s load time'
      }
    }
  ];

  // const categories = ['All', 'AI Automation', 'Web Development', 'Process Optimization'];

  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of my recent work, demonstrating expertise in AI automation, 
              web development, and process optimization across various industries.
            </motion.p>
          </div>

          {/* Project Cards */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 aspect-video"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">
                            {project.title}
                          </h3>
                          <p className="text-sm text-text-secondary">
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="p-3 glass rounded-lg">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-accent-primary" />
                          <span className="text-sm text-text-secondary">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-border text-text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-border text-text-secondary rounded-full text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-accent text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 glass text-text-primary rounded-lg font-medium hover:bg-hover transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-semibold text-text-primary mb-4">
                Want to see more projects?
              </h3>
              <p className="text-text-secondary mb-6">
                Explore my complete portfolio and discover how I can help transform your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-accent text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 mx-auto"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
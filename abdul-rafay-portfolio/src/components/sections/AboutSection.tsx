'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leveraging cutting-edge AI technologies to automate complex business processes and enhance user experiences.',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks and best practices for optimal performance.',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamlining workflows and reducing manual tasks through intelligent automation systems.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focusing on measurable outcomes and delivering solutions that drive real business value.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-surface">
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              I&apos;m a passionate technologist who believes in the power of AI to transform businesses 
              and create meaningful digital experiences. With a strong foundation in both artificial 
              intelligence and web development, I help companies leverage technology to achieve their goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-semibold text-text-primary">
                  My Journey
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Over the past 3+ years, I&apos;ve been at the forefront of AI automation and web development. 
                  I&apos;ve helped startups and enterprises alike implement intelligent solutions that have 
                  increased efficiency by up to 300% and reduced operational costs significantly.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  My approach combines technical expertise with a deep understanding of business needs, 
                  ensuring that every solution I deliver not only works flawlessly but also provides 
                  measurable value to your organization.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-display font-semibold text-text-primary">
                  What Drives Me
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m passionate about solving complex problems and creating technology that makes a 
                  real difference. Whether it&apos;s automating repetitive tasks, building intuitive user 
                  interfaces, or implementing AI-powered features, I love the challenge of turning 
                  innovative ideas into reality.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="p-4 glass rounded-lg hover:bg-hover transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gradient-accent rounded-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-10 left-10 w-20 h-20 bg-accent-primary/30 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [1.1, 1, 1.1]
                    }}
                    transition={{ 
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute bottom-10 right-10 w-32 h-32 bg-accent-secondary/30 rounded-full blur-xl"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 mx-auto bg-gradient-accent rounded-full flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-2xl">AR</span>
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-semibold text-text-primary">
                        Always Learning
                      </h3>
                      <p className="text-text-secondary text-sm">
                        Continuously exploring new technologies and methodologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
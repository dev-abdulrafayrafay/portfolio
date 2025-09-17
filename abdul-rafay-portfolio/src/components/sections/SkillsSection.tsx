'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Brain, 
  Database, 
  Globe,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React/Next.js', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
        { name: 'Framer Motion', level: 85, color: '#FF0055' },
        { name: 'Three.js', level: 80, color: '#000000' },
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'Redis', level: 70, color: '#DC382D' },
      ]
    },
    ai: {
      title: 'AI & Automation',
      icon: Brain,
      skills: [
        { name: 'OpenAI API', level: 90, color: '#412991' },
        { name: 'LangChain', level: 85, color: '#1C3C3C' },
        { name: 'Vector Databases', level: 80, color: '#FF6B35' },
        { name: 'RAG Systems', level: 85, color: '#4F46E5' },
        { name: 'Workflow Automation', level: 90, color: '#10B981' },
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: GitBranch,
      skills: [
        { name: 'Git/GitHub', level: 95, color: '#F05032' },
        { name: 'Docker', level: 80, color: '#2496ED' },
        { name: 'AWS/Vercel', level: 85, color: '#FF9900' },
        { name: 'CI/CD', level: 80, color: '#2088FF' },
        { name: 'Monitoring', level: 75, color: '#FF6B6B' },
      ]
    }
  };

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-text-primary font-medium">{skill.name}</span>
        <span className="text-text-secondary text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-border rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          className="h-2 rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
            boxShadow: `0 0 10px ${skill.color}40`
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
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
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive toolkit of modern technologies and frameworks that I use to build 
              exceptional digital experiences and intelligent automation solutions.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === key
                      ? 'bg-gradient-accent text-white shadow-lg'
                      : 'glass text-text-secondary hover:text-text-primary hover:bg-hover'
                  }`}
                >
                  <Icon size={20} />
                  <span>{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Skills List */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                {(() => {
                  const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                  return <Icon className="w-8 h-8 text-accent-primary" />;
                })()}
                <h3 className="text-2xl font-display font-semibold text-text-primary">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl overflow-hidden">
                {/* Animated Skill Icons */}
                <div className="absolute inset-0 p-8">
                  {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="absolute"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${10 + (index * 20)}%`,
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3 + index * 0.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.name.charAt(0)}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-32 h-32 border border-accent-primary rounded-full" />
                  <div className="absolute bottom-4 right-4 w-24 h-24 border border-accent-secondary rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-text-primary rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-display font-semibold text-text-primary mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-text-secondary leading-relaxed">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of innovation. My commitment to 
              learning ensures that I can always provide the most effective and modern solutions 
              for your projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
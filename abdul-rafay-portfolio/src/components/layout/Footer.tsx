'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/abdulrafay', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abdulrafay', icon: Linkedin },
    { name: 'Email', href: 'mailto:abdul@example.com', icon: Mail },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AR</span>
              </div>
              <span className="font-display font-semibold text-text-primary">
                Abdul Rafay
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              AI Automation Expert &amp; Website Developer crafting intelligent solutions 
              that bridge the gap between cutting-edge technology and real-world impact.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-text-secondary hover:text-accent-primary transition-colors duration-200 rounded-lg hover:bg-hover"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-text-primary">
              Let&apos;s Connect
            </h3>
            <div className="space-y-2">
              <p className="text-text-secondary text-sm">
                Ready to transform your ideas into intelligent solutions?
              </p>
              <motion.a
                href="mailto:abdul@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors duration-200 text-sm font-medium"
              >
                <Mail size={16} />
                <span>abdul@example.com</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              © {currentYear} Abdul Rafay. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-text-muted text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { motion } from 'framer-motion';
import { Terminal, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-cyber-bg border-t border-cyber-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={portfolioData.profile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-accent to-cyber-purple text-white font-mono font-bold rounded-lg shadow-lg hover:shadow-cyber-accent/50 transition-all duration-300 glow-border"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              href={`mailto:${portfolioData.profile.contact.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 border-2 border-cyber-accent text-cyber-accent font-mono font-bold rounded-lg shadow-lg hover:bg-cyber-accent hover:text-white hover:shadow-cyber-accent/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </motion.a>
          </div>

          {/* Terminal prompt style footer */}
          <div className="flex items-center gap-2 text-cyber-textMuted font-mono text-sm">
            <Terminal className="w-4 h-4 text-cyber-accent" />
            <span className="text-cyber-green">$</span>
            <span>exit_session</span>
          </div>

          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-cyber-textMuted text-sm">
            <span>Built with React, Tailwind, Framer Motion & a lot of Claude 🤖✨</span>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-cyber-green shadow-lg shadow-cyber-green/50"
              />
              <span className="text-cyber-textMuted">System Online</span>
            </div>
            <span className="text-cyber-border">|</span>
            <span className="text-cyber-accent font-bold">✨ Available for opportunities ✨</span>
          </div>

          {/* Command prompt */}
          <div className="mt-4 text-cyber-green font-mono text-xs">
            <span className="animate-pulse">▸</span> Session terminated successfully
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

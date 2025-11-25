import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = portfolioData.profile.bio;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20); // Speed of typing effect

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-surface border border-cyber-border rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-cyber-border px-4 py-3 flex items-center gap-2 border-b border-cyber-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-cyber-accent" />
              <span className="text-sm text-cyber-textMuted font-mono">ai-engineer.terminal</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-sm md:text-base">
            {/* Name and Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="text-cyber-accent mb-2">
                <span className="text-cyber-green">$</span> cat profile.txt
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 glow-text">
                {portfolioData.profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-cyber-accent font-semibold">
                {portfolioData.profile.role}
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-6 text-cyber-textMuted"
            >
              <MapPin className="w-4 h-4 text-cyber-accent" />
              <span>{portfolioData.profile.location}</span>
            </motion.div>

            {/* Bio with streaming effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-cyber-green mb-2">
                <span className="text-cyber-green">$</span> generate_bio --stream
              </div>
              <div className="bg-cyber-bg p-4 rounded border border-cyber-border">
                <p className="text-cyber-text leading-relaxed">
                  {displayedText}
                  {!isTypingComplete && <span className="terminal-cursor"></span>}
                </p>
              </div>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-cyber-green mb-3">
                <span className="text-cyber-green">$</span> list_contacts
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${portfolioData.profile.contact.email}`}
                  className="flex items-center gap-2 text-cyber-accent hover:text-cyber-green transition-colors group"
                >
                  <Mail className="w-4 h-4" />
                  <span className="group-hover:underline">{portfolioData.profile.contact.email}</span>
                </a>
                <a
                  href={`https://${portfolioData.profile.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-accent hover:text-cyber-green transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  <span className="group-hover:underline">GitHub</span>
                </a>
                <a
                  href={`https://${portfolioData.profile.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-accent hover:text-cyber-green transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="group-hover:underline">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-cyber-green"
            >
              <span className="animate-pulse">▸</span> Ready for next command...
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-cyber-accent"
          >
            <div className="w-6 h-10 border-2 border-cyber-accent rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-cyber-accent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

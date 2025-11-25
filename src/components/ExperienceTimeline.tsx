import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 glow-text">
            <span className="text-cyber-green">$</span> cat experience.log
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-accent to-cyber-purple"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-accent via-cyber-purple to-cyber-green"></div>

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-accent shadow-lg shadow-cyber-accent/50 border-2 border-cyber-bg"></div>

              {/* Content card */}
              <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent transition-all duration-300 card-glow group">
                {/* Company and Role */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyber-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyber-accent font-mono text-lg mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-cyber-textMuted text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex gap-3 text-cyber-text"
                    >
                      <span className="text-cyber-green font-mono text-lg leading-none mt-1">▹</span>
                      <p className="leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative pl-8 md:pl-20"
        >
          <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-purple shadow-lg shadow-cyber-purple/50 border-2 border-cyber-bg"></div>

          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-purple transition-all duration-300 card-glow">
            <h3 className="text-2xl font-bold text-white mb-2">
              {portfolioData.education.degree}
            </h3>
            <p className="text-cyber-accent font-mono text-lg mb-2">
              {portfolioData.education.institution}
            </p>
            <div className="flex items-center gap-2 text-cyber-textMuted text-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-mono">{portfolioData.education.period}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

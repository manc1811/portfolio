import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-cyber-surface" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 glow-text">
            <span className="text-cyber-green">$</span> ls projects/
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-accent to-cyber-purple"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-cyber-bg border border-cyber-border rounded-lg overflow-hidden group hover:border-cyber-accent transition-all duration-300 card-glow"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyber-surface rounded-lg border border-cyber-border group-hover:border-cyber-accent transition-colors">
                      <FolderGit2 className="w-6 h-6 text-cyber-accent" />
                    </div>
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-cyber-surface rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-cyber-textMuted hover:text-cyber-accent" />
                    </motion.a>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-accent transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-cyber-text leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="border-t border-cyber-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + techIndex * 0.05,
                        }}
                        className="px-2 py-1 text-xs font-mono text-cyber-accent bg-cyber-surface border border-cyber-border rounded group-hover:border-cyber-accent transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Project Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-cyber-accent/10 to-cyber-purple/10 border border-cyber-accent/30 rounded-lg p-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">
                More projects on GitHub
              </h3>
              <p className="text-cyber-textMuted">
                Check out my GitHub profile for more open-source contributions and personal projects.
              </p>
            </div>
            <a
              href={`https://${portfolioData.profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyber-accent text-cyber-bg font-mono font-bold rounded-lg hover:bg-cyber-green hover:shadow-lg hover:shadow-cyber-accent/50 transition-all duration-300 whitespace-nowrap"
            >
              View GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

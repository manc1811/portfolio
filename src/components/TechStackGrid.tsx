import { motion } from 'framer-motion';
import { Brain, Code, Layers, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  llm_ops: Brain,
  languages_tools: Wrench,
  infrastructure: Layers,
  frontend_backend: Code,
};

const categoryNames = {
  llm_ops: 'LLM Operations',
  languages_tools: 'Languages & Tools',
  infrastructure: 'Infrastructure & Systems',
  frontend_backend: 'Frontend & Backend',
};

const categoryColors = {
  llm_ops: 'from-cyber-accent to-cyan-400',
  languages_tools: 'from-cyber-purple to-purple-400',
  infrastructure: 'from-yellow-400 to-orange-400',
  frontend_backend: 'from-cyber-green to-green-400',
};

export const TechStackGrid = () => {
  return (
    <section className="py-20 px-4 bg-cyber-bg" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 glow-text">
            <span className="text-cyber-green">$</span> list_skills --grouped
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-accent to-cyber-purple"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const categoryName = categoryNames[category as keyof typeof categoryNames];
            const gradientColor = categoryColors[category as keyof typeof categoryColors];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent transition-all duration-300 card-glow group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientColor} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyber-accent transition-colors">
                    {categoryName}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: string, skillIndex: number) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-2 bg-cyber-bg border border-cyber-border rounded-md text-sm font-mono text-cyber-text hover:border-cyber-accent hover:text-cyber-accent hover:shadow-lg hover:shadow-cyber-accent/20 transition-all cursor-default`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Skill count */}
                <div className="mt-4 pt-4 border-t border-cyber-border">
                  <span className="text-cyber-textMuted text-sm font-mono">
                    {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4 text-center hover:border-cyber-accent transition-colors">
            <div className="text-3xl font-bold font-mono text-cyber-accent mb-1">3,000+</div>
            <div className="text-sm text-cyber-textMuted">Employees Served</div>
          </div>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4 text-center hover:border-cyber-purple transition-colors">
            <div className="text-3xl font-bold font-mono text-cyber-purple mb-1">20+</div>
            <div className="text-sm text-cyber-textMuted">LLMs Deployed</div>
          </div>
          <a
            href="https://www.marktechpost.com/author/mansirawat/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyber-surface border border-cyber-border rounded-lg p-4 text-center hover:border-cyber-green transition-colors cursor-pointer"
          >
            <div className="text-3xl font-bold font-mono text-cyber-green mb-1">60+</div>
            <div className="text-sm text-cyber-textMuted">Technical Articles</div>
          </a>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4 text-center hover:border-yellow-400 transition-colors">
            <div className="text-3xl font-bold font-mono text-yellow-400 mb-1">Multi-node</div>
            <div className="text-sm text-cyber-textMuted">Scale Inference</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

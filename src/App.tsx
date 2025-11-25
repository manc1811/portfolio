import { TerminalHero } from './components/TerminalHero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechStackGrid } from './components/TechStackGrid';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg overflow-x-hidden">
      <TerminalHero />
      <TechStackGrid />
      <ExperienceTimeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

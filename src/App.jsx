import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillCloud from './components/SkillCloud';
import Projects from './components/Projects';
import CreativePortfolio from './components/CreativePortfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      {/* Global animated particle network */}
      <ParticleBackground />

      <Navbar />
      <main className="relative z-[1]">
        <Hero />

        {/* Glowing divider */}
        <div className="relative h-px max-w-[800px] mx-auto">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(129,140,248,0.3), transparent)' }} />
        </div>

        <SkillCloud />

        <div className="relative h-px max-w-[800px] mx-auto">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(129,140,248,0.2), transparent)' }} />
        </div>

        <Projects />

        <div className="relative h-px max-w-[800px] mx-auto">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(129,140,248,0.2), transparent)' }} />
        </div>

        <CreativePortfolio />

        <div className="relative h-px max-w-[800px] mx-auto">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(129,140,248,0.2), transparent)' }} />
        </div>

        <Education />

        <div className="relative h-px max-w-[800px] mx-auto">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(129,140,248,0.2), transparent)' }} />
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

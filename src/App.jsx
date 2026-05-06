import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillCloud from './components/SkillCloud';
import Projects from './components/Projects';
import CreativePortfolio from './components/CreativePortfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Divider = () => (
  <div className="relative h-px max-w-[800px] mx-auto">
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), rgba(129,140,248,0.25), transparent)',
      }}
    />
  </div>
);

export default function App() {
  return (
    <div className="relative">
      {/* Global animated particle network */}
      <ParticleBackground />

      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <SkillCloud />
        <Divider />
        <Projects />
        <Divider />
        <CreativePortfolio />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

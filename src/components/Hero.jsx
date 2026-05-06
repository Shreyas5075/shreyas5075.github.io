import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import {
  SiPython, SiTensorflow, SiReact, SiDocker, SiPytorch,
} from 'react-icons/si';

/* Floating tech icons that orbit around the hero */
const floatingIcons = [
  { Icon: SiPython,     size: 22, top: '12%', left: '8%',  delay: 0,   dur: 18, color: 'rgba(59,130,246,0.18)' },
  { Icon: SiTensorflow, size: 18, top: '20%', right: '10%', delay: 2,   dur: 22, color: 'rgba(129,140,248,0.15)' },
  { Icon: SiReact,      size: 26, top: '70%', left: '6%',  delay: 4,   dur: 20, color: 'rgba(34,211,238,0.14)' },
  { Icon: SiDocker,     size: 16, top: '75%', right: '8%', delay: 1,   dur: 16, color: 'rgba(59,130,246,0.12)' },
  { Icon: SiPytorch,    size: 20, top: '40%', left: '3%',  delay: 3,   dur: 24, color: 'rgba(129,140,248,0.13)' },
];

/* Decorative orbit rings */
const rings = [
  { size: 500, top: '50%', left: '50%', dur: 40, opacity: 0.04, border: 1 },
  { size: 700, top: '50%', left: '50%', dur: 55, opacity: 0.03, border: 1 },
  { size: 350, top: '50%', left: '50%', dur: 30, opacity: 0.05, border: 1 },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Large animated mesh gradients */}
      <div
        className="mesh-gradient"
        style={{ background: '#3b82f6', top: '-15%', right: '-15%', width: '700px', height: '700px' }}
      />
      <div
        className="mesh-gradient"
        style={{ background: '#818cf8', bottom: '-15%', left: '-15%', width: '700px', height: '700px', animationDelay: '-10s' }}
      />
      <div
        className="mesh-gradient"
        style={{ background: '#22d3ee', top: '30%', left: '50%', width: '500px', height: '500px', animationDelay: '-5s', opacity: 0.1 }}
      />
      <div
        className="mesh-gradient"
        style={{ background: '#c084fc', top: '60%', right: '30%', width: '300px', height: '300px', animationDelay: '-15s', opacity: 0.07 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,15,0.7) 100%)',
        }}
      />

      {/* Rotating orbit rings */}
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: ring.size,
            height: ring.size,
            top: ring.top,
            left: ring.left,
            transform: 'translate(-50%, -50%)',
            border: `${ring.border}px solid rgba(59,130,246,${ring.opacity})`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: ring.dur, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Small glowing dots scattered */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: i % 2 === 0 ? '#3b82f6' : '#818cf8',
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            boxShadow: `0 0 8px ${i % 2 === 0 ? '#3b82f6' : '#818cf8'}`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, size, delay, dur, color, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ ...pos }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: dur,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
        >
          <div
            className="rounded-2xl p-3 backdrop-blur-sm"
            style={{
              background: color,
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <Icon size={size} className="text-white/30" />
          </div>
        </motion.div>
      ))}

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-text-secondary">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
        >
          <span className="gradient-text">Shreyas</span>
        </motion.h1>

        {/* Animated underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-6 h-[2px] w-32 origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, #3b82f6, #818cf8, transparent)',
          }}
        />

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl font-semibold text-text-secondary mb-3"
        >
          Data Scientist & AI Engineer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm sm:text-base text-text-muted max-w-lg mx-auto mb-4 leading-relaxed"
        >
          MSc student at the University of Liverpool specializing in Advanced
          Data Science and AI.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm italic text-text-muted max-w-md mx-auto mb-10"
        >
          "Bridging the gap between complex data architectures and cinematic
          visual narratives."
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-64}
            className="btn-glow btn-glow-primary cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-64}
            className="btn-glow btn-glow-secondary cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://linkedin.com/in/shreyasghag"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin-link"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-brand-blue/10"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://behance.net/shreyasghag1"
            target="_blank"
            rel="noopener noreferrer"
            id="behance-link"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-brand-indigo hover:border-brand-indigo/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-brand-indigo/10"
          >
            <FaBehance size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="skills"
          smooth={true}
          duration={600}
          offset={-64}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-brand-blue transition-colors"
          >
            <HiArrowDown size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

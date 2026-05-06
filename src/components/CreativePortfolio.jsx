import { motion } from 'framer-motion';
import { HiOutlineCamera, HiOutlineTrendingUp } from 'react-icons/hi';
import { SiInstagram } from 'react-icons/si';
import { HiOutlineCamera as CameraIcon } from 'react-icons/hi';

const photos = [
  { src: '/photos/auto1.webp', alt: 'Luxury sports car night shot', span: 'tall' },
  { src: '/photos/auto2.webp', alt: 'Classic muscle car in the city', span: 'normal' },
  { src: '/photos/auto3.webp', alt: 'Supercar headlight detail', span: 'normal' },
  { src: '/photos/auto4.webp', alt: 'Sports car aerial city view', span: 'tall' },
  { src: '/photos/auto5.webp', alt: 'Performance car rolling shot', span: 'normal' },
  { src: '/photos/auto6.webp', alt: 'Supercar in underground garage', span: 'normal' },
];

const stats = [
  { icon: <HiOutlineCamera />, label: 'Canon EOS & Nikon Systems', detail: 'Lens compression & cinematic color grading' },
  { icon: <SiInstagram />, label: '3+ Years', detail: 'Social media management & cinematic reels' },
  { icon: <HiOutlineTrendingUp />, label: '3 Pages Scaled', detail: 'Data-driven engagement strategy' },
];

export default function CreativePortfolio() {
  return (
    <section id="gallery" className="relative">
      {/* Background accents */}
      <div className="mesh-gradient" style={{ background: '#3b82f6', top: '5%', right: '-8%', width: '400px', height: '400px', opacity: 0.06 }} />
      <div className="mesh-gradient" style={{ background: '#c084fc', bottom: '20%', left: '-10%', width: '350px', height: '350px', animationDelay: '-7s', opacity: 0.04 }} />
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Creative Work</p>
          <h2 className="section-title">
            Automotive <span className="gradient-text">Photography</span>
          </h2>
          <p className="section-subtitle mb-6">
            High-contrast urban and automotive photography - where engineering
            precision meets cinematic storytelling.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card px-5 py-4 flex items-center gap-3"
            >
              <span className="text-xl text-brand-blue">{s.icon}</span>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {s.label}
                </p>
                <p className="text-xs text-text-muted">{s.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Masonry gallery */}
        <div className="masonry-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group rounded-2xl overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </motion.div>
          ))}
        </div>

        {/* Behance CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://behance.net/shreyasghag1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow btn-glow-secondary inline-flex items-center gap-2"
          >
            View Full Portfolio on Behance
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

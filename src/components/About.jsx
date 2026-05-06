import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineBriefcase } from 'react-icons/hi';

const quickFacts = [
  {
    icon: <HiOutlineLocationMarker />,
    label: 'Location',
    value: 'Liverpool, UK',
  },
  {
    icon: <HiOutlineAcademicCap />,
    label: 'Education',
    value: 'MSc Advanced Data Science & AI',
  },
  {
    icon: <HiOutlineLightningBolt />,
    label: 'Current Focus',
    value: 'LLMs, RAG Pipelines & Generative AI',
  },
  {
    icon: <HiOutlineBriefcase />,
    label: 'Looking For',
    value: 'Data Scientist / AI Engineer roles',
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Background accents */}
      <div className="mesh-gradient" style={{ background: '#3b82f6', top: '15%', right: '-12%', width: '450px', height: '450px', opacity: 0.05 }} />
      <div className="mesh-gradient" style={{ background: '#818cf8', bottom: '10%', left: '-10%', width: '400px', height: '400px', animationDelay: '-8s', opacity: 0.04 }} />

      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              My path into data science started with a fascination for patterns — in code, in data, and in the visual world around me. I completed my{' '}
              <span className="text-text-primary font-medium">
                BTech in Computer Science (AI & Analytics)
              </span>{' '}
              at MIT ADT University, Pune, where I built the foundational skills in algorithms, machine learning, and full-stack development that would shape my career.
            </p>

            <p className="text-text-secondary leading-relaxed">
              That foundation led me to the{' '}
              <span className="text-text-primary font-medium">
                University of Liverpool
              </span>
              , where I'm currently pursuing an{' '}
              <span className="text-text-primary font-medium">
                MSc in Advanced Data Science and AI
              </span>
              . Here, I've deepened my expertise in retrieval-augmented generation, large language models, and the research methodologies that turn experimental models into production-grade systems.
            </p>

            <p className="text-text-secondary leading-relaxed">
              What sets me apart is the bridge I build between{' '}
              <span className="text-brand-blue font-medium">
                technical precision
              </span>{' '}
              and{' '}
              <span className="text-brand-indigo font-medium">
                visual storytelling
              </span>
              . As an automotive photographer, I've learned to see the world through a cinematic lens — a perspective that informs how I design data visualizations, craft user interfaces, and communicate complex research to non-technical stakeholders.
            </p>
          </motion.div>

          {/* Right — Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                Quick Facts
              </h3>

              <div className="space-y-5">
                {quickFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <span className="text-lg">{fact.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-0.5">
                        {fact.label}
                      </p>
                      <p className="text-sm font-medium text-text-primary">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative gradient accent at bottom */}
              <div
                className="mt-6 h-[2px] w-full rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(129,140,248,0.4), transparent)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

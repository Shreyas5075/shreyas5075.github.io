import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineLightningBolt } from 'react-icons/hi';

const education = [
  {
    degree: 'MSc in Advanced Data Science & AI',
    school: 'University of Liverpool',
    period: '2025 – Present',
    detail: 'Specializing in machine learning, NLP, and retrieval-augmented generation systems.',
    icon: <HiOutlineAcademicCap />,
  },
  {
    degree: 'BTech in Computer Science (AI)',
    school: 'MIT ADT University',
    period: '2021 – 2025',
    detail: 'Foundation in algorithms, data structures, AI/ML, and full-stack development.',
    icon: <HiOutlineAcademicCap />,
  },
];

const leadership = [
  {
    title: 'Co-Founder - Cognisance eSports Club',
    detail: 'Built and managed a 200+ member competitive gaming community. Organized tournaments, managed budgets, and led cross-functional teams.',
    icon: <HiOutlineLightningBolt />,
  },
  {
    title: 'Board Member - GearHeads Biking Club',
    detail: 'Organized rides, curated automotive content, and managed community engagement across social platforms.',
    icon: <HiOutlineUserGroup />,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative">
      {/* Background accents */}
      <div className="mesh-gradient" style={{ background: '#818cf8', top: '15%', left: '-12%', width: '400px', height: '400px', opacity: 0.05 }} />
      <div className="mesh-gradient" style={{ background: '#3b82f6', bottom: '10%', right: '-10%', width: '350px', height: '350px', animationDelay: '-6s', opacity: 0.04 }} />
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">
            Education & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subtitle mb-14">
            Academic foundations and leadership experiences that shaped my
            approach to building intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6 flex items-center gap-2">
              <HiOutlineAcademicCap className="text-brand-blue" />
              Education
            </h3>
            <div className="relative pl-12">
              <div className="timeline-line" />
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative mb-10 last:mb-0"
                >
                  <div className="timeline-dot" style={{ top: '4px' }} />
                  <div className="glass-card p-5">
                    <span className="text-xs font-medium text-brand-blue mb-1 block">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-bold text-text-primary mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-text-secondary mb-2">
                      {edu.school}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6 flex items-center gap-2">
              <HiOutlineLightningBolt className="text-brand-indigo" />
              Leadership
            </h3>
            <div className="space-y-4">
              {leadership.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card p-5 flex gap-4"
                >
                  <span className="text-2xl text-brand-indigo shrink-0 mt-1">
                    {role.icon}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-text-primary mb-2">
                      {role.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {role.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

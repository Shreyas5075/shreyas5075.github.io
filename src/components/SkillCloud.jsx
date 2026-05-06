import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiMysql, SiSolidity,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiHuggingface,
  SiPandas, SiNumpy,
  SiGooglecloud, SiDocker, SiGit, SiMongodb,
} from 'react-icons/si';
import { TbChartLine, TbMathFunction } from 'react-icons/tb';

const row1 = [
  { name: 'Python', icon: <SiPython /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Solidity', icon: <SiSolidity /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  { name: 'OpenAI API', icon: <SiOpenai /> },
  { name: 'Hugging Face', icon: <SiHuggingface /> },
];

const row2 = [
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'Matplotlib', icon: <TbChartLine /> },
  { name: 'Statistical Analysis', icon: <TbMathFunction /> },
  { name: 'GCP', icon: <SiGooglecloud /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
];

function MarqueePill({ name, icon }) {
  return (
    <div className="marquee-pill">
      {icon && <span className="text-base text-brand-blue opacity-70">{icon}</span>}
      <span className="text-sm font-medium text-text-secondary">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  // Duplicate items 3x for seamless loop
  const allItems = [...items, ...items, ...items];
  return (
    <div className="marquee-container group">
      <div
        className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}
        style={{ '--item-count': items.length }}
      >
        {allItems.map((item, i) => (
          <MarqueePill key={`${item.name}-${i}`} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function SkillCloud() {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="mesh-gradient" style={{ background: '#3b82f6', top: '20%', right: '-15%', width: '500px', height: '500px', opacity: 0.06 }} />
      <div className="mesh-gradient" style={{ background: '#818cf8', bottom: '10%', left: '-10%', width: '400px', height: '400px', animationDelay: '-8s', opacity: 0.05 }} />

      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A full-spectrum toolkit spanning AI research, data engineering,
            cloud infrastructure, and creative development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>
      </div>
    </section>
  );
}

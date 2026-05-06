import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiMysql, SiSolidity, SiCplusplus,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiHuggingface,
  SiPandas, SiNumpy,
  SiGooglecloud, SiDocker, SiGit, SiMongodb,
} from 'react-icons/si';
import { TbChartBar, TbBrain, TbCloudComputing } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Programming',
    icon: <TbBrain className="text-brand-blue" />,
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'SQL', icon: <SiMysql /> },
      { name: 'Solidity', icon: <SiSolidity /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: <TbBrain className="text-brand-indigo" />,
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'OpenAI API', icon: <SiOpenai /> },
      { name: 'Hugging Face', icon: <SiHuggingface /> },
      { name: 'RAG Pipelines' },
    ],
  },
  {
    title: 'Data Science',
    icon: <TbChartBar className="text-brand-cyan" />,
    skills: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib' },
      { name: 'Statistical Analysis' },
      { name: 'Predictive Modeling' },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: <TbCloudComputing className="text-emerald-400" />,
    skills: [
      { name: 'GCP', icon: <SiGooglecloud /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function SkillCloud() {
  return (
    <section id="skills" className="relative">
      {/* Background accent */}
      <div className="mesh-gradient" style={{ background: '#3b82f6', top: '20%', right: '-15%', width: '500px', height: '500px', opacity: 0.06 }} />
      <div className="mesh-gradient" style={{ background: '#818cf8', bottom: '10%', left: '-10%', width: '400px', height: '400px', animationDelay: '-8s', opacity: 0.05 }} />
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle mb-14">
            A full-spectrum toolkit spanning AI research, data engineering,
            cloud infrastructure, and creative development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={categoryVariants}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  {cat.title}
                </h3>
              </div>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={tagVariants}
                    className="skill-tag"
                  >
                    {skill.icon && (
                      <span className="text-base opacity-70">{skill.icon}</span>
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

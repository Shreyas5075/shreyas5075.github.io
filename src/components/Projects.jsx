import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { HiOutlineDocumentText, HiOutlineChat, HiOutlineClipboardList, HiOutlineCube } from 'react-icons/hi';

const projects = [
  {
    title: 'FinLit AI',
    category: 'MSc Dissertation',
    icon: <HiOutlineDocumentText />,
    description:
      'An AI-powered financial document literacy tool that demystifies complex financial jargon for everyday users using a sophisticated six-stage Retrieval-Augmented Generation pipeline.',
    highlights: [
      'Six-stage RAG pipeline: ingest → chunk → embed → retrieve → rerank → generate',
      'Privacy-by-design architecture with full GDPR compliance',
      'Built with FastAPI backend and React.js interactive frontend',
      'Entity recognition and financial term extraction via spaCy NLP',
      'Semantic vector search powered by FAISS for sub-second retrieval',
    ],
    tech: ['FastAPI', 'React.js', 'spaCy', 'FAISS', 'GDPR'],
    gradientFrom: '#3b82f6',
    gradientTo: '#818cf8',
  },
  {
    title: 'KronosAI',
    category: 'Personal AI Assistant',
    icon: <HiOutlineChat />,
    description:
      'A desktop personal assistant powered by OpenAI GPT models, achieving 90%+ intent recognition accuracy through chain-of-thought prompting and contextual memory.',
    highlights: [
      '90%+ intent recognition accuracy across diverse queries',
      'Chain-of-thought prompting for multi-step reasoning tasks',
      'Contextual conversation memory with session persistence',
      'Natural language command interface for desktop automation',
    ],
    tech: ['OpenAI GPT', 'Python', 'NLP', 'Chain-of-Thought'],
    gradientFrom: '#818cf8',
    gradientTo: '#c084fc',
  },
  {
    title: 'Ollert',
    category: 'Workload Management',
    icon: <HiOutlineClipboardList />,
    description:
      'A minimal yet powerful workload management system built for academic teams. Served as the State Management Lead, architecting the React.js state layer.',
    highlights: [
      'State Management Lead — designed global state architecture',
      'React.js with context-based state management patterns',
      'Role-based dashboards for admin and standard users',
      'Real-time workload tracking with data visualizations',
    ],
    tech: ['React.js', 'State Mgmt', 'Redux', 'Agile'],
    gradientFrom: '#22d3ee',
    gradientTo: '#3b82f6',
  },
  {
    title: 'NFT Marketplace',
    category: 'Web3 & Blockchain',
    icon: <HiOutlineCube />,
    description:
      'A full-stack decentralized marketplace built on the Ethereum blockchain, enabling users to mint, list, and trade NFTs with secure smart contract interactions.',
    highlights: [
      'End-to-end decentralized architecture on Ethereum',
      'Custom Solidity smart contracts for minting and trading',
      'Web3.js integration for seamless wallet interactions',
      'MetaMask authentication and transaction signing',
    ],
    tech: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
    gradientFrom: '#f59e0b',
    gradientTo: '#ef4444',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Background accents */}
      <div className="mesh-gradient" style={{ background: '#818cf8', top: '10%', left: '-10%', width: '450px', height: '450px', opacity: 0.05 }} />
      <div className="mesh-gradient" style={{ background: '#22d3ee', bottom: '15%', right: '-12%', width: '500px', height: '500px', animationDelay: '-12s', opacity: 0.04 }} />
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            AI & Data Science <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mb-14">
            Building intelligent systems that bridge cutting-edge research with
            real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-xs text-text-muted flex items-center gap-1">
          © {new Date().getFullYear()} Shreyas Ghag. Built with{' '}
          <HiOutlineHeart className="text-red-400 inline" /> and React.
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/shreyasghag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-brand-blue transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="https://behance.net/shreyasghag1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-brand-indigo transition-colors"
            aria-label="Behance"
          >
            <FaBehance size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

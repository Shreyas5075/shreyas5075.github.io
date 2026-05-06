import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineUser, HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaLinkedinIn, FaBehance } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(
      `Hi Shreyas,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:ghagshreyas123@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative">
      {/* Background accent */}
      <div
        className="mesh-gradient"
        style={{
          background: '#3b82f6',
          bottom: '-20%',
          right: '-10%',
          opacity: 0.08,
        }}
      />

      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label justify-center">Get in Touch</p>
            <h2 className="section-title text-center">
              Let's Build <span className="gradient-text">Something Great</span>
            </h2>
            <p className="section-subtitle mx-auto text-center mb-12">
              Whether you have a project idea, collaboration opportunity, or
              just want to say hello — I'd love to hear from you.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 text-left space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider"
              >
                Name
              </label>
              <div className="relative">
                <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider"
              >
                Email
              </label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="contact-submit"
              className="btn-glow btn-glow-primary w-full flex items-center justify-center gap-2 text-center"
            >
              {sent ? (
                <>
                  <span>✓</span> Opening Email Client...
                </>
              ) : (
                <>
                  <HiOutlinePaperAirplane className="rotate-90" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className="text-xs text-text-muted">Or find me on</span>
            <a
              href="https://linkedin.com/in/shreyasghag"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://behance.net/shreyasghag1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-brand-indigo hover:border-brand-indigo/30 transition-all duration-300 hover:scale-110"
            >
              <FaBehance size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

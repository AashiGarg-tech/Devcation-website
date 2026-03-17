import { motion } from "framer-motion";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 bg-[#1a0533]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#f5c842] text-xs tracking-[0.15em] uppercase mb-3">
            // Backed by
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-[#f5c842]">Sponsors</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 opacity-20 grayscale pointer-events-none select-none">
            {/* Visual placeholders for tiers found in event data */}
            <div className="font-mono text-white text-xs uppercase tracking-widest">Title Sponsors</div>
            <div className="font-mono text-white text-xs uppercase tracking-widest">Gold Sponsors</div>
            <div className="font-mono text-white text-xs uppercase tracking-widest">Community Partners</div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Partner with Devcation Delhi 2026</h3>
          <p className="text-[#b09fcc] max-w-lg mx-auto mb-8 leading-relaxed">
            Support the next generation of builders. We are currently finalizing our 
            partnerships with world-class companies powering the future of tech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <div className="text-xs font-mono text-[#f5c842] uppercase tracking-widest px-6 py-3 border border-white/10 rounded-xl">
              Lineup Announcing Soon
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-sm text-[#b09fcc]/60 font-mono">
          Want to see your logo here? Reach out at <a href="mailto:sponsor@hackforge.dev" className="text-[#f5c842] hover:underline">sponsor@hackforge.dev</a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
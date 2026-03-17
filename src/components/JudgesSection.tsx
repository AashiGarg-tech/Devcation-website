import { motion } from "framer-motion";

const ComingSoonCard = ({ title, subtitle, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-12 text-center overflow-hidden"
  >
    {/* Background "Coming Soon" text for texture */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
      <span className="text-9xl font-black uppercase">{title}</span>
    </div>

    <div className="relative z-10">
      <div className="font-mono text-[#f5c842] text-xs tracking-[0.15em] uppercase mb-4">
        // {subtitle}
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
        Our <span className="text-[#f5c842]">{title}</span>
      </h2>
      <p className="text-[#b09fcc] max-w-xl mx-auto mb-8 leading-relaxed">
        We are currently hand-picking industry leaders and veterans from top tech companies like 
        **Google DeepMind, Razorpay, and Sequoia** to evaluate your innovations and provide expert guidance.
      </p>
      
      <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
        <div className="w-2 h-2 bg-[#f5c842] rounded-full animate-pulse" />
        <span className="text-xs font-mono text-white uppercase tracking-widest">Lineup Announcing Soon</span>
      </div>
    </div>
  </motion.div>
);

const JudgesSection = () => {
  return (
    <div className="bg-[#1a0533]">
      {/* Judges Coming Soon */}
      <section id="judges" className="py-24">
        <div className="container mx-auto px-6">
          <ComingSoonCard 
            title="Judges" 
            subtitle="Who decides the winners" 
          />
        </div>
      </section>

      {/* Mentors Coming Soon */}
      <section id="mentors" className="py-24 pt-0">
        <div className="container mx-auto px-6">
          <ComingSoonCard 
            title="Mentors" 
            subtitle="Your support system" 
          />
        </div>
      </section>
    </div>
  );
};

export default JudgesSection;
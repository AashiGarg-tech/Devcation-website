import { motion } from "framer-motion";
import { Code2, Rocket, Globe, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, value: "Multi", label: "Stage Event" },
  { icon: Rocket, value: "₹1.5L", label: "In Cash Prizes" }, // Updated to match Devcation Delhi 2026 prize pool
  { icon: Globe, value: "900+", label: "Registrations" },   // Updated to match Devcation scale
  { icon: Trophy, value: "Expert", label: "Mentorship" }, // Support system for hackers
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-[#220a40] overflow-hidden">
      {/* Decorative background element inspired by theme colors */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c3aed] to-[#f5c842]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#f5c842] text-sm tracking-[0.15em] uppercase mb-3">
            // About the event
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Why <span className="text-[#f5c842]">Devcation</span>?
          </h2>
          <p className="text-[#b09fcc] max-w-2xl mx-auto text-lg leading-relaxed">
            Devcation Delhi 2026 is the ultimate launchpad for the brightest minds to tackle 
            real-world problems. We bring together students, developers, and designers 
            to forge innovative tools and compete for a ₹1,50,000 cash prize pool.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#7c3aed]/50 transition-all group"
            >
              <div className="bg-[#f5c842]/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#f5c842]/20">
                <stat.icon className="h-6 w-6 text-[#f5c842]" />
              </div>
              <div className="text-3xl font-black text-white mb-1 group-hover:text-[#f5c842] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#b09fcc]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
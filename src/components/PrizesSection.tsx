import { motion } from "framer-motion";
import { Coins, Trophy, Gift } from "lucide-react";

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 bg-[#220a40] relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,200,66,0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#f5c842] text-xs tracking-[0.15em] uppercase mb-3">
            // What you can win
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Rewards and <span className="text-[#f5c842]">Prizes</span>
          </h2>
          <p className="text-[#b09fcc] max-w-xl mx-auto">
            Beyond the glory, compete for significant cash rewards and recognition.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // Styled as the "prize-card" from the theme source
            className="bg-gradient-to-br from-[#f5c842]/10 to-[#f5c842]/05 border border-[#f5c842]/30 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(245,200,66,0.1)] relative overflow-hidden group"
          >
            {/* Decorative Icon */}
            <div className="bg-[#f5c842] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(245,200,66,0.4)]">
              <Trophy className="h-8 w-8 text-[#1a0533]" />
            </div>

            <h3 className="text-[#b09fcc] font-mono uppercase tracking-[0.2em] text-sm mb-2">
              Total Prize Pool
            </h3>
            
            <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              ₹1,50,000<span className="text-[#f5c842] text-3xl ml-2">Cash</span>
            </div>

            <p className="text-[#b09fcc] text-lg font-medium">
              Distributed among the winning teams across all tracks.
            </p>

            {/* Subtle bottom detail */}
            <div className="mt-8 flex items-center justify-center gap-6 text-[#f5c842]/60 font-mono text-xs uppercase tracking-widest">
              <span className="flex items-center gap-2"><Coins className="h-4 w-4" /> Hard Cash</span>
              <span className="flex items-center gap-2"><Gift className="h-4 w-4" /> Swag Kits</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
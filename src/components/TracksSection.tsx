import { motion } from "framer-motion";
import { Database, Lightbulb, Leaf, Layers, Trophy } from "lucide-react";

// Updated track data based on Devcation Delhi 2026 specifications
export const tracks = [
  { 
    icon: Database, 
    name: "TigerGraph Track", 
    badge: "Premium Track",
    description: "An open innovation track building with TigerGraph MCP and related graph technologies for exclusive cash prizes.", 
    link: "https://docs.google.com/document/d/1eyeIV8YsxLFSc8S3DH7i6uJFk5ks-DBRisx7e52CKJs/edit?usp=sharing",
    color: "text-[#f5c842]" 
  },
  { 
    icon: Lightbulb, 
    name: "Hack ‘N’ Solve", 
    badge: "Open Innovation",
    description: "Solve real-world challenges across FinTech, HealthTech, AI, and Web3. Top 3 teams win big.", 
    color: "text-[#7c3aed]" 
  },
  { 
    icon: Leaf, 
    name: "Sustainability Track", 
    badge: "Powered by Rotaract IGDTUW",
    description: "Technology-driven solutions focusing on environmental and social impact.", 
    color: "text-[#16a34a]" 
  },
  { 
    icon: Layers, 
    name: "Duality Track", 
    badge: "Interdisciplinary",
    description: "Encouraging innovative tech approaches that bridge multiple domains and disciplines.", 
    color: "text-[#0891b2]" 
  },
];

const TracksSection = () => {
  return (
    <section id="tracks" className="py-24 bg-[#1a0533] relative overflow-hidden">
      {/* Subtle Radial Glow from HackForge theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.1),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#f5c842] text-xs tracking-[0.15em] uppercase mb-3">
            // What you can build
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Explore the <span className="text-[#f5c842]">Tracks</span>
          </h2>
          <p className="text-[#b09fcc] max-w-2xl mx-auto leading-relaxed">
            Participants can compete across multiple tracks. Choose your arena and build tools that shape tomorrow. More details on specific tracks coming soon!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#7c3aed]/50 transition-all group relative overflow-hidden"
            >
              {/* Decorative Track Number */}
              <div className="absolute top-4 right-6 font-mono text-white/5 text-6xl font-black group-hover:text-[#f5c842]/10 transition-colors">
                0{i + 1}
              </div>

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 ${track.color} group-hover:scale-110 transition-transform`}>
                <track.icon className="h-7 w-7" />
              </div>

              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-tighter text-[#f5c842] mb-4">
                {track.badge}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f5c842] transition-colors">
                {track.name}
              </h3>
              
              <p className="text-[#b09fcc] text-sm leading-relaxed mb-6">
                {track.description}
              </p>

              {track.link ? (
                <a 
                  href={track.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#f5c842] hover:underline"
                >
                  View Documentation →
                </a>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-white/30">
                  <Trophy className="h-3 w-3" /> Specific prizes TBA
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
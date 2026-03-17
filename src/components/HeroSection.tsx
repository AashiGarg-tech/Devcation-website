import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users } from "lucide-react";
import heroVideo from "../assets/IMG_5738.mp4"; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0533]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Increased opacity from 20 to 50 for better visibility
          className="w-full h-full object-cover opacity-50"
          key={heroVideo} 
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Adjusted gradient: Made the 'via' and 'to' stops slightly more transparent 
            to let the video shine through while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0533]/40 via-[#1a0533]/60 to-[#1a0533]/90" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 container mx-auto text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#f5c842]/10 border border-[#f5c842]/30 text-[#f5c842] text-xs font-mono font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
             Applications Open · March 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-white"
        >
          <span className="text-[#f5c842]">Dev</span>cation{" "}
          <span className="text-white/20 outline-text">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
        >
          Forge the tools that shape tomorrow. Join 500+ builders at Delhi's most electrifying 
          student-led hackathon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
            target="_blank"
            rel="noreferrer"
            className="bg-[#f5c842] text-[#1a0533] px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(245,200,66,0.3)] hover:bg-[#ffe27a] transition-all transform hover:-translate-y-1"
          >
            Register Now — Free
          </a>
          <a
            href="#about"
            className="border border-white/20 text-white bg-white/5 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 text-xs font-mono uppercase tracking-widest text-white/80">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#f5c842]" />
            <span>March 15 - April 12</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#f5c842]" />
            <span>Grand Finale @ IIT Delhi</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#f5c842]" />
            <span>₹1.5L Prize Pool</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
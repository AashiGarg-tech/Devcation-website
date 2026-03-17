import { motion } from "framer-motion";

const events = [
  {
    date: "Mar 15 - Apr 01, 2026",
    title: "Mandatory Registration Task",
    desc: "Lock in your spot by completing the registration form and officially begin your journey. Don’t miss your chance to be part of the innovation!",
    status: "Live",
  },
  {
    date: "Apr 03 - Apr 04, 2026",
    title: "Hack 'N' Solve Submission",
    desc: "Teams must submit their project via Google Form, including a PPT, GitHub repository, and deployed demo link for shortlisting.",
    status: "Upcoming",
  },
  {
    date: "Apr 05 - Apr 07, 2026",
    title: "Mentorship Round (Eliminatory)",
    desc: "Shortlisted teams receive expert guidance to refine projects. Evaluation is based on progress and implementation to advance to the finals.",
    status: "Upcoming",
  },
  {
    date: "Apr 12, 2026 | 11:00 AM",
    title: "🏁 Grand Finale at IIT Delhi",
    desc: "The best teams pitch live at IIT Delhi. Present your project, impress the judges, and battle for the top prizes! 🚀",
    status: "Finals",
    highlight: true,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-[#1a0533] relative overflow-hidden">
      {/* Background Grid Mask from HackForge source */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_30%,transparent_80%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="font-mono text-[#f5c842] text-xs tracking-[0.15em] uppercase mb-3">
            // Mark your calendar
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Event <span className="text-[#f5c842]">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line with Theme Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7c3aed] to-[#f5c842] md:-translate-x-1/2" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1.5 md:-translate-x-2 mt-1.5 z-20 border-4 border-[#1a0533] ${
                  event.highlight ? "bg-[#f5c842] shadow-[0_0_15px_rgba(245,200,66,0.6)]" : "bg-[#7c3aed]"
                }`} 
              />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#f5c842]/30 transition-all group">
                  <span className="font-mono text-[#f5c842] text-xs font-bold tracking-wider">
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-[#f5c842] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#b09fcc] leading-relaxed">
                    {event.desc}
                  </p>
                  {event.status === "Live" && (
                    <span className="inline-block mt-4 px-3 py-1 bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#16a34a] text-[10px] font-mono uppercase rounded-full">
                      ● {event.status}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
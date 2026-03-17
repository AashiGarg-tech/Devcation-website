import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { 
    q: "Who can participate?", 
    a: "Devcation is open to all college students, recent graduates (within 1 year), and self-taught developers. Designers and product thinkers are also welcome!" 
  },
  { 
    q: "What's the team size?", 
    a: "Teams of 2 to 4 members. Solo participants are also welcome—we'll have a team formation channel on Discord if you're looking for teammates." 
  },
  { 
    q: "Is it free to participate?", 
    a: "Completely free! Registration, participation, mentorship, and resources are provided at no cost. Meals and stay are covered for selected finalists." 
  },
  { 
    q: "Can I start building before the hackathon?", 
    a: "No pre-built projects allowed. All code must be written during the 48-hour window. Ideas and wireframes prepared beforehand are fine." 
  },
  { 
    q: "What tech stack can I use?", 
    a: "Any tech you like! Web, mobile, AI/ML, or hardware. We recommend using tools you're already comfortable with so you can move fast." 
  },
  { 
    q: "How are projects judged?", 
    a: "Projects are evaluated on: Innovation (25%), Technical Execution (25%), Impact & Feasibility (25%), and Demo Quality (25%)." 
  },
  { 
    q: "Will there be workshops and talks?", 
    a: "Yes! We have pre-event workshops covering AI APIs and product design, plus lightning talks from sponsors during the hackathon." 
  },
];

const FaqsSection = () => {
  return (
    <section id="faqs" className="py-24 bg-[#220a40]">
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#f5c842] text-sm tracking-[0.15em] uppercase mb-3">
            // Got questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Frequently <span className="text-[#f5c842]">Asked</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                // Using the theme's surface color and border
                className="bg-white/5 border border-white/10 rounded-xl px-6 transition-all hover:border-[#7c3aed]/40 data-[state=open]:border-[#7c3aed]/60"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#f5c842] hover:no-underline font-semibold py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#b09fcc] text-[0.95rem] leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <p className="text-center mt-12 text-[#b09fcc] text-sm">
          Still have questions? Ping us on <a href="#" className="text-[#f5c842] hover:underline">Discord</a>
        </p>
      </div>
    </section>
  );
};

export default FaqsSection;
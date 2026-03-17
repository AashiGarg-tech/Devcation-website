import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    // Updated background to the specific HackForge dark purple hex
    <footer className="bg-[#1a0533] border-t border-white/10 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-extrabold text-white">
              {/* Devcation Branding matching the navbar logic */}
              <span className="text-[#f5c842]">Dev</span>cation 2026
            </div>
            {/* Tagline from HackForge source */}
            <p className="text-sm font-mono text-[#b09fcc] leading-relaxed">
              // build · learn · ship · repeat
            </p>
            <p className="text-xs text-[#b09fcc]/70">
              48 hours. Unlimited ideas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-mono text-[#f5c842]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[0.85rem] font-mono text-[#b09fcc]">
              <li><a href="#about" className="hover:text-[#f5c842] transition-colors">About</a></li>
              <li><a href="#tracks" className="hover:text-[#f5c842] transition-colors">Tracks</a></li>
              <li><a href="#timeline" className="hover:text-[#f5c842] transition-colors">Timeline</a></li>
              <li><a href="#prizes" className="hover:text-[#f5c842] transition-colors">Prizes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-mono text-[#f5c842]">
              Resources
            </h4>
            <ul className="space-y-3 text-[0.85rem] font-mono text-[#b09fcc]">
              <li><a href="#" className="hover:text-[#f5c842] transition-colors">Code of Conduct</a></li>
              <li><a href="#faqs" className="hover:text-[#f5c842] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#f5c842] transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-[#f5c842] transition-colors">DevPost</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-mono text-[#f5c842]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-[0.85rem] font-mono text-[#b09fcc]">
              <li><a href="#" className="hover:text-[#f5c842] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#f5c842] transition-colors">LinkedIn</a></li>
              {/* Contact email updated to the sponsor/support style from source */}
              <li>
                <a href="mailto:sponsor@hackforge.dev" className="text-[#f5c842] hover:underline">
                  sponsor@hackforge.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom matches HackForge copyright style */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs font-mono text-white/20 tracking-wide">
            © 2026 Devcation. Made with ⚡ for builders everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
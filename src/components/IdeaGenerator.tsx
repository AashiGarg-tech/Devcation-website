import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, RefreshCw } from "lucide-react";

const tracks = [
  "AI & Machine Learning",
  "Climate & Sustainability",
  "Health & Wellness",
  "EdTech & Learning",
  "FinTech & Inclusion",
  "Developer Tools"
];

const ideaPool = {
  "AI & Machine Learning": [
    "🧠 AI Study Buddy — A personalized learning assistant that generates quizzes from your notes and identifies knowledge gaps using spaced repetition.",
    "📸 AccessiVision — A real-time image description tool for visually impaired users using on-device ML models.",
    "🎙️ EchoClear — AI-powered real-time noise cancellation and speech enhancement for low-cost hearing aids.",
    "⚖️ BiasDetect — A tool for developers to scan training datasets for gender or racial bias before deploying ML models."
  ],
  "Climate & Sustainability": [
    "🌱 CarbonCart — Browser plugin that shows the carbon footprint of products and suggests eco-friendly alternatives.",
    "♻️ WasteWise — AI-powered waste sorting assistant. Snap a photo of trash and it tells you exactly how to recycle it.",
    "💧 AquaTrack — IoT-enabled residential water monitoring system that detects leaks and provides real-time conservation tips.",
    "🚲 GreenRoute — A navigation app that prioritizes the most shaded and least polluted walking or cycling paths in Delhi."
  ],
  "Health & Wellness": [
    "🏃 RehabFlow — Gamified physical therapy platform using pose estimation to guide exercises and track recovery progress.",
    "🧬 SymptomMapper — An anonymous community health dashboard to detect disease outbreaks early at a local level.",
    "🧘 ZenPulse — Wearable integration that detects stress spikes through heart rate variability and suggests immediate 1-minute breathing exercises.",
    "🍽️ NutriScan — AR app that scans restaurant menus to highlight dishes based on specific chronic health requirements like diabetes or hypertension."
  ],
  "EdTech & Learning": [
    "🎮 CodeQuest — RPG game where players level up by solving real coding challenges. Boss fights are algorithm problems!",
    "📚 LingoSync — Real-time peer-to-peer language exchange platform with built-in AI translation for difficult phrases.",
    "🤝 SkillSwap — A hyper-local campus network where students trade skills (e.g., 'I'll teach you Python if you teach me Guitar').",
    "📝 FocusFlow — A distraction-blocking browser environment that uses gaze-tracking to ensure students stay focused on educational content."
  ],
  "FinTech & Inclusion": [
    "💰 MicroGrant — Decentralized micro-grant platform where communities pool funds to vote on local project proposals.",
    "💳 CreditBuilder — An AI tool that helps users in underbanked regions build credit scores using alternative data like utility bills.",
    "📊 SpendWise — A financial literacy app for teenagers that uses virtual 'allowances' to teach real-world budgeting and compound interest.",
    "🏪 KiranaPay — A simplified inventory and credit management system for local small shops to track 'khata' (credit) digitally."
  ],
  "Developer Tools": [
    "🔑 ZeroLeaks — An automated secrets scanner that detects exposed API keys and passwords before they hit production.",
    "🛠️ API-Genie — A tool that automatically generates documentation and mock servers from a list of endpoints.",
    "🎨 ComponentCatalog — A CLI tool that automatically extracts and documents React components from a messy codebase into a clean library.",
    "🚀 DeployCheck — A pre-deployment checklist tool that runs accessibility, SEO, and performance audits in a single command."
  ],
};

const IdeaGenerator = () => {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [idea, setIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateIdea = () => {
    if (!selectedTrack) return;
    setIsGenerating(true);
    
    const pool = ideaPool[selectedTrack] || [];
    // Ensure the same idea isn't picked twice in a row
    const availableIdeas = pool.filter(item => item !== idea);
    const randomIdea = availableIdeas[Math.floor(Math.random() * availableIdeas.length)];
    
    setIdea(""); 

    let i = 0;
    const interval = setInterval(() => {
      setIdea(randomIdea.slice(0, i + 1));
      i++;
      if (i >= randomIdea.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 12); // Slightly faster typing speed
  };

  return (
    <section id="idea-generator" className="py-24 bg-[#1a0533] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(124,58,237,0.15),transparent)]" />
      
      <div className="container mx-auto max-w-3xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#f5c842]/10 border border-[#f5c842]/30 text-[#f5c842] text-xs font-mono px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> Powered by Gemini
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Generate Your <span className="text-[#f5c842]">Winning Idea</span>
          </h2>
          <p className="text-[#b09fcc] max-w-xl mx-auto">
             Creative sparks for Devcation Delhi 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-widest text-[#b09fcc] mb-4">Choose a Track</label>
            <div className="flex flex-wrap gap-2">
              {tracks.map((track) => (
                <button
                  key={track}
                  onClick={() => { setSelectedTrack(track); setIdea(""); }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all border ${
                    selectedTrack === track
                      ? "bg-[#7c3aed]/20 border-[#7c3aed] text-[#7c3aed]"
                      : "bg-white/5 border-white/10 text-[#b09fcc] hover:border-white/30"
                  }`}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateIdea}
            disabled={!selectedTrack || isGenerating}
            className="w-full bg-[#f5c842] text-[#1a0533] py-4 rounded-xl font-bold text-lg hover:bg-[#ffe27a] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" /> Analyzing Tracks...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" /> ⚡ Generate My Hackathon Idea
              </>
            )}
          </button>

          <AnimatePresence>
            {idea && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8 bg-black/40 rounded-xl p-6 border border-white/10"
              >
                <div className="text-xs font-mono text-[#f5c842] mb-3 uppercase tracking-tighter">✦ Your AI-generated pitch</div>
                <p className="text-white leading-relaxed whitespace-pre-wrap font-sans text-sm">{idea}</p>
                {!isGenerating && (
                  <button
                    onClick={generateIdea}
                    className="mt-6 text-xs text-[#b09fcc] hover:text-white flex items-center gap-1 font-mono transition-colors"
                  >
                    <RefreshCw className="h-3 w-3" /> Try again
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeaGenerator;
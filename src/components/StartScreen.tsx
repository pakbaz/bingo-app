interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 cyber-bg cyber-grid overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-purple-neon/50" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-purple-neon/50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-purple-neon/50" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-purple-neon/50" />
      
      <div className="text-center max-w-sm relative z-10">
        {/* Title with neon glow */}
        <h1 className="font-display text-5xl font-black tracking-wider text-purple-glow mb-2 neon-text animate-flicker">
          SOC OPS
        </h1>
        <p className="font-display text-lg text-cyan-neon tracking-[0.3em] uppercase mb-10 neon-text-cyan">
          Social Bingo
        </p>
        
        {/* Instructions card */}
        <div className="relative bg-abyss/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-purple-mid neon-box">
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-neon" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-neon" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-neon" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-neon" />
          
          <h2 className="font-display font-semibold text-purple-glow mb-4 tracking-wide uppercase text-sm">
            // Mission Briefing
          </h2>
          <ul className="text-left text-purple-glow/80 text-sm space-y-3 font-body">
            <li className="flex items-start gap-2">
              <span className="text-cyan-neon">▸</span>
              <span>Locate targets matching each dossier</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-neon">▸</span>
              <span>Tap to confirm successful contact</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-neon">▸</span>
              <span>Complete 5 in sequence to achieve BINGO</span>
            </li>
          </ul>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="relative w-full font-display font-bold py-4 px-8 text-lg tracking-widest uppercase
            bg-gradient-to-r from-purple-bright to-purple-neon text-white
            border-2 border-purple-glow rounded
            transition-all duration-300
            hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            active:scale-95 active:shadow-[0_0_15px_rgba(168,85,247,0.8)]
            neon-box"
        >
          <span className="relative z-10">Initialize Game</span>
        </button>
        
        {/* Version tag */}
        <p className="mt-8 text-purple-mid text-xs font-display tracking-wider">
          v2.0 // CYBERPUNK EDITION
        </p>
      </div>
    </div>
  );
}

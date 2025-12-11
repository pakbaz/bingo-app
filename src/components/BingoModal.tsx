interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-void/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Animated background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-neon/10 to-transparent" />
      
      <div className="relative bg-abyss border-2 border-cyan-neon rounded-lg p-8 max-w-xs w-full text-center neon-box-cyan animate-[bounce_0.5s_ease-out]">
        {/* Corner accents */}
        <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-purple-neon" />
        <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-purple-neon" />
        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-purple-neon" />
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-purple-neon" />
        
        {/* Icon */}
        <div className="text-5xl mb-4 animate-pulse-neon">⚡</div>
        
        {/* Title */}
        <h2 className="font-display text-4xl font-black text-cyan-neon mb-2 tracking-wider neon-text-cyan animate-flicker">
          BINGO!
        </h2>
        <p className="text-purple-glow/80 mb-8 font-body tracking-wide">
          Mission objective achieved
        </p>
        
        {/* Continue button */}
        <button
          onClick={onDismiss}
          className="relative w-full font-display font-bold py-3 px-6 tracking-widest uppercase
            bg-gradient-to-r from-purple-bright to-purple-neon text-white
            border-2 border-purple-glow rounded
            transition-all duration-300
            hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            active:scale-95
            neon-box"
        >
          Continue Mission
        </button>
        
        {/* Status line */}
        <p className="mt-6 text-purple-mid text-xs font-display tracking-wider">
          // LINE COMPLETE
        </p>
      </div>
    </div>
  );
}

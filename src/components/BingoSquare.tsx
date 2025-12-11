import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1.5 text-center rounded transition-all duration-200 select-none min-h-[60px] text-xs leading-tight font-body';

  const getStateClasses = () => {
    if (square.isMarked) {
      if (isWinning) {
        return 'bg-cyan-neon/20 border-2 border-cyan-neon text-cyan-neon neon-box-cyan';
      }
      return 'bg-purple-dark border-2 border-purple-neon text-purple-glow neon-box';
    }
    return 'bg-abyss/60 border border-purple-mid/50 text-purple-glow/70 hover:border-purple-neon/50 hover:bg-purple-dark/30 active:bg-purple-mid/40';
  };

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-display font-bold text-sm tracking-wider bg-gradient-to-br from-purple-bright/30 to-purple-neon/30 border-purple-neon/70' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${getStateClasses()} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className={`absolute top-0.5 right-0.5 text-xs font-display ${isWinning ? 'text-cyan-neon' : 'text-purple-neon'}`}>
          ✓
        </span>
      )}
    </button>
  );
}

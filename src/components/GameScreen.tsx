import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex flex-col min-h-full cyber-bg cyber-grid overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-purple-neon/30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-neon/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-purple-neon/30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-purple-neon/30 pointer-events-none" />
      
      {/* Header */}
      <header className="relative flex items-center justify-between p-3 bg-abyss/90 backdrop-blur-sm border-b border-purple-mid">
        <button
          onClick={onReset}
          className="font-display text-purple-glow/70 text-sm px-3 py-1.5 rounded border border-purple-mid
            hover:border-purple-neon hover:text-purple-glow transition-all duration-200
            active:bg-purple-dark/50"
        >
          ← ABORT
        </button>
        <h1 className="font-display font-bold text-purple-glow tracking-wider neon-text animate-pulse-neon">
          SOC OPS
        </h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-purple-glow/60 text-sm py-2 px-4 font-body tracking-wide">
        Tap to confirm target acquisition
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="relative bg-gradient-to-r from-cyan-neon/20 via-cyan-neon/30 to-cyan-neon/20 
          text-cyan-neon text-center py-3 font-display font-bold tracking-widest uppercase
          border-y border-cyan-neon/50 neon-box-cyan animate-pulse-neon">
          ⚡ BINGO ACHIEVED ⚡
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
      
      {/* Bottom status bar */}
      <div className="bg-abyss/80 border-t border-purple-mid px-4 py-2 flex justify-between items-center">
        <span className="font-display text-xs text-purple-mid tracking-wider">
          STATUS: {hasBingo ? 'MISSION COMPLETE' : 'IN PROGRESS'}
        </span>
        <span className="font-display text-xs text-purple-mid tracking-wider">
          {board.filter(s => s.isMarked).length}/25 MARKED
        </span>
      </div>
    </div>
  );
}

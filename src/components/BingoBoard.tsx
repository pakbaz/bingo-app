import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Board frame */}
      <div className="absolute -inset-2 border border-purple-mid/50 rounded-lg pointer-events-none" />
      <div className="absolute -inset-1 border border-purple-neon/30 rounded pointer-events-none" />
      
      {/* Corner accents */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-neon pointer-events-none" />
      <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-neon pointer-events-none" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-neon pointer-events-none" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-neon pointer-events-none" />
      
      {/* Grid */}
      <div className="grid grid-cols-5 gap-1 aspect-square bg-abyss/50 p-1 rounded">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}

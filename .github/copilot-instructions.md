# Soc Ops - Copilot Instructions

## Project Overview
A React-based social bingo game for in-person mixers. Players find people matching questions and tap squares to mark them, aiming for 5 in a row.

## Architecture

### State Flow
```
App.tsx → useBingoGame hook → bingoLogic utils
   ↓              ↓                  ↓
Screens     State + Actions    Pure functions
```

- **`useBingoGame.ts`**: Central game state hook with localStorage persistence
- **`bingoLogic.ts`**: Pure functions for board generation, toggling, and win detection
- **`types/index.ts`**: Shared domain types (`BingoSquareData`, `BingoLine`, `GameState`)

### Component Hierarchy
- `StartScreen` - Entry point with game instructions
- `GameScreen` - Main gameplay with header, board, and bingo indicator
- `BingoBoard` - 5x5 grid container
- `BingoSquare` - Individual clickable cells
- `BingoModal` - Win celebration overlay

## Commands
```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + Vite build
npm run test     # Run Vitest tests (single run)
npm run lint     # ESLint check
```

## Key Conventions

### Tailwind CSS v4
- **CSS-first config** via `@import 'tailwindcss'` and `@theme` in [index.css](src/index.css)
- Custom colors: `--color-accent`, `--color-marked`, `--color-bingo`
- Use native opacity: `bg-black/50` not `bg-opacity-50`
- See [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md)

### Component Patterns
- Functional components with explicit TypeScript interfaces for props
- Props destructuring in function signature
- Composition of Tailwind classes with template literals: `${baseClasses} ${stateClasses}`
- Use `aria-*` attributes for accessibility (see [BingoSquare.tsx](src/components/BingoSquare.tsx))

### State Management
- Single custom hook (`useBingoGame`) owns all game state
- LocalStorage persistence with version validation
- Immutable updates via `map()` for board changes
- Derived state computed with `useMemo` (e.g., `winningSquareIds`)

### Testing
- **Framework**: Vitest + React Testing Library
- **Setup**: [src/test/setup.ts](src/test/setup.ts) configures jest-dom matchers
- **Pattern**: Test pure logic in `*.test.ts` files alongside source (see [bingoLogic.test.ts](src/utils/bingoLogic.test.ts))
- Tests run in `jsdom` environment

### Data
- Questions stored in [data/questions.ts](src/data/questions.ts) as a simple string array
- Board is a 5×5 grid (25 squares), center (index 12) is always FREE SPACE
- Board shuffles questions using Fisher-Yates algorithm

## File Organization
```
src/
  components/    # React components (presentational)
  hooks/         # Custom hooks (state logic)
  utils/         # Pure helper functions
  types/         # TypeScript interfaces
  data/          # Static data (questions)
  test/          # Test setup
```

## Deployment
- Auto-deploys to GitHub Pages on push to `main`
- Base path configured via `VITE_REPO_NAME` env var

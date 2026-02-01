# Tic-Tac-Toe Game

A modern, accessible Tic-Tac-Toe game built with **React 19** and **Vite**. This project demonstrates production-ready React patterns, accessibility best practices, and clean code architecture.

## 🎮 Features

- ✨ Full Tic-Tac-Toe gameplay with win detection
- ♿ WCAG-compliant accessibility (ARIA labels, screen reader support)
- 📱 Responsive design
- ⚡ Built with Vite for fast development experience
- 🎯 Clean, maintainable code architecture
- 🧪 Separation of concerns with custom hooks
- 🎨 Module CSS for scoped styling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# The app will open at http://localhost:5173
```

### Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                    # Main application component
├── App.module.css             # App-level styles
├── index.jsx                  # React entry point
├── constants.js               # Game configuration and constants
├── components/
│   ├── Board.jsx              # Game board component
│   ├── Board.module.css       # Board styling
│   ├── Square.jsx             # Individual square component
│   └── Square.module.css      # Square styling
├── hooks/
│   └── useGameLogic.js        # Custom hook for game state & logic
└── utils/
    └── calculateWinner.js     # Game win condition logic
```

## 🎯 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production-optimized build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Automatically fix linting issues |
| `npm run format` | Format code with Prettier |

## 🏗️ Architecture

### Component Structure
- **App**: Root component providing layout and context
- **Board**: Main game logic container using `useGameLogic` hook
- **Square**: Individual playable cell with accessibility features

### State Management
Game state is managed through the `useGameLogic` custom hook, which:
- Maintains squares array, current player (X/O)
- Calculates winner and game status
- Handles square clicks and board reset
- Uses `useCallback` for optimized event handlers

### Game Logic
- **calculateWinner()**: Pure function detecting win conditions
- **Constants**: Centralized board configuration (size, square dimensions)
- **Hooks**: Custom `useGameLogic` for encapsulated game logic

## ♿ Accessibility

This game is built with accessibility in mind:

- **ARIA Labels**: Each square has descriptive labels (e.g., "Row 1, Column 1")
- **Screen Reader Support**: Status messages with `aria-live="polite"` regions
- **Keyboard Navigation**: All buttons and squares are keyboard-accessible
- **Focus Management**: Clear visual focus indicators
- **Semantic HTML**: Proper use of `<section>`, `<header>`, `<main>` elements

Tested for WCAG 2.1 Level AA compliance.

## 📋 Coding Conventions

### Naming Conventions
- **Components**: PascalCase (e.g., `Board.jsx`)
- **Props**: camelCase, prefixed with action verbs (e.g., `onSquareClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `BOARD_SIZE`)
- **Files**: kebab-case for utilities, PascalCase for components

### Code Style
- **2-space indentation** (configured in `.editorconfig`)
- **Semicolons** required
- **Single quotes** for strings
- **ESLint** for code quality
- **Prettier** for automatic formatting

### React Patterns
- Functional components only
- Custom hooks for logic extraction
- Module CSS for scoped styling
- JSDoc for function documentation
- PropTypes for runtime type checking

## 🔄 Adding New Features

### To add a new component:

1. Create new folder in `src/components/`
```bash
src/components/MyComponent/
├── MyComponent.jsx
└── MyComponent.module.css
```

2. Implement component with:
   - Functional component
   - PropTypes validation
   - ARIA labels if interactive
   - JSDoc documentation

3. Export from component and use in parent

### To add game logic:

1. Extract logic into `src/hooks/` as custom hook
2. Use `useCallback` for event handlers
3. Add JSDoc with parameter and return types
4. Test in isolation

## 🧪 Testing (Future)

When adding tests, place them alongside components:

```
src/features/game/
├── __tests__/
│   ├── useGameLogic.test.js
│   ├── Board.test.jsx
│   └── calculateWinner.test.js
```

## 🛠️ Configuration Files

- **vite.config.ts**: Vite build configuration and React plugin
- **.prettierrc**: Code formatting rules
- **.editorconfig**: Editor configuration for consistency
- **.gitignore**: Files excluded from version control
- **package.json**: Project dependencies and scripts

## 📦 Dependencies

### Runtime
- **react**: ^19.2.1 - UI library
- **react-dom**: ^19.2.1 - React DOM rendering
- **prop-types**: ^15.8.1 - Runtime prop validation

### Dev Dependencies
- **vite**: ^5.0.11 - Build tool
- **@vitejs/plugin-react**: ^4.2.1 - React support for Vite

## 🤝 Contributing

1. Follow the coding conventions above
2. Ensure all changes build successfully: `npm run build`
3. Run linting: `npm run lint`
4. Format code: `npm run format`
5. Test your changes locally

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a demonstration of production-ready React patterns and best practices.

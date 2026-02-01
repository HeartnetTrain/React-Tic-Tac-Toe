import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import design system
import './styles/tokens.css';
import './styles/global.css';
import './styles/utilities.css';

// Import app
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
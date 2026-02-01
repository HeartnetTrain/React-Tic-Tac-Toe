import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import global styles
import './styles/global.css';

// Import app
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
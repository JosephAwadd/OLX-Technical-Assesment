import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./languages/i18n";
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')).render(
  <App />
)

import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./languages/i18n";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import QueryProvider from './providers/QueryProvider.jsx';

createRoot(document.getElementById('root')).render(
  <QueryProvider>
    <App />
  </QueryProvider>
)

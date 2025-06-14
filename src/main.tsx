import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { scheduleDummyContacts } from './utils/dummyContact'

// Start the dummy contact scheduler in both dev and prod
scheduleDummyContacts();

createRoot(document.getElementById("root")!).render(<App />);

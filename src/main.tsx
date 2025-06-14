import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { runTellAJokeOnVisit } from './utils/dummyContact'

// usage:
runTellAJokeOnVisit();

createRoot(document.getElementById("root")!).render(<App />);

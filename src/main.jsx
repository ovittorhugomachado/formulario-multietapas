import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StepProvider } from './components/contexts/stepContext'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
    
  </StrictMode>,
)

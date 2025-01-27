import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StepProvider } from './components/contexts/stepContext'
import { PaymentProvider } from './components/contexts/paymentContext.jsx'
import App from './App.jsx'
import { PlanProvider } from './components/contexts/planContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepProvider>
      <PaymentProvider>
        <PlanProvider>
          <App />
        </PlanProvider>
      </PaymentProvider>
    </StepProvider>
  </StrictMode>,
)

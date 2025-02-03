import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StepProvider } from './contexts/stepContext.jsx'

import App from './App.jsx'
import { PaymentProvider } from './contexts/paymentContext.jsx'
import { PlanProvider } from './contexts/planContext.jsx'
import { AdditionalsProvider } from './contexts/additionalsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepProvider>
      <PaymentProvider>
        <PlanProvider>
          <AdditionalsProvider>
            <App />
          </AdditionalsProvider>
        </PlanProvider>
      </PaymentProvider>
    </StepProvider>
  </StrictMode>,
)

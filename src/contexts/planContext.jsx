import { useState, createContext } from "react";
import { useContext } from "react";
import { PaymentContext } from "./paymentContext";

export const PlanContext = createContext()

export const PlanProvider = ({children}) => {
    
    const { payment } = useContext(PaymentContext)

    const [ plan, setPlan] = useState()

    const changePlan = (i) => {
        setPlan(payment.plans[i].key)
    }

    return (
        <PlanContext.Provider value={{plan, setPlan, changePlan}}>
            {children}
        </PlanContext.Provider>
    )
}       
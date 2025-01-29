import { useState, createContext } from "react";

export const PlanContext = createContext()





export const PlanProvider = ({children}) => {
    
    const [ plan, setPlan] = useState(" ")

    const changePlan = (name) => {
        setPlan(name)
    }

    return (
        <PlanContext.Provider value={{plan, setPlan, changePlan}}>
            {children}

        </PlanContext.Provider>
    )
}       
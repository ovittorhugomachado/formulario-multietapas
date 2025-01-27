import { createContext, useState } from "react";

// Criando o contexto global para o pagamento
export const planContext = createContext();

// Dados dos planos de pagamento
export const plans = {
            arcade: "R$ 9/mês",
            advanced: "R$ 12/mês",
            pro: "R$ 15/mês",
        }

// Provedor do Contexto para fornecer os dados de pagamento
export const PlanProvider = ({ children }) => {
    // Inicializa o estado com o plano mensal
    const [selectedPlan, setSelectedPlan] = useState(null);
    
    // Função para alternar entre mensal e anual
    const handlePlan = (index) => {
        setSelectedPlan(index);
    };

    return (
        <planContext.Provider value={{ selectedPlan, setSelectedPlan, handlePlan }}>
            {children}
        </planContext.Provider>
    );
};

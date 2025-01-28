import { createContext, useState } from "react";

// Criando o contexto global para o pagamento
export const paymentContext = createContext();

// Dados dos planos de pagamento
export const selectPayment = {
    month: {
        positionXButton: '3px',
        plans: {
            arcade:{
                name: 'arcade',
                price: 'R$ 9/mês'
            },
            advanced: {
                name: 'advanced',
                price: 'R$ 12/mês'
            },
            pro: {
                name: 'pro',
                price: 'R$ 15/mês'
            }
        },
        additionals: {
            onlineServices: "R$ 1/mês",
            largerStorage: "R$ 2/mês",
            customizableProfile: "R$ 2/mês"
        }
    },
    year: {
        positionXButton: "24px",
        positionButton: "80px",
        plans: {
            arcade:{
                name: 'arcade',
                price: 'R$ 90/mês'
            },
            advanced: {
                name: 'advanced',
                price: 'R$ 120/mês'
            },
            pro: {
                name: 'pro',
                price: 'R$ 150/mês'
            }
        },
        additionals: {
            onlineServices: "R$ 10/ano",
            largerStorage: "R$ 20/ano",
            customizableProfile: "R$ 20/ano",
        }
    }
};

// Provedor do Contexto para fornecer os dados de pagamento
export const PaymentProvider = ({ children }) => {
    // Inicializa o estado com o plano mensal
    const [selectedPayment, setSelectedPayment] = useState(selectPayment.month);
    
    // Função para alternar entre mensal e anual
    const changePayment = () => {
        setSelectedPayment(selectedPayment === selectPayment.month ? selectPayment.year : selectPayment.month);
    };

    return (
        <paymentContext.Provider value={{ selectedPayment, setSelectedPayment, changePayment }}>
            {children}
        </paymentContext.Provider>
    );
};

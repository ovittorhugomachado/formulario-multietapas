import { createContext, useState } from "react";

export const PaymentContext = createContext()

export const plans = {
    month: {
        positionXButton: '3px',
        suffix: "/mês",
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 9,
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 12,
            },
            {   
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 15,
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Serviços online",
                price: 1,
                description: "Jogue multiplayer"
            },
            {
                key: 1,
                name: "Mais espaço",
                price: 2,
                description: "1TB extra na nuvem"
            },
            {
                key: 2,
                name: "Perfil personalizado",
                price: 2,
                description: "Customize seu perfil"
            }
        ]
    },
    year: {
        positionXButton: '23px',
        suffix: "/ano",
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 90,
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 120,
            },
            {
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 150,
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Serviços online",
                price: 10,
                description: "Jogue multiplayer"
            },
            {
                key: 1,
                name: "Mais espaço",
                price: 20,
                description: "1TB extra na nuvem"
            },
            {
                key: 2,
                name: "Perfil personalizado",
                price: 20,
                description: "Customize seu perfil"
            }
        ]
    }
};

export const PaymentProvider = ({children}) => {

    const [ payment, setPayment] = useState(plans.month)

    const changePayment = () => {
        setPayment((prevPlan) => prevPlan === plans.month ? plans.year : plans.month)
    }

    return (
        <PaymentContext.Provider value={{payment, setPayment, changePayment }}>
            {children}
        </PaymentContext.Provider>
    )
}
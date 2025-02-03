import { createContext, useState } from "react";

export const PaymentContext = createContext()

export const plans = {
    month: {
        name: 'mensal',
        positionXButton: '3px',
        suffix: "/mês",
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 9,
                payment: '/mês'
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 12,
                payment: '/mês'
            },
            {   
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 15,
                payment: '/mês'
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Serviços online",
                price: 1,
                payment: '/mês',
                description: "Jogue multiplayer"
            },
            {
                key: 1,
                name: "Mais espaço",
                price: 2,
                payment: '/mês',
                description: "1TB extra na nuvem"
            },
            {
                key: 2,
                name: "Perfil personalizado",
                price: 2,
                payment: '/mês',
                description: "Customize seu perfil"
            }
        ]
    },
    year: {
        name: 'anual',
        positionXButton: '23px',
        suffix: "/ano",
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 90,
                payment: '/ano'
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 120,
                payment: '/ano'
            },
            {
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 150,
                payment: '/ano'
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Serviços online",
                price: 10,
                payment: '/ano',
                description: "Jogue multiplayer"
            },
            {
                key: 1,
                name: "Mais espaço",
                price: 20,
                payment: '/ano',
                description: "1TB extra na nuvem"
            },
            {
                key: 2,
                name: "Perfil personalizado",
                price: 20,
                payment: '/ano',
                description: "Customize seu perfil"
            }
        ]
    }
};

export const PaymentProvider = ({children}) => {

    const [ payment, setPayment] = useState(plans.month)

    const [ listAdditionals, setListAdditionals] = useState([])

    const changePayment = () => {
        setPayment((prevPlan) => prevPlan === plans.month ? plans.year : plans.month)
    }

    const addAdditional = (name) => {
        setListAdditionals((e) => {
            if(e.includes(name)){
                return e.filter(divName => divName !== name)
            }else {
                return [...e, name]
            }
        })
    }

    return (
        <PaymentContext.Provider value={{payment, setPayment, changePayment, listAdditionals, setListAdditionals, addAdditional}}>
            {children}
        </PaymentContext.Provider>
    )
}
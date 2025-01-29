import { createContext, useState } from "react";

export const PaymentContext = createContext()


export const plans = {
    month: {
        name: 'month',
        positionXButton: '3px',
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 'R$ 9/mês'
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 'R$ 12/mês'
            },
            {   
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 'R$ 15/mês'
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Serviços online",
                price: "+R$ 1/mês",
                description: "Jogue multiplayer"
            },
            {
                key: 1,
                name: "Mais espaço",
                price: "+R$ 2/mês",
                description: "1TB extra na nuvem"
            },
            {
                key: 2,
                name: "Perfil personalizado",
                price: "+R$ 2/mês",
                description: "Customize seu perfil"
            }
        ]
    },
    year: {
        name: 'year',
        positionXButton: '23px',
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 'R$ 90/ano'
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 'R$ 120/ano'
            },
            {
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 'R$ 150/ano'
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Serviços online",
                price: "+R$ 10/ano",
                description: "Jogue multiplayer"
            },
            {
                key: 1,
                name: "Mais espaço",
                price: "+R$ 20/ano",
                description: "1TB extra na nuvem"
            },
            {
                key: 2,
                name: "Perfil personalizado",
                price: "+R$ 20/ano",
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
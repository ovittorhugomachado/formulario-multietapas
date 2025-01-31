import { createContext, useState, useContext } from "react";
import { PaymentContext } from "./paymentContext";

export const AdditionalsContext = createContext();

export const AdditionalsProvider = ({ children }) => {
    const { payment } = useContext(PaymentContext); // Obtém os adicionais da opção de pagamento atual

    const [additionals, setAdditionals] = useState([]); // Inicializa os adicionais selecionados

    const addAdditional = (additional) => {
        setAdditionals((prev) => {
            if (prev.some((item) => item.key === additional.key)) {
                return prev.filter((item) => item.key !== additional.key); // ✅ Remove o objeto corretamente
            } else {
                return [...prev, additional]; // ✅ Adiciona o objeto completo
            }
        });
    };
    

    return (
        <AdditionalsContext.Provider value={{ additionals, addAdditional }}>
            {children}
        </AdditionalsContext.Provider>
    );
};